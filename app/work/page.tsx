import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected software engineering and machine learning projects by John Quevedo.",
};

const projects = [
  {
    id: "ci-failure-replay",
    number: "01",
    title: "CI Failure Capture and Replay",
    description:
      "Reproduces CI failures by preserving both code and runtime state. Built with idempotent jobs, lease-based queues, checkpointed workers, and isolated replay containers.",
    result: "Completed 172 of 172 controlled replays.",
    technologies: [
      "Go",
      "Python",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
    ],
    href: "https://github.com/johnquevedo/ci-failure-replay",
  },
  {
    id: "payment-repair",
    number: "02",
    title: "Online Payment Repair",
    description:
      "Traces corrupted payments to responsible code or configuration versions, then generates auditable repair plans with concurrency protection.",
    result:
      "Repaired 100,000 records at 865 records per second with no ledger imbalances.",
    technologies: ["Java", "Kafka", "PostgreSQL", "Spark", "Kubernetes"],
    href: "https://github.com/johnquevedo/online-payment-repair",
  },
  {
    id: "inference-tuning",
    number: "03",
    title: "CPU and GPU Inference Tuning",
    description:
      "Selects hardware-specific inference configurations by testing quantization, pruning, compilation, batching, and runtime choices under quality and latency limits.",
    result: "Reduced median latency by 79.6% with no measured quality loss.",
    technologies: [
      "Python",
      "PyTorch",
      "CUDA",
      "TensorRT",
      "ONNX Runtime",
      "Ray",
    ],
    href: "https://github.com/johnquevedo/cpu-gpu-inference-tuning",
  },
  {
    id: "training-data-auditor",
    number: "04",
    title: "Training Data Auditor",
    description:
      "Combines six label, similarity, and model-based signals into explainable review queues and auditable dataset patches.",
    result:
      "Profiled 127,600 rows in 9.8 seconds and achieved 91.3% adjudicated precision.",
    technologies: ["Python", "PyTorch", "Hugging Face", "Spark", "FAISS"],
    href: "https://github.com/johnquevedo/training-data-auditor",
  },
];

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell inner-page">
        <header className="page-intro">
          <p className="eyebrow">Work</p>
          <h1>Selected projects.</h1>
        </header>

        <section className="project-list" aria-label="Selected projects">
          {projects.map((project) => (
            <article className="project-card" id={project.id} key={project.id}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <h2>{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <p className="project-result">{project.result}</p>
                <ul className="tech-list" aria-label="Technologies">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
              <a
                className="project-link"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} on GitHub`}
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </section>

        <section className="experience section-rule">
          <div>
            <p className="section-label">Experience</p>
          </div>
          <div className="experience-list">
            <article>
              <div className="experience-heading">
                <div>
                  <h2>Algorithms Research Intern</h2>
                  <p>Yale University</p>
                </div>
                <p>June 2026 to present</p>
              </div>
              <p>
                Designed and implemented a novel parallel graph algorithm in
                C++ that updates clique counts after batches of edge insertions
                and deletions, avoiding a full recount after each batch.
                Optimized clique-counting routines through parallel work
                partitioning, achieving up to a 50.8x speedup on 64 cores over
                single-threaded execution.
              </p>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
