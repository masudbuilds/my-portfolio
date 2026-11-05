import {
  ContributionDay,
  ContributionWeek,
  GitHubActivityData,
} from "@/types/github";

const GITHUB_GRAPHQL_ENDPOINT = "https://api.github.com/graphql";
const GITHUB_USERNAME = "masudbuilds";

const CONTRIBUTIONS_QUERY = `
  query($userName: String!) {
    user(login: $userName) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              weekday
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

function parseGraphQLLevel(level: string): 0 | 1 | 2 | 3 | 4 {
  switch (level) {
    case "FIRST_QUARTILE":
      return 1;
    case "SECOND_QUARTILE":
      return 2;
    case "THIRD_QUARTILE":
      return 3;
    case "FOURTH_QUARTILE":
      return 4;
    case "NONE":
    default:
      return 0;
  }
}

export function formatDisplayDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function calculateStreaks(days: ContributionDay[]): {
  currentStreak: number;
  longestStreak: number;
} {
  if (!days || days.length === 0) {
    return { currentStreak: 0, longestStreak: 0 };
  }

  let longestStreak = 0;
  let runningStreak = 0;

  for (const day of days) {
    if (day.contributionCount > 0) {
      runningStreak++;
      if (runningStreak > longestStreak) {
        longestStreak = runningStreak;
      }
    } else {
      runningStreak = 0;
    }
  }

  // Current streak calculation
  let currentStreak = 0;
  const lastIndex = days.length - 1;
  const todayCount = days[lastIndex]?.contributionCount ?? 0;

  // An inactive today keeps yesterday's streak until the day ends
  const startIndex = todayCount === 0 ? lastIndex - 1 : lastIndex;

  for (let i = startIndex; i >= 0; i--) {
    if (days[i]?.contributionCount > 0) {
      currentStreak++;
    } else {
      break;
    }
  }

  return { currentStreak, longestStreak };
}

/**
 * Fetch contribution data using official GitHub GraphQL API with GITHUB_TOKEN
 */
async function fetchFromGraphQL(
  username: string,
  token: string,
): Promise<GitHubActivityData | null> {
  const response = await fetch(GITHUB_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "masudbuilds-portfolio",
    },
    body: JSON.stringify({
      query: CONTRIBUTIONS_QUERY,
      variables: { userName: username },
    }),
    next: { revalidate: 3600 }, // 1 hour server cache
  });

  if (!response.ok) {
    return null;
  }

  const json = await response.json();
  const calendar =
    json?.data?.user?.contributionsCollection?.contributionCalendar;

  if (!calendar || !calendar.weeks) {
    return null;
  }

  const allDays: ContributionDay[] = [];
  const weeks: ContributionWeek[] = calendar.weeks.map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (week: { contributionDays: any[] }) => {
      const days: ContributionDay[] = week.contributionDays.map((day) => {
        const item: ContributionDay = {
          date: day.date,
          contributionCount: day.contributionCount,
          weekday: day.weekday,
          level: parseGraphQLLevel(day.contributionLevel),
        };
        allDays.push(item);
        return item;
      });
      return { days };
    },
  );

  if (allDays.length === 0) return null;

  const { currentStreak, longestStreak } = calculateStreaks(allDays);
  const startDate = allDays[0].date;
  const endDate = allDays[allDays.length - 1].date;

  return {
    username,
    totalContributions: calendar.totalContributions,
    currentStreak,
    longestStreak,
    dateRange: {
      start: formatDisplayDate(startDate),
      end: formatDisplayDate(endDate),
    },
    weeks,
    days: allDays,
    updatedAt: new Date().toISOString(),
  };
}

/**
 * Fallback to public GitHub contribution proxy when GITHUB_TOKEN is not configured
 */
async function fetchFromPublicProxy(
  username: string,
): Promise<GitHubActivityData | null> {
  const url = `https://github-contributions-api.jogruber.de/v4/${username}?y=last`;
  const response = await fetch(url, {
    headers: {
      "User-Agent": "masudbuilds-portfolio",
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    return null;
  }

  const json = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const contributions: any[] = json?.contributions;

  if (!Array.isArray(contributions) || contributions.length === 0) {
    return null;
  }

  const allDays: ContributionDay[] = contributions.map((c) => {
    const [y, m, d] = c.date.split("-").map(Number);
    const dateObj = new Date(Date.UTC(y, m - 1, d));
    const levelVal = Math.min(Math.max(Number(c.level) || 0, 0), 4) as
      | 0
      | 1
      | 2
      | 3
      | 4;

    return {
      date: c.date,
      contributionCount: Number(c.count) || 0,
      weekday: dateObj.getUTCDay(),
      level: levelVal,
    };
  });

  // Group days into weeks (starting from day 0 weekday)
  const weeks: ContributionWeek[] = [];
  let currentWeek: ContributionDay[] = [];

  for (const day of allDays) {
    if (day.weekday === 0 && currentWeek.length > 0) {
      weeks.push({ days: currentWeek });
      currentWeek = [];
    }
    currentWeek.push(day);
  }
  if (currentWeek.length > 0) {
    weeks.push({ days: currentWeek });
  }

  const totalContributions =
    json?.total?.lastYear ??
    allDays.reduce((acc, curr) => acc + curr.contributionCount, 0);

  const { currentStreak, longestStreak } = calculateStreaks(allDays);
  const startDate = allDays[0].date;
  const endDate = allDays[allDays.length - 1].date;

  return {
    username,
    totalContributions,
    currentStreak,
    longestStreak,
    dateRange: {
      start: formatDisplayDate(startDate),
      end: formatDisplayDate(endDate),
    },
    weeks,
    days: allDays,
    updatedAt: new Date().toISOString(),
  };
}

/**
 * Main server-side retrieval function
 */
export async function getGitHubActivity(
  username: string = GITHUB_USERNAME,
): Promise<GitHubActivityData | null> {
  const token = process.env.GITHUB_TOKEN;

  // 1. Primary: Use official GraphQL API if token is provided
  if (token) {
    try {
      const graphQLData = await fetchFromGraphQL(username, token);
      if (graphQLData) return graphQLData;
    } catch {
      // Proceed to fallback
    }
  }

  // 2. Secondary: Public fallback if no token or GraphQL failed
  try {
    const proxyData = await fetchFromPublicProxy(username);
    if (proxyData) return proxyData;
  } catch {
    // Both failed
  }

  return null;
}
