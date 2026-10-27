import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getOtherProjects, PROJECTS } from "@/data/projects";
import { ProjectDetails } from "@/components/projects/project-details";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Masud Rana",
    };
  }

  return {
    title: `${project.title} | Masud Rana`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const otherProjects = getOtherProjects(slug);

  return <ProjectDetails project={project} otherProjects={otherProjects} />;
}
