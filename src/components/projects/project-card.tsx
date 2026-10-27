import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Project } from "@/types/project";

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

const PROJECT_INITIALS: Record<string, string> = {
  "lal-khobor": "LK",
  "bazar-dor": "BD",
  fitlog: "FL",
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const initials =
    PROJECT_INITIALS[project.slug] ?? project.title.slice(0, 2).toUpperCase();

  return (
    <article className="group flex flex-col rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xs overflow-hidden shadow-xs transition-all duration-300 hover:border-primary/40 hover:bg-card/90 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
      {/* Project Visual / Fallback Header */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-gradient-to-br from-muted/60 via-card/80 to-muted/40 border-b border-border/60 flex items-center justify-center p-6">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview screenshot`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none"
          />
        ) : (
          /* Polished Editorial Monogram Fallback */
          <div className="relative flex flex-col items-center justify-center text-center">
            {/* Subtle glow behind monogram */}
            <div
              className="absolute size-24 rounded-full bg-primary/10 blur-xl pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative flex size-16 items-center justify-center rounded-2xl bg-card border border-border/80 shadow-xs text-primary font-bold text-xl tracking-wider transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none">
              {initials}
            </div>
            <span className="text-xs font-medium text-muted-foreground mt-2.5 tracking-tight">
              {project.tagline}
            </span>
          </div>
        )}

        {/* Category Pill Tag */}
        <div className="absolute top-3.5 right-3.5">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-background/80 backdrop-blur-xs border border-border/60 text-[11px] font-medium text-muted-foreground">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h3 className="text-lg font-bold text-foreground tracking-tight transition-colors group-hover:text-primary mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies List */}
        <div
          className="flex flex-wrap gap-1.5 mb-6"
          aria-label="Technologies used"
        >
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-muted/70 border border-border/50 text-xs font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-4 border-t border-border/60 mt-auto">
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit live demo for ${project.title}`}
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-3.5 text-xs font-medium shadow-xs gap-1.5 inline-flex items-center transition-transform active:scale-95 motion-reduce:transform-none"
              )}
            >
              <span>Live Demo</span>
              <ExternalLink className="size-3" aria-hidden="true" />
            </a>

            <Link
              href={`/projects/${project.slug}`}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "rounded-full border-border/80 text-foreground hover:bg-muted/60 h-8 px-3.5 text-xs font-medium gap-1.5 inline-flex items-center transition-transform active:scale-95 motion-reduce:transform-none"
              )}
            >
              <span>View Details</span>
              <ArrowRight
                className="size-3 text-muted-foreground"
                aria-hidden="true"
              />
            </Link>
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            className="flex size-8 items-center justify-center rounded-full border border-border/80 bg-background/80 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <GitHubIcon className="size-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
