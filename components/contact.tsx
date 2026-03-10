"use client";

import { useState } from "react";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

const buttonClass =
  "rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-fg transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:translate-y-px";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = siteConfig.links.email.replace("mailto:", "");

  async function handleCopy() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <section className="rounded-xl border border-border bg-card p-6">
      <h2 className="text-xl font-semibold">Contact</h2>
      <p className="mt-2 text-sm text-muted">
        Open to software engineering and machine learning internships for Summer 2027.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link className={buttonClass} href={siteConfig.links.email}>
          Email me
        </Link>
        <button className={buttonClass} type="button" onClick={handleCopy}>
          {copied ? "Copied" : "Copy email"}
        </button>
      </div>
    </section>
  );
}
