import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "About John Quevedo, a software engineer and Computer Science and Mathematics student at Yale University.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell inner-page">
        <header className="page-intro about-intro">
          <p className="eyebrow">About</p>
          <h1>I like understanding how complicated things behave.</h1>
        </header>

        <section className="about-grid">
          <div className="about-lead">
            <p>
              I&apos;m John, a Computer Science and Mathematics student at Yale
              University. I&apos;m drawn to engineering problems where
              correctness, performance, and real-world constraints all matter.
            </p>
          </div>
          <div className="about-body">
            <p>
              My recent work spans parallel graph algorithms, distributed
              backend systems, machine learning infrastructure, and generative
              AI applications. I enjoy moving between theory and
              implementation, especially when careful measurement can replace
              guesswork.
            </p>
            <p>
              I also care about making technical work understandable. The best
              systems are not only fast or reliable. Their behavior, tradeoffs,
              and limitations can be explained clearly.
            </p>
          </div>
        </section>

        <section className="interests section-rule">
          <div>
            <p className="section-label">Away from the screen</p>
          </div>
          <div>
            <p className="interests-copy">
              I play piano and guitar, read literature, and am learning
              photography, drawing, and painting. I&apos;m fluent in Spanish
              and especially interested in music, cities, landscapes, and the
              ways art changes how we pay attention.
            </p>
            <ul className="interest-list" aria-label="Personal interests">
              <li>Piano</li>
              <li>Guitar</li>
              <li>Literature</li>
              <li>Photography</li>
              <li>Drawing</li>
              <li>Painting</li>
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
