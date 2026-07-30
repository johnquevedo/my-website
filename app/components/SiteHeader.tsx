import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-shell header-inner">
        <Link className="wordmark" href="/" aria-label="John Quevedo, home">
          JQ
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/work">Work</Link>
          <Link href="/resume">Resume</Link>
          <a href="mailto:john.quevedo@yale.edu">Contact</a>
        </nav>
      </div>
    </header>
  );
}
