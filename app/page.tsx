import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const projects = [
  {
    id: "ci-failure-replay",
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
    title: "Training Data Auditor",
    description:
      "Combines six label, similarity, and model-based signals into explainable review queues and auditable dataset patches.",
    result:
      "Profiled 127,600 rows in 9.8 seconds and achieved 91.3% adjudicated precision.",
    technologies: ["Python", "PyTorch", "Hugging Face", "Spark", "FAISS"],
    href: "https://github.com/johnquevedo/training-data-auditor",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero page-shell">
          <div className="hero-copy">
            <p className="eyebrow">John Quevedo</p>
            <h1>Software Engineer</h1>
            <p className="hero-intro">
              I study Computer Science and Mathematics at Yale University,
              focusing on backend engineering, distributed systems, and
              machine learning.
            </p>
            <div className="hero-links" aria-label="Primary links">
              <Link className="text-link" href="#work">
                View my work <span aria-hidden="true">↗</span>
              </Link>
              <a
                className="text-link"
                href="/resume/John_Quevedo_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <figure className="portrait-wrap">
            <div className="portrait-frame">
              <Image
                src="/profile/hiking-web.jpg"
                alt="John Quevedo hiking on a mountain trail"
                width={1200}
                height={1600}
                priority
              />
            </div>
          </figure>
        </section>

        <section className="home-current page-shell section-rule">
          <div>
            <p className="section-label">Currently</p>
          </div>
          <div className="current-grid">
            <article>
              <p className="current-place">Yale University</p>
              <h2>Algorithms Research Intern</h2>
              <p>
                Designed and implemented a novel parallel graph algorithm in
                C++ that updates clique counts after batches of edge insertions
                and deletions, avoiding a full recount after each batch.
              </p>
            </article>
          </div>
        </section>

        <section className="home-work page-shell" id="work">
          <div className="home-work-heading">
            <h2>Selected projects</h2>
          </div>
          <div className="project-list" aria-label="Selected projects">
            {projects.map((project) => (
              <article className="project-card" id={project.id} key={project.id}>
                <div className="project-main">
                  <h3>{project.title}</h3>
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
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
