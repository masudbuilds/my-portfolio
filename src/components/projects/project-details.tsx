import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Layers,
  Cpu,
  Lightbulb,
  ChevronRight,
} from "lucide-react";
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

interface ProjectDetailsProps {
  project: Project;
  otherProjects: readonly Project[];
}

export function ProjectDetails({ project, otherProjects }: ProjectDetailsProps) {
  return (
    <article className="relative w-full py-10 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 w-full">
        {/* A. Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-muted-foreground mb-8 sm:mb-10"
        >
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link
                href="/#home"
                className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="size-3 text-muted-foreground/60" />
            </li>
            <li>
              <Link
                href="/#projects"
                className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                Projects
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="size-3 text-muted-foreground/60" />
            </li>
            <li>
              <span
                className="font-medium text-foreground truncate max-w-[200px] sm:max-w-xs inline-block"
                aria-current="page"
              >
                {project.title}
              </span>
            </li>
          </ol>
        </nav>

        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors mb-6 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5 motion-reduce:transform-none" />
          <span>Back to all projects</span>
        </Link>

        {/* B. Project Hero */}
        <header className="rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xs p-6 sm:p-8 md:p-10 shadow-xs mb-10 sm:mb-12">
          {/* Eyebrow Category */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/80 bg-background/80 backdrop-blur-xs text-xs font-semibold uppercase tracking-wider text-primary shadow-2xs mb-4">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            <span>{project.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-2">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg font-medium text-primary mb-5">
            {project.tagline}
          </p>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div
            className="flex flex-wrap gap-2 mb-8"
            aria-label="Technologies used in this project"
          >
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-3 py-1 rounded-lg bg-muted/80 border border-border/60 text-xs font-medium text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2 border-t border-border/60">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-6 text-sm font-medium shadow-xs gap-2 inline-flex items-center transition-transform active:scale-95 motion-reduce:transform-none"
              )}
            >
              <span>Live Demo</span>
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full border-border/80 bg-background/80 hover:bg-muted/60 text-foreground h-11 px-6 text-sm font-medium gap-2 inline-flex items-center transition-transform active:scale-95 motion-reduce:transform-none"
              )}
            >
              <GitHubIcon className="size-4" />
              <span>View Source Code</span>
            </a>
          </div>
        </header>

        {/* Content Grid */}
        <div className="space-y-10 sm:space-y-12">
          {/* C. Project Overview */}
          <section
            aria-labelledby="overview-heading"
            className="rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xs p-6 sm:p-8 shadow-xs"
          >
            <h2
              id="overview-heading"
              className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4"
            >
              Project Overview
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {project.overview}
            </p>
          </section>

          {/* D. Key Features */}
          <section
            aria-labelledby="features-heading"
            className="rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xs p-6 sm:p-8 shadow-xs"
          >
            <h2
              id="features-heading"
              className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-5"
            >
              Key Features
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2
                    className="size-5 text-primary shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed text-foreground/90">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* E. Technology Stack */}
          <section
            aria-labelledby="tech-heading"
            className="rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xs p-6 sm:p-8 shadow-xs"
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20"
                aria-hidden="true"
              >
                <Layers className="size-5" />
              </div>
              <h2
                id="tech-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-foreground"
              >
                Technology Stack
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="rounded-2xl border border-border/80 bg-background/80 p-3.5 text-center shadow-2xs"
                >
                  <p className="text-sm font-semibold text-foreground">{tech}</p>
                </div>
              ))}
            </div>
          </section>

          {/* F. Areas of Technical Focus */}
          <section
            aria-labelledby="focus-heading"
            className="rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xs p-6 sm:p-8 shadow-xs"
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20"
                aria-hidden="true"
              >
                <Cpu className="size-5" />
              </div>
              <h2
                id="focus-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-foreground"
              >
                Areas of Technical Focus
              </h2>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {project.technicalFocus.map((focus) => (
                <li
                  key={focus}
                  className="flex items-start gap-3 rounded-2xl border border-border/50 bg-background/40 p-4"
                >
                  <span
                    className="size-2 rounded-full bg-primary shrink-0 mt-2"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed text-foreground/90">{focus}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* G. Future Improvements */}
          <section
            aria-labelledby="improvements-heading"
            className="rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xs p-6 sm:p-8 shadow-xs"
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20"
                aria-hidden="true"
              >
                <Lightbulb className="size-5" />
              </div>
              <h2
                id="improvements-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-foreground"
              >
                Future Improvements
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Potential enhancements envisioned for future iterations of this
              project:
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {project.futureImprovements.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border/50 bg-background/40 p-4"
                >
                  <span
                    className="size-2 rounded-full bg-primary/80 shrink-0 mt-2"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* H. Project Navigation (Other Projects) */}
          <section
            aria-labelledby="other-projects-heading"
            className="pt-6 border-t border-border/60"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2
                  id="other-projects-heading"
                  className="text-xl sm:text-2xl font-bold tracking-tight text-foreground"
                >
                  Explore Other Projects
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  More work from Masud Rana&apos;s portfolio
                </p>
              </div>

              <Link
                href="/#projects"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "rounded-full border-border/80 text-foreground hover:bg-muted/60 text-xs font-medium w-fit gap-1.5"
                )}
              >
                <span>All Projects</span>
                <ArrowRight className="size-3" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {otherProjects.map((other) => (
                <Link
                  key={other.slug}
                  href={`/projects/${other.slug}`}
                  className="group flex flex-col justify-between rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xs p-6 shadow-xs transition-all duration-200 hover:border-primary/40 hover:bg-card/90 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:transform-none"
                >
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                      {other.category}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
                      {other.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                      {other.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-medium text-primary mt-5">
                    <span>View Project</span>
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}

export default ProjectDetails;
