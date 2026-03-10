import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume PDF for internship applications."
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
        <Link
          className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-contrast"
          href={siteConfig.links.resume}
          rel="noreferrer"
          target="_blank"
        >
          Download PDF
        </Link>
      </div>

      <section className="overflow-hidden rounded-xl border border-border bg-card">
        <iframe className="h-[820px] w-full" src={siteConfig.links.resume} title="Resume PDF" />
      </section>
    </div>
  );
}
