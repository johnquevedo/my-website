import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

const baseButtonClass =
  "rounded-md border border-border bg-card px-4 py-2.5 text-sm font-semibold text-fg transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:translate-y-px";

export function CTAButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        className={baseButtonClass}
        href={siteConfig.links.resume}
        rel="noreferrer"
        target="_blank"
      >
        Resume PDF
      </Link>
      <Link
        className={baseButtonClass}
        href={siteConfig.links.github}
        rel="noreferrer"
        target="_blank"
      >
        GitHub
      </Link>
      <Link
        className={baseButtonClass}
        href={siteConfig.links.linkedin}
        rel="noreferrer"
        target="_blank"
      >
        LinkedIn
      </Link>
      <Link className={baseButtonClass} href={siteConfig.links.email}>
        Email
      </Link>
    </div>
  );
}
