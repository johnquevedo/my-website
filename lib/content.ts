import fs from "node:fs/promises";
import path from "node:path";
import { z } from "zod";

import { projectsData } from "@/content/projects";
import { deriveProjectMetrics } from "@/lib/metrics";
import type { Project, ResumeData } from "./types";

const resumeSchema = z.object({
  name: z.string(),
  contact: z.string(),
  education: z.array(z.string()),
  technicalSkills: z.array(z.string()),
  workExperience: z.array(
    z.object({
      organization: z.string(),
      role: z.string(),
      bullets: z.array(z.string())
    })
  ),
  projects: z.array(
    z.object({
      title: z.string(),
      bullets: z.array(z.string())
    })
  ),
  leadership: z.array(
    z.object({
      organization: z.string(),
      role: z.string(),
      bullets: z.array(z.string())
    })
  ),
  additionalSkillsAndInterests: z.array(z.string())
});

const projectsWithDerived: Project[] = projectsData
  .map((project) => ({
    ...project,
    derivedMetrics: deriveProjectMetrics(project.metricsRaw)
  }))
  .sort((a, b) => +new Date(b.date) - +new Date(a.date));

export async function getProjects(): Promise<Project[]> {
  return projectsWithDerived;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return projectsWithDerived.filter((project) => project.featured).slice(0, 3);
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  const project = projectsWithDerived.find((item) => item.slug === slug);
  if (!project) {
    throw new Error(`Project not found for slug: ${slug}`);
  }

  return project;
}

export async function getResumeData(): Promise<ResumeData> {
  const filePath = path.join(process.cwd(), "content/resume/resume.json");
  const source = await fs.readFile(filePath, "utf8");
  const parsed = JSON.parse(source);
  return resumeSchema.parse(parsed) as ResumeData;
}
