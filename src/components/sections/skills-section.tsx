"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  SKILLS,
  SKILL_CATEGORIES,
  CATEGORY_LABELS,
  SkillCategoryFilter,
} from "@/data/skills";
import { SkillCategory as SkillCategoryType } from "@/types/skill";
import { SkillCategory } from "@/components/skills/skill-category";
import { SkillCard } from "@/components/skills/skill-card";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] =
    React.useState<SkillCategoryFilter>("All");

  const categories: readonly SkillCategoryType[] = [
    "Frontend",
    "Backend",
    "Database",
    "Tools",
  ];

  const filteredSkills = React.useMemo(() => {
    if (activeCategory === "All") return SKILLS;
    return SKILLS.filter((skill) => skill.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative w-full py-16 sm:py-20 lg:py-24 border-t border-border/40"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left max-w-2xl mb-10 sm:mb-12">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/80 bg-card/60 backdrop-blur-xs text-xs font-semibold uppercase tracking-wider text-primary shadow-2xs mb-4">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            <span>Tech Stack</span>
          </div>

          <h2
            id="skills-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.2] mb-4"
          >
            The tools I use to bring ideas to life.
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed">
            A curated overview of the frontend technologies, modern frameworks, backend
            runtimes, and developer tooling I practice with and use across my personal
            projects.
          </p>
        </div>

        {/* Category Filters */}
        <div
          role="tablist"
          aria-label="Filter skills by category"
          className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10"
        >
          {SKILL_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            const count =
              category === "All"
                ? SKILLS.length
                : SKILLS.filter((s) => s.category === category).length;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                id={`tab-${category.toLowerCase()}`}
                aria-selected={isActive}
                aria-controls="skills-display"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transition-none cursor-pointer",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                    : "border border-border/80 bg-card/60 backdrop-blur-xs text-muted-foreground hover:text-foreground hover:bg-muted/60"
                )}
              >
                <span>{category}</span>
                <span
                  className={cn(
                    "text-[10px] px-1.5 py-0.5 rounded-full leading-none",
                    isActive
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Display Area */}
        <div
          id="skills-display"
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory.toLowerCase()}`}
          className="space-y-8 sm:space-y-10"
        >
          {activeCategory === "All" ? (
            // Grouped Category View
            categories.map((cat) => {
              const categorySkills = SKILLS.filter(
                (skill) => skill.category === cat
              );
              return (
                <SkillCategory
                  key={cat}
                  title={CATEGORY_LABELS[cat]}
                  skills={categorySkills}
                />
              );
            })
          ) : (
            // Filtered Grid View
            <div className="space-y-3.5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                <span>{CATEGORY_LABELS[activeCategory]}</span>
                <span className="text-xs font-normal text-muted-foreground/70">
                  ({filteredSkills.length})
                </span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-3.5">
                {filteredSkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
