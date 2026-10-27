import * as React from "react";
import {
  FileCode2,
  Palette,
  Atom,
  Layers,
  Server,
  Terminal,
  Database,
  GitBranch,
  Triangle,
  Component,
  Box,
  Sparkles,
  LucideIcon,
} from "lucide-react";
import { Skill } from "@/types/skill";

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

const SKILL_ICONS: Record<
  string,
  LucideIcon | React.ComponentType<{ className?: string }>
> = {
  HTML: FileCode2,
  CSS: Palette,
  JavaScript: FileCode2,
  TypeScript: FileCode2,
  React: Atom,
  "Next.js": Layers,
  "Tailwind CSS": Palette,
  "Next.js API Routes": Server,
  "Node.js": Terminal,
  MongoDB: Database,
  Git: GitBranch,
  GitHub: GitHubIcon,
  Vercel: Triangle,
  DaisyUI: Component,
  "shadcn/ui": Box,
  "Lucide React": Sparkles,
};

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  const IconComponent = SKILL_ICONS[skill.name] ?? Box;

  return (
    <div className="group flex items-center gap-3.5 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xs p-3.5 sm:p-4 shadow-xs transition-all duration-200 hover:border-primary/40 hover:bg-card/90 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:transform-none">
      <div
        className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0 transition-transform duration-200 group-hover:scale-105 motion-reduce:transform-none"
        aria-hidden="true"
      >
        <IconComponent className="size-5" />
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-semibold text-foreground truncate">
          {skill.name}
        </h4>
        <span className="text-xs text-muted-foreground">
          {skill.category}
        </span>
      </div>
    </div>
  );
}

export default SkillCard;
