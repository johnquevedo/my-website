import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { HighlightList } from "@/components/highlight-list";
import { getProjectBySlug, getProjects } from "@/lib/content";
import type {
  RecommendationDerivedMetrics,
  RecommendationMetricsRaw,
  VolatilityDerivedMetrics,
  VolatilityMetricsRaw
} from "@/lib/types";
import { formatDate } from "@/lib/utils";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

function formatDecimal(value: number, digits = 4) {
  return value.toFixed(digits);
}

function formatPercent(value: number) {
  return `${value.toFixed(1)}%`;
}

function formatRatio(value: number) {
  return `${value.toFixed(1)}x`;
}

function VolatilityEvaluation({
  raw,
  derived
}: {
  raw: VolatilityMetricsRaw;
  derived: VolatilityDerivedMetrics;
}) {
  return (
    <>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border text-muted">
              <th className="py-2 pr-4">Ticker</th>
              <th className="py-2 pr-4">RMSE</th>
              <th className="py-2 pr-4">Baseline RMSE</th>
              <th className="py-2 pr-4">RMSE Reduction</th>
              <th className="py-2 pr-4">MAE</th>
              <th className="py-2 pr-4">Baseline MAE</th>
              <th className="py-2 pr-4">MAE Reduction</th>
              <th className="py-2 pr-4">90% Coverage</th>
              <th className="py-2 pr-4">Avg 90% Width</th>
            </tr>
          </thead>
          <tbody>
            {derived.rows.map((row) => {
              const metrics = raw.tickers[row.ticker];
              return (
                <tr className="border-b border-border/70" key={row.ticker}>
                  <td className="py-2 pr-4 font-medium">{row.ticker}</td>
                  <td className="py-2 pr-4">{formatDecimal(metrics.rmse)}</td>
                  <td className="py-2 pr-4">
                    {formatDecimal(metrics.baselineRmsePersistence)}
                  </td>
                  <td className="py-2 pr-4">{formatPercent(row.rmseReductionPct)}</td>
                  <td className="py-2 pr-4">{formatDecimal(metrics.mae)}</td>
                  <td className="py-2 pr-4">
                    {formatDecimal(metrics.baselineMaePersistence)}
                  </td>
                  <td className="py-2 pr-4">{formatPercent(row.maeReductionPct)}</td>
                  <td className="py-2 pr-4">{formatDecimal(metrics.coverage90)}</td>
                  <td className="py-2 pr-4">{formatDecimal(metrics.avgWidth90)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-fg">
        Average reduction across SPY/QQQ/AAPL: RMSE {formatPercent(derived.averageRmseReductionPct)}
        · MAE {formatPercent(derived.averageMaeReductionPct)}.
      </p>
    </>
  );
}

function RecommendationEvaluation({
  raw,
  derived
}: {
  raw: RecommendationMetricsRaw;
  derived: RecommendationDerivedMetrics;
}) {
  return (
    <>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border text-muted">
              <th className="py-2 pr-4">Model</th>
              <th className="py-2 pr-4">Recall@10</th>
              <th className="py-2 pr-4">NDCG@10</th>
              <th className="py-2 pr-4">Coverage@10</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/70">
              <td className="py-2 pr-4 font-medium">ALS</td>
              <td className="py-2 pr-4">{formatDecimal(raw.als.recallAt10)}</td>
              <td className="py-2 pr-4">{formatDecimal(raw.als.ndcgAt10)}</td>
              <td className="py-2 pr-4">{formatDecimal(raw.als.coverageAt10)}</td>
            </tr>
            <tr>
              <td className="py-2 pr-4 font-medium">Popularity</td>
              <td className="py-2 pr-4">{formatDecimal(raw.popularity.recallAt10)}</td>
              <td className="py-2 pr-4">{formatDecimal(raw.popularity.ndcgAt10)}</td>
              <td className="py-2 pr-4">{formatDecimal(raw.popularity.coverageAt10)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-fg">
        Relative lift vs popularity baseline: Recall {formatRatio(derived.recallRatio)} ·
        NDCG {formatRatio(derived.ndcgRatio)} · Coverage {formatRatio(derived.coverageRatio)}.
      </p>
    </>
  );
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const project = await getProjectBySlug(slug);
    return {
      title: project.title,
      description: project.summary,
      openGraph: {
        title: project.title,
        description: project.summary,
        images: [`/api/og?title=${encodeURIComponent(project.title)}`]
      }
    };
  } catch {
    return { title: "Project not found" };
  }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  try {
    const project = await getProjectBySlug(slug);

    return (
      <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm text-muted">Updated {formatDate(project.date)}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">{project.title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted">{project.summary}</p>

        <div className="mt-5">
          <HighlightList items={project.recruiterHighlights.slice(1)} />
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card">
          <div className="relative aspect-[16/9] w-full">
            <Image
              alt={project.visual.alt}
              className="object-cover object-center"
              fill
              sizes="(min-width: 1024px) 960px, 100vw"
              src={project.visual.src}
              style={
                project.visual.objectPosition ? { objectPosition: project.visual.objectPosition } : undefined
              }
            />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-4 text-sm">
          {project.links.repo && (
            <Link
              className="text-accent hover:underline"
              href={project.links.repo}
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </Link>
          )}
          {project.links.demo && (
            <Link
              className="text-accent hover:underline"
              href={project.links.demo}
              rel="noreferrer"
              target="_blank"
            >
              Live demo
            </Link>
          )}
          {project.links.writeup && (
            <Link
              className="text-accent hover:underline"
              href={project.links.writeup}
              rel="noreferrer"
              target="_blank"
            >
              Write-up
            </Link>
          )}
        </div>

        <section className="mt-10 space-y-8">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Problem</h2>
            <p className="mt-3 text-sm leading-relaxed text-fg">{project.caseStudy.problem}</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Approach</h2>
            <ul className="mt-3 space-y-2 text-sm text-fg">
              {project.caseStudy.approach.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Results</h2>
            <ul className="mt-3 space-y-2 text-sm text-fg">
              {project.caseStudy.results.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Technical Evaluation</h2>

            {project.metricsRaw.kind === "volatility" &&
              project.derivedMetrics.kind === "volatility" && (
                <VolatilityEvaluation derived={project.derivedMetrics} raw={project.metricsRaw} />
              )}

            {project.metricsRaw.kind === "recommendation" &&
              project.derivedMetrics.kind === "recommendation" && (
                <RecommendationEvaluation
                  derived={project.derivedMetrics}
                  raw={project.metricsRaw}
                />
              )}

            {project.metricsRaw.kind === "generic" && (
              <div className="mt-3">
                <ul className="space-y-2 text-sm text-fg">
                  {(project.caseStudy.technicalEvaluationNotes ?? []).map((note) => (
                    <li key={note}>- {note}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Tradeoffs</h2>
            <ul className="mt-3 space-y-2 text-sm text-fg">
              {project.caseStudy.tradeoffs.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </section>
      </article>
    );
  } catch {
    notFound();
  }
}
