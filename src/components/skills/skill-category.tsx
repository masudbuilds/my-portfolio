import * as React from "react";
import { Skill } from "@/types/skill";
import { SkillCard } from "@/components/skills/skill-card";

interface SkillCategoryProps {
  title: string;
  skills: readonly Skill[];
}

export function SkillCategory({ title, skills }: SkillCategoryProps) {
  if (skills.length === 0) return null;

  return (
    <div className="space-y-3.5">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
        <span>{title}</span>
        <span className="text-xs font-normal text-muted-foreground/70">
          ({skills.length})
        </span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-3.5">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;
