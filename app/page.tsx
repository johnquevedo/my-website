import Link from "next/link";
import Image from "next/image";

import { CTAButtons } from "@/components/cta-buttons";
import { ProjectCard } from "@/components/project-card";
import { getFeaturedProjects } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

const experiences = [
  {
    org: "Yale University — New Haven, CT",
    role: "Undergraduate Researcher, Transformer Reasoning — Feb 2026 – Present",
    bullets: [
      "Ran controlled training experiments to analyze emergence of in-context learning and chain-of-thought reasoning.",
      "Built evaluation pipelines to test effects of data distribution and curriculum schedules on reasoning.",
      "Implemented looped transformer variants and measured changes in iterative reasoning behavior."
    ]
  },
  {
    org: "Yale University — New Haven, CT",
    role: "Undergraduate Researcher, Parallel Graph Algorithms — Oct 2024 – Present",
    bullets: [
      "Built parallel batch-dynamic k-clique counting for large sparse graphs on multicore systems.",
      "Optimized parallel hash tables and set intersections to reduce update latency and improve scaling.",
      "Cut memory by replacing quadratic intermediates with arboricity-aware sparse representations."
    ]
  }
];

const skills = [
  "TypeScript",
  "Python",
  "Next.js",
  "React",
  "Tailwind",
  "PostgreSQL",
  "Prisma",
  "PyTorch",
  "GPyTorch",
  "Docker"
];

export default async function HomePage() {
  const projects = await getFeaturedProjects();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="animate-fade-in grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        <div>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            CS + Math student at Yale interested in machine learning and algorithms.
          </p>
          <div className="mt-8">
            <CTAButtons />
          </div>
        </div>
        <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-2xl border border-border bg-card shadow-soft sm:max-w-[320px] lg:max-w-[300px]">
          <div className="relative h-[320px] w-full sm:h-[360px] lg:h-[340px]">
            <Image
              alt="John Quevedo hiking on a mountain trail."
              className="object-cover object-[center_26%]"
              fill
              priority
              sizes="(min-width: 1024px) 300px, (min-width: 640px) 320px, 280px"
              src="/profile/hiking.jpg"
            />
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Featured Projects</h2>
          <Link className="text-sm font-medium text-accent hover:underline" href="/projects">
            View all
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <div className="mt-6 space-y-6">
          {experiences.map((experience) => (
            <article key={experience.role} className="rounded-xl border border-border bg-card p-6">
              <p className="text-sm font-semibold text-fg">{experience.org}</p>
              <p className="mt-1 text-sm text-muted">{experience.role}</p>
              <ul className="mt-4 space-y-2 text-sm text-fg">
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>- {bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight">Skills & Tech</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
