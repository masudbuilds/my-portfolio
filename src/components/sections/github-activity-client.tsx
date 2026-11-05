"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { GitHubActivityData } from "@/types/github";
import { GitHubStats } from "@/components/github/github-stats";
import { GitHubCalendar } from "@/components/github/github-calendar";
import { GitHubFallback } from "@/components/github/github-fallback";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

interface GitHubActivityClientProps {
  initialData: GitHubActivityData | null;
}

export function GitHubActivityClient({
  initialData,
}: GitHubActivityClientProps) {
  const [data, setData] = React.useState<GitHubActivityData | null>(initialData);
  const [isLoading, setIsLoading] = React.useState(!initialData);
  const [hasError, setHasError] = React.useState(false);

  // If no initialData (e.g. built offline without token), attempt client-side hydration
  React.useEffect(() => {
    if (initialData) return;

    let isMounted = true;

    async function loadClientData() {
      try {
        const response = await fetch("/api/github");
        if (!response.ok) {
          throw new Error("Failed to fetch activity");
        }
        const json = await response.json();
        if (isMounted) {
          if (json?.success && json?.data) {
            setData(json.data);
          } else {
            setHasError(true);
          }
        }
      } catch {
        if (isMounted) {
          setHasError(true);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadClientData();

    return () => {
      isMounted = false;
    };
  }, [initialData]);

  return (
    <section
      id="github-activity"
      aria-labelledby="github-activity-heading"
      className="relative w-full py-16 sm:py-20 lg:py-24 border-t border-border/40"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div className="flex flex-col items-start text-left">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/80 bg-card/60 backdrop-blur-xs text-xs font-semibold uppercase tracking-wider text-primary shadow-2xs mb-3">
              <span
                className="size-1.5 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span>Open Source Activity</span>
            </div>

            <h2
              id="github-activity-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15]"
            >
              GitHub activity<span className="text-primary">.</span>
            </h2>
          </div>

          {/* GitHub Profile Link */}
          <a
            href="https://github.com/masudbuilds"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group w-fit self-start sm:self-end pb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            aria-label="View @masudbuilds profile on GitHub"
          >
            <GitHubIcon className="size-4" />
            <span>@masudbuilds</span>
            <ArrowUpRight
              className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Content Box */}
        {isLoading ? (
          <div className="rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xs p-8 sm:p-12 shadow-xs flex flex-col items-center justify-center min-h-[300px]">
            <div className="size-8 rounded-full border-2 border-primary border-t-transparent animate-spin mb-4" />
            <p className="text-xs text-muted-foreground">
              Loading GitHub activity...
            </p>
          </div>
        ) : hasError || !data ? (
          <GitHubFallback username="masudbuilds" />
        ) : (
          <div className="rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xs p-6 sm:p-8 md:p-10 shadow-xs">
            {/* 1. Statistics Cards */}
            <GitHubStats
              totalContributions={data.totalContributions}
              currentStreak={data.currentStreak}
              longestStreak={data.longestStreak}
            />

            {/* Divider */}
            <div className="border-t border-border/60 my-6 sm:my-8" />

            {/* Date Range Meta Row */}
            <div className="flex items-center justify-between text-xs text-muted-foreground font-medium mb-3">
              <span>
                {data.dateRange.start} — {data.dateRange.end}
              </span>
              <span>Daily contributions · UTC</span>
            </div>

            {/* 2. Contribution Calendar Heatmap */}
            <GitHubCalendar weeks={data.weeks} days={data.days} />

            {/* Footer Note */}
            <div className="border-t border-border/60 pt-4 mt-6">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Streaks use the displayed 365 days. An inactive today keeps
                yesterday&apos;s streak until the day ends. Data refreshes
                approximately hourly.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default GitHubActivityClient;
