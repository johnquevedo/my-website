import Link from "next/link";
import Image from "next/image";

import type { Project } from "@/lib/types";
import { HighlightList } from "./highlight-list";
import { TagChip } from "./tag-chip";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const linkClass =
    "font-sans text-sm font-semibold tracking-normal text-fg visited:text-fg active:text-fg no-underline decoration-1 underline-offset-4 hover:underline hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";
  const titleLinkClass =
    "text-fg visited:text-fg active:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

  return (
    <article className="group rounded-xl border border-border bg-card p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-accent">
      <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-lg border border-border/80 bg-bg">
        <Image
          alt={project.visual.alt}
          className="object-cover object-center transition duration-300 group-hover:scale-[1.01]"
          fill
          priority={project.featured}
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
          src={project.visual.src}
          style={
            project.visual.objectPosition ? { objectPosition: project.visual.objectPosition } : undefined
          }
        />
      </div>
      <div className="mb-3 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <TagChip key={tag} label={tag} />
        ))}
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-fg">
        <Link className={titleLinkClass} href={`/projects/${project.slug}`}>
          {project.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm text-muted">{project.summary}</p>

      <div className="mt-4">
        <HighlightList items={project.recruiterHighlights.slice(1)} />
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted">
        {project.stack.map((tech) => (
          <span key={tech}>#{tech}</span>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-3 text-sm">
        <Link className={linkClass} href={`/projects/${project.slug}`}>
          Case study
        </Link>
        {project.links.repo && (
          <Link
            className={linkClass}
            href={project.links.repo}
            rel="noreferrer"
            target="_blank"
          >
            Repo
          </Link>
        )}
        {project.links.demo && (
          <Link
            className={linkClass}
            href={project.links.demo}
            rel="noreferrer"
            target="_blank"
          >
            Demo
          </Link>
        )}
        {project.links.writeup && (
          <Link
            className={linkClass}
            href={project.links.writeup}
            rel="noreferrer"
            target="_blank"
          >
            Write-up
          </Link>
        )}
      </div>
    </article>
  );
}
