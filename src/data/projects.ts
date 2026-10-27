import { Project } from "@/types/project";

export const PROJECT_CATEGORIES = [
  "All",
  "Web Applications",
  "Content & News",
  "Productivity",
] as const;

export type ProjectCategoryFilter = (typeof PROJECT_CATEGORIES)[number];

export const PROJECTS: readonly Project[] = [
  {
    slug: "lal-khobor",
    title: "Lal Khobor (লাল খবর)",
    tagline: "Bengali Digital Newspaper Platform",
    description:
      "A modern Bengali digital news platform with live news marquee, user authentication, bookmarks, and personalized profile management.",
    category: "Content & News",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "MongoDB",
      "Better Auth",
    ],
    liveUrl: "https://lal-khobor.vercel.app/",
    githubUrl: "https://github.com/masudbuilds/lal-khobor",
  },
  {
    slug: "bazar-dor",
    title: "BazarDor (বাজার দর)",
    tagline: "Grocery & Commodity Price Tracker",
    description:
      "A practical market commodity application designed to track and display everyday grocery prices with clean categorization and fast search.",
    category: "Web Applications",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js API Routes",
    ],
    liveUrl: "https://bazar-dor-phi.vercel.app/",
    githubUrl: "https://github.com/masudbuilds/bazar-dor",
  },
  {
    slug: "fitlog",
    title: "FitLog",
    tagline: "Gym Workout Tracker",
    description:
      "A focused gym workout logging application featuring a clean dark-mode interface designed for quick and intuitive exercise tracking.",
    category: "Productivity",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://fit-log-by-masud.vercel.app/",
    githubUrl: "https://github.com/MasudRanaOfficial/fit-log",
  },
] as const;
