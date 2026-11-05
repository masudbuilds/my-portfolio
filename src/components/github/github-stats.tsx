import * as React from "react";

interface GitHubStatsProps {
  totalContributions: number;
  currentStreak: number;
  longestStreak: number;
}

export function GitHubStats({
  totalContributions,
  currentStreak,
  longestStreak,
}: GitHubStatsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border/60">
      {/* Stat 1: Total Contributions */}
      <div className="py-4 sm:py-2 sm:pr-6 md:pr-8">
        <p className="text-xs font-medium text-muted-foreground mb-2 sm:mb-3">
          Contributions
        </p>
        <p className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          {totalContributions.toLocaleString()}
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          in the last 365 days
        </p>
      </div>

      {/* Stat 2: Current Streak (Emerald Highlight) */}
      <div className="py-4 sm:py-2 sm:px-6 md:px-8">
        <p className="text-xs font-medium text-muted-foreground mb-2 sm:mb-3">
          Current streak
        </p>
        <p className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
          {currentStreak.toLocaleString()}
        </p>
        <p className="text-xs text-muted-foreground mt-2">consecutive days</p>
      </div>

      {/* Stat 3: Longest Streak */}
      <div className="py-4 sm:py-2 sm:pl-6 md:pl-8">
        <p className="text-xs font-medium text-muted-foreground mb-2 sm:mb-3">
          Longest streak
        </p>
        <p className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          {longestStreak.toLocaleString()}
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          within this period
        </p>
      </div>
    </div>
  );
}

export default GitHubStats;
