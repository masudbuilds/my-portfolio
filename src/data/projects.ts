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
    slug: "booknook",
    title: "BookNook",
    tagline: "Full-Stack Library Management System",
    description:
      "A modern, community-driven full-stack library management platform featuring atomic book borrowing and return workflows, real-time inventory management, dual-layer Better Auth and JWT security, and member catalog contributions.",
    category: "Web Applications",
    badge: "Full-Stack",
    type: "Library Management System",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Better Auth",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "React Hot Toast",
    ],
    frontendTech: [
      "Next.js (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui (@base-ui/react)",
      "Better Auth",
      "React Hot Toast",
      "Lucide React",
    ],
    backendTech: [
      "Node.js",
      "Express.js 5 (ES Modules)",
      "MongoDB Native Driver",
      "JWT Authentication",
      "CORS",
      "dotenv",
    ],
    liveUrl: "https://booknook-client-roan.vercel.app/",
    backendLiveUrl: "https://booknook-server-rho.vercel.app/",
    githubUrl: "https://github.com/masudbuilds/booknook-client",
    githubClientUrl: "https://github.com/masudbuilds/booknook-client",
    githubServerUrl: "https://github.com/masudbuilds/booknook-server",
    image: "/images/projects/booknook.png",
    overview:
      "BookNook is a community-driven full-stack library management system designed to make discovering, borrowing, and contributing books seamless and reliable. Built with a decoupled architecture featuring a Next.js App Router frontend and an Express.js REST API with MongoDB persistence, it solves real-world library challenges including race condition-safe inventory management, loan scheduling, duplicate borrow prevention, and strict contributor-based catalog permissions.",
    features: [
      "Secure user authentication supporting email/password and optional Google OAuth integration",
      "Curated book catalog with real-time category filtering (Fiction, Science, History, Kids) and text search",
      "Dynamic New Arrivals section showcasing the latest additions directly from the database",
      "Complete book management (CRUD) allowing members to contribute titles with instant cover previews",
      "Atomic borrow and return workflows with automated due-date scheduling",
      "Real-time inventory management with instant stock decrements and safe copy restoration upon return",
      "Personal borrowing dashboard to track active loans, due dates, and return statuses",
      "Protected routes and API endpoints secured via custom JWT Bearer token authorization",
      "Duplicate borrowing prevention ensuring a user cannot hold multiple active loans of the same title",
      "Ownership-based authorization restricting book edits and deletions to original contributors",
      "Safe deletion validation preventing removal of books with currently active borrowings",
      "Responsive editorial bookstore user interface with skeleton loaders, empty states, and toast notifications",
    ],
    technicalFocus: [
      "Architecting a decoupled full-stack system with Next.js App Router on the client and Express.js 5 with ES Modules on the server",
      "Implementing a dual-layer security bridge connecting Better Auth session cookies with signed Bearer JWTs for backend authorization",
      "Handling atomic inventory updates in MongoDB to guarantee stock integrity during concurrent borrow and return operations",
      "Building robust client route guards, ownership verification middleware, and role-safe API endpoints",
    ],
    architectureSecurity: [
      "Decoupled Client-Server Architecture: Next.js App Router serves the high-performance client while an Express.js REST API handles domain logic and MongoDB persistence across separate deployments.",
      "Better Auth & JWT Bridge: The client authenticates via Better Auth with persistent MongoDB session storage, then exchanges session status for a signed JWT token via /api/auth/jwt to authorize backend requests.",
      "Express JWT Verification: Custom backend middleware verifies Bearer tokens on protected routes (POST /books, PATCH /books/:id, DELETE /books/:id, POST /borrows, DELETE /borrows/:id), establishing borrower identity strictly from token claims.",
      "Atomic Inventory Constraints: Borrow operations atomically decrement availableCopies only when availableCopies > 0. If borrow record insertion fails, the inventory decrement is automatically rolled back.",
      "Duplicate Borrow Safeguard: The system checks active loan records prior to checkout, rejecting duplicate borrowing requests for the same book by the same member.",
      "Ownership-Based Authorization: Book edits and deletions verify the authenticated contributor's email against the book record, and deletion is blocked if active loans exist.",
    ],
    challenges: [
      "Concurrency & Race Conditions: Preventing inventory underflows when multiple members attempt to borrow the last available copy simultaneously, resolved using conditional atomic MongoDB update queries.",
      "Dual-Layer Authentication Synchronization: Bridging client-side Better Auth session state with a stateless REST API, ensuring expired or revoked credentials cleanly invalidate downstream API calls.",
      "Stock Recalculation on Edit: Allowing contributors to update total stock counts while mathematically guaranteeing that totalCopies cannot be set lower than currently active borrowed loans.",
      "State Resilience & UX Feedback: Implementing optimistic UI feedback with reliable error rollback, skeleton loaders, and contextual toast alerts to maintain a seamless user experience.",
    ],
    futureImprovements: [
      "Automated email notifications and reminder alerts for approaching book return due dates",
      "Overdue loan tracking with fine calculation and member account status flags",
      "Community book reviews, star ratings, and reading recommendation engine",
      "ISBN barcode scanner integration using device camera for rapid book cataloging",
    ],
  },
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
