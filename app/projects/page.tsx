import type { Metadata } from "next";

import { ProjectFilters } from "@/components/project-filters";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Production-focused SWE and ML projects with measurable outcomes."
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        Recruiter-first view of scope, technical depth, and impact. Filter by domain.
      </p>
      <div className="mt-8">
        <ProjectFilters projects={projects} />
      </div>
    </div>
  );
}
