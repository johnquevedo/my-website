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
            <h1>
              Software engineer building scalable backend systems and AI
              applications.
            </h1>
            <p className="hero-intro">
              I study Computer Science and Mathematics at Yale University, with
              a focus on backend engineering, distributed systems, and machine
              learning.
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
                Résumé <span aria-hidden="true">↗</span>
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
                Designing and implementing parallel graph algorithms for
                dynamic clique counting, with an emphasis on correctness and
                multicore performance.
              </p>
            </article>
            <article>
              <p className="current-place">
                Management Leadership for Tomorrow
              </p>
              <h2>Generative AI Software Engineer</h2>
              <p>
                Building a serverless financial document analysis platform for
                exploring SEC filings with retrieval and language models.
              </p>
            </article>
          </div>
        </section>

        <section className="home-work page-shell">
          <div className="home-work-heading">
            <p className="section-label">Selected work</p>
            <h2>Systems built to survive real failure modes.</h2>
          </div>
          <div className="project-preview-list">
            <Link href="/work#ci-failure-replay" className="project-preview">
              <span>01</span>
              <div>
                <h3>CI Failure Capture and Replay</h3>
                <p>Reliable infrastructure for reproducing failed CI runs.</p>
              </div>
              <span className="preview-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
            <Link href="/work#inference-tuning" className="project-preview">
              <span>02</span>
              <div>
                <h3>CPU and GPU Inference Tuning</h3>
                <p>
                  Hardware-aware optimization under explicit quality and
                  latency limits.
                </p>
              </div>
              <span className="preview-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
          <Link className="quiet-button" href="/work">
            See all projects
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
