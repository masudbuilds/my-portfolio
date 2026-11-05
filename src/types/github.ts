export interface ContributionDay {
  date: string; // YYYY-MM-DD
  contributionCount: number;
  weekday: number; // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  level: 0 | 1 | 2 | 3 | 4;
}

export interface ContributionWeek {
  days: ContributionDay[];
}

export interface GitHubActivityData {
  username: string;
  totalContributions: number;
  currentStreak: number;
  longestStreak: number;
  dateRange: {
    start: string;
    end: string;
  };
  weeks: ContributionWeek[];
  days: ContributionDay[];
  updatedAt: string;
}

export interface GitHubApiResponse {
  success: boolean;
  data?: GitHubActivityData;
  error?: string;
}
