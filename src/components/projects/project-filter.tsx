"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  PROJECT_CATEGORIES,
  ProjectCategoryFilter,
  PROJECTS,
} from "@/data/projects";

interface ProjectFilterProps {
  activeCategory: ProjectCategoryFilter;
  onSelectCategory: (category: ProjectCategoryFilter) => void;
}

export function ProjectFilter({
  activeCategory,
  onSelectCategory,
}: ProjectFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by category"
      className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10"
    >
      {PROJECT_CATEGORIES.map((category) => {
        const isActive = activeCategory === category;
        const count =
          category === "All"
            ? PROJECTS.length
            : PROJECTS.filter((p) => p.category === category).length;

        return (
          <button
            key={category}
            type="button"
            role="tab"
            id={`tab-project-${category.toLowerCase().replace(/\s+/g, "-")}`}
            aria-selected={isActive}
            aria-controls="projects-display"
            onClick={() => onSelectCategory(category)}
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
  );
}

export default ProjectFilter;
