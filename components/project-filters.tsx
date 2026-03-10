"use client";

import { useMemo, useState } from "react";

import type { Project, ProjectTag } from "@/lib/types";
import { ProjectCard } from "./project-card";
import { TagChip } from "./tag-chip";

const filters: (ProjectTag | "All")[] = ["All", "SWE", "ML", "Systems", "Research"];

export function ProjectFilters({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(() => {
    if (active === "All") {
      return projects;
    }
    return projects.filter((project) => project.tags.includes(active));
  }, [active, projects]);

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <TagChip
            key={filter}
            active={active === filter}
            label={filter}
            onClick={() => setActive(filter)}
          />
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
