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
  technologies: readonly string[];
  liveUrl: string;
  githubUrl: string;
  image?: string;
}
