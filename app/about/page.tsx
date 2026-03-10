import type { Metadata } from "next";
import Link from "next/link";

import { Contact } from "@/components/contact";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: "About John Quevedo and current engineering interests."
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>
      <p className="mt-5 text-base leading-relaxed text-fg">
        I am a computer science and mathematics student at Yale University interested
        in machine learning systems, algorithms, and how modern AI models learn and
        reason. My current work includes research on transformer reasoning and parallel
        graph algorithms, and I am especially interested in problems that connect theory
        with efficient, scalable systems.
      </p>
      <p className="mt-4 text-base leading-relaxed text-fg">
        Outside of academics, I love dancing, playing the piano, playing volleyball,
        and hiking. I also enjoy researching pure math, especially topics such as the
        geometry of complex abelian varieties and broader questions in algebra,
        geometry, and the mathematics of data.
      </p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <Link
          className="text-accent hover:underline"
          href={siteConfig.links.github}
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </Link>
        <Link
          className="text-accent hover:underline"
          href={siteConfig.links.linkedin}
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </Link>
        <Link className="text-accent hover:underline" href={siteConfig.links.phone}>
          (475) 777-8330
        </Link>
      </div>
      <div className="mt-10">
        <Contact />
      </div>
    </div>
  );
}
