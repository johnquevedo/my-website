import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-shell header-inner">
        <nav aria-label="Primary navigation">
          <Link href="/" aria-label="Home">
            Home
          </Link>
          <Link href="/#work">Work</Link>
          <Link href="/resume">Resume</Link>
          <a href="mailto:john.quevedo@yale.edu">Contact</a>
        </nav>
      </div>
    </header>
  );
}
