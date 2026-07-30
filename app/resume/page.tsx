import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Resume",
  description: "John Quevedo's software engineering resume.",
};

export default function ResumePage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell inner-page resume-page">
        <header className="resume-heading">
          <h1>Resume</h1>
          <div className="resume-actions">
            <a
              className="quiet-button"
              href="/resume/John_Quevedo_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Open PDF
            </a>
            <a
              className="text-link"
              href="/resume/John_Quevedo_Resume.pdf"
              download
            >
              Download
            </a>
          </div>
        </header>
        <div className="resume-frame">
          <iframe
            title="John Quevedo resume"
            src="/resume/John_Quevedo_Resume.pdf"
          />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
