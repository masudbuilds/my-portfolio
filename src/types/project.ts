export type ProjectCategory =
  | "Web Applications"
  | "Content & News"
  | "Productivity";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  badge?: string;
  type?: string;
  technologies: readonly string[];
  frontendTech?: readonly string[];
  backendTech?: readonly string[];
  liveUrl: string;
  backendLiveUrl?: string;
  githubUrl: string;
  githubClientUrl?: string;
  githubServerUrl?: string;
  image?: string;
  overview: string;
  features: readonly string[];
  technicalFocus: readonly string[];
  architectureSecurity?: readonly string[];
  challenges?: readonly string[];
  futureImprovements: readonly string[];
}
