"use client";

import * as React from "react";
import { PROJECTS, ProjectCategoryFilter } from "@/data/projects";
import { ProjectFilter } from "@/components/projects/project-filter";
import { ProjectGrid } from "@/components/projects/project-grid";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] =
    React.useState<ProjectCategoryFilter>("All");

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative w-full py-16 sm:py-20 lg:py-24 border-t border-border/40"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left max-w-2xl mb-10 sm:mb-12">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/80 bg-card/60 backdrop-blur-xs text-xs font-semibold uppercase tracking-wider text-primary shadow-2xs mb-4">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            <span>Selected Work</span>
          </div>

          <h2
            id="projects-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.2] mb-4"
          >
            Projects built to solve real problems.
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed">
            A selection of personal projects where I put my development skills into
            practice, explore useful ideas, and build practical digital
            experiences.
          </p>
        </div>

        {/* Category Filters */}
        <ProjectFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Projects Grid Display */}
        <div
          id="projects-display"
          role="tabpanel"
          aria-labelledby={`tab-project-${activeCategory.toLowerCase().replace(/\s+/g, "-")}`}
        >
          <ProjectGrid projects={filteredProjects} />
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
