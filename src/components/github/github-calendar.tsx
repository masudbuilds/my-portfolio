"use client";

import * as React from "react";
import { ContributionDay, ContributionWeek } from "@/types/github";
import { formatDisplayDate } from "@/lib/github";
import { cn } from "@/lib/utils";

interface GitHubCalendarProps {
  weeks: ContributionWeek[];
  days: ContributionDay[];
}

const LEVEL_CLASSES: Record<number, string> = {
  0: "bg-[#EFEFEA] hover:bg-[#E5E5DE] dark:bg-[#1E1E22] dark:hover:bg-[#28282D]",
  1: "bg-[#A7F3D0] hover:bg-[#86EFAC] dark:bg-[#064E3B] dark:hover:bg-[#065F46]",
  2: "bg-[#34D399] hover:bg-[#10B981] dark:bg-[#047857] dark:hover:bg-[#059669]",
  3: "bg-[#059669] hover:bg-[#047857] dark:bg-[#10B981] dark:hover:bg-[#34D399]",
  4: "bg-[#065F46] hover:bg-[#064E3B] dark:bg-[#34D399] dark:hover:bg-[#6EE7B7]",
};

export function GitHubCalendar({ weeks, days }: GitHubCalendarProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const latestDay = days[days.length - 1] ?? null;
  const [activeDay, setActiveDay] = React.useState<ContributionDay | null>(
    latestDay,
  );

  // Auto-scroll to end on small screens so the latest contributions are immediately visible
  React.useEffect(() => {
    if (containerRef.current && window.innerWidth < 768) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth;
    }
  }, []);

  // Compute month labels based on week columns
  const monthLabels = React.useMemo(() => {
    const labels: { text: string; weekIndex: number }[] = [];
    let lastMonth = -1;

    weeks.forEach((week, weekIndex) => {
      const firstDay = week.days[0];
      if (firstDay) {
        const [, m] = firstDay.date.split("-").map(Number);
        if (m !== lastMonth) {
          const date = new Date(firstDay.date + "T00:00:00Z");
          const monthText = date.toLocaleDateString("en-US", {
            month: "short",
            timeZone: "UTC",
          });
          const prevIndex =
            labels.length > 0 ? labels[labels.length - 1].weekIndex : -10;
          if (weekIndex - prevIndex >= 2) {
            labels.push({ text: monthText, weekIndex });
            lastMonth = m;
          }
        }
      }
    });

    return labels;
  }, [weeks]);

  // Weekday row indices to label (Mon=1, Wed=3, Fri=5)
  const weekdayLabels: Record<number, string> = {
    1: "Mon",
    3: "Wed",
    5: "Fri",
  };

  const selectedDay = activeDay ?? latestDay;

  return (
    <div className="w-full">
      {/* Calendar Scroll Area */}
      <div
        ref={containerRef}
        className="overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-border"
        tabIndex={0}
        aria-label="GitHub contribution calendar"
      >
        <div className="min-w-180 select-none">
          {/* Month Labels Header */}
          <div className="relative h-5 mb-1.5 ml-8">
            {monthLabels.map(({ text, weekIndex }) => (
              <span
                key={`${text}-${weekIndex}`}
                style={{
                  left: `${weekIndex * 14}px`,
                }}
                className="absolute text-[10px] font-medium text-muted-foreground/80 tracking-tight"
              >
                {text}
              </span>
            ))}
          </div>

          {/* Grid: Weekday labels + Week columns */}
          <div className="flex gap-2 items-start">
            {/* Weekday Labels Column */}
            <div className="flex flex-col gap-0.75 w-6 shrink-0 pt-px text-right pr-1">
              {[0, 1, 2, 3, 4, 5, 6].map((rowIdx) => (
                <div
                  key={rowIdx}
                  className="h-2.75 sm:h-3 flex items-center justify-end"
                >
                  {weekdayLabels[rowIdx] && (
                    <span className="text-[10px] leading-none font-medium text-muted-foreground/80">
                      {weekdayLabels[rowIdx]}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Weeks Container */}
            <div className="flex gap-0.75 flex-1">
              {weeks.map((week, weekIdx) => {
                // Ensure 7 slots per week (0=Sunday to 6=Saturday)
                const dayMap = new Map<number, ContributionDay>();
                week.days.forEach((d) => dayMap.set(d.weekday, d));

                return (
                  <div key={weekIdx} className="flex flex-col gap-0.75">
                    {[0, 1, 2, 3, 4, 5, 6].map((weekday) => {
                      const day = dayMap.get(weekday);
                      if (!day) {
                        return (
                          <div
                            key={weekday}
                            className="size-2.75 sm:size-3 rounded-xs opacity-0"
                            aria-hidden="true"
                          />
                        );
                      }

                      const isSelected = selectedDay?.date === day.date;

                      return (
                        <button
                          key={day.date}
                          type="button"
                          onClick={() => setActiveDay(day)}
                          onMouseEnter={() => setActiveDay(day)}
                          onFocus={() => setActiveDay(day)}
                          aria-label={`${day.contributionCount} contributions on ${day.date}`}
                          className={cn(
                            "size-2.75 sm:size-3 rounded-xs transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary",
                            LEVEL_CLASSES[day.level] ?? LEVEL_CLASSES[0],
                            isSelected &&
                              "ring-2 ring-foreground/90 ring-offset-1 ring-offset-background z-10 scale-110",
                          )}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Bottom Bar: Active Day Preview + Intensity Legend */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-border/60 text-xs">
        {/* Selected Day Details */}
        <div className="text-muted-foreground">
          {selectedDay ? (
            <p>
              <strong className="font-semibold text-foreground">
                {selectedDay.contributionCount} contribution
                {selectedDay.contributionCount === 1 ? "" : "s"}
              </strong>{" "}
              on {formatDisplayDate(selectedDay.date)}
            </p>
          ) : (
            <p>Hover or click a day for details</p>
          )}
        </div>

        {/* Intensity Legend */}
        <div
          className="flex items-center gap-1.5 text-muted-foreground self-start sm:self-auto"
          aria-label="Contribution count legend"
        >
          <span className="text-[11px]">Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <span
              key={level}
              className={cn(
                "size-2.75 rounded-xs inline-block",
                LEVEL_CLASSES[level],
              )}
              aria-hidden="true"
            />
          ))}
          <span className="text-[11px]">More</span>
        </div>
      </div>
    </div>
  );
}

export default GitHubCalendar;
