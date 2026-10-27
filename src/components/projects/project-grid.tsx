import * as React from "react";
import { Project } from "@/types/project";
import { ProjectCard } from "@/components/projects/project-card";

interface ProjectGridProps {
  projects: readonly Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center rounded-3xl border border-dashed border-border/80 bg-card/30">
        <p className="text-sm text-muted-foreground">
          No projects found in this category.
        </p>
      </div>
    );
  }

  return (
    <div
      id="projects-grid"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
    >
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}

export default ProjectGrid;
