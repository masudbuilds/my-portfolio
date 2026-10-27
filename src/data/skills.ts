import { Skill, SkillCategory } from "@/types/skill";

export const SKILL_CATEGORIES = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
] as const;

export type SkillCategoryFilter = (typeof SKILL_CATEGORIES)[number];

export const CATEGORY_LABELS: Record<SkillCategory, string> = {
  Frontend: "Frontend Development",
  Backend: "Backend & APIs",
  Database: "Database",
  Tools: "Tools & Libraries",
};

export const SKILLS: readonly Skill[] = [
  // Frontend
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },

  // Backend
  { name: "Next.js API Routes", category: "Backend" },
  { name: "Node.js", category: "Backend" },

  // Database
  { name: "MongoDB", category: "Database" },

  // Tools & Libraries
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Vercel", category: "Tools" },
  { name: "DaisyUI", category: "Tools" },
  { name: "shadcn/ui", category: "Tools" },
  { name: "Lucide React", category: "Tools" },
] as const;
