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
    image: "/images/projects/lal-khobor.png",
    overview:
      "Lal Khobor was created to deliver an accessible, fast-loading digital reading experience for Bengali news readers. The project focuses on clean typographic hierarchy, real-time news dissemination, and user personalization through bookmarks and profiles.",
    features: [
      "Bengali news publication and content categorization",
      "Real-time live news marquee for breaking updates",
      "Secure user authentication powered by Better Auth",
      "Article bookmarking for saving content to read later",
      "Personalized user profile management",
    ],
    technicalFocus: [
      "Full-stack authentication and session management using Better Auth with MongoDB persistence",
      "Designing responsive typography and line-heights tailored for Bengali script legibility",
      "Structuring content schemas and API routes for dynamic article retrieval",
    ],
    futureImprovements: [
      "Category-specific push notifications for breaking headlines",
      "Offline reading support with service workers and client-side caching",
      "Advanced article search with date and topic filtration",
    ],
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
    image: "/images/projects/bazar-dor.png",
    overview:
      "BazarDor addresses the everyday challenge of tracking commodity and grocery price fluctuations in local markets. The application provides an organized view of current commodity rates, allowing users to look up prices quickly across common household categories.",
    features: [
      "Everyday commodity and grocery price monitoring",
      "Structured categorization across common household food staples",
      "Fast item lookup with responsive client-side search",
      "Dynamic data delivery through Next.js API Routes",
    ],
    technicalFocus: [
      "Building clean, modular API routes in Next.js to handle commodity datasets",
      "Ensuring TypeScript type safety across pricing models and category filters",
      "Designing a high-readability mobile-first interface for fast grocery reference",
    ],
    futureImprovements: [
      "Historical price trend visualization charts for tracking inflation over time",
      "Price threshold alerts for essential staple commodities",
      "Crowdsourced price verification and localized market comparisons",
    ],
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
    image: "/images/projects/fitlog.png",
    overview:
      "FitLog is a dedicated fitness tracker developed for gym-goers who want a distraction-free tool to log exercises, sets, and workout routines. It prioritizes quick input and readability in dim gym environments through its default dark interface.",
    features: [
      "Gym workout session and exercise logging",
      "Routine organization and set tracking",
      "High-contrast dark-mode interface tailored for gym environments",
      "Mobile-friendly touch targets for easy input between sets",
    ],
    technicalFocus: [
      "Responsive state management for active workout session tracking",
      "Crafting an accessible, high-contrast dark theme using Tailwind CSS tokens",
      "Modular component architecture for exercise lists and set counters",
    ],
    futureImprovements: [
      "Workout history analytics and visual strength progression graphs",
      "Built-in rest interval timers with countdown audio chimes",
      "Pre-configured routine templates for standard training splits",
    ],
  },
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllProjects(): readonly Project[] {
  return PROJECTS;
}

export function getOtherProjects(currentSlug: string): readonly Project[] {
  return PROJECTS.filter((p) => p.slug !== currentSlug);
}
