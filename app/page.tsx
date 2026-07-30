import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

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
              <Link className="text-link" href="/work">
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

        <section className="home-work page-shell">
          <div className="home-work-heading">
            <h2>Selected projects</h2>
          </div>
          <div className="project-preview-list">
            <Link href="/work#ci-failure-replay" className="project-preview">
              <span>01</span>
              <div>
                <h3>CI Failure Capture and Replay</h3>
              </div>
              <span className="preview-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
            <Link href="/work#payment-repair" className="project-preview">
              <span>02</span>
              <div>
                <h3>Online Payment Repair</h3>
              </div>
              <span className="preview-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
            <Link href="/work#inference-tuning" className="project-preview">
              <span>03</span>
              <div>
                <h3>CPU and GPU Inference Tuning</h3>
              </div>
              <span className="preview-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
            <Link href="/work#training-data-auditor" className="project-preview">
              <span>04</span>
              <div>
                <h3>Training Data Auditor</h3>
              </div>
              <span className="preview-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
