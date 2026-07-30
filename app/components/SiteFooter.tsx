export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <div>
          <p className="footer-heading">Let&apos;s talk.</p>
          <a className="footer-email" href="mailto:john.quevedo@yale.edu">
            john.quevedo@yale.edu
          </a>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/johnquevedo"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/john-quevedo"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="/resume/John_Quevedo_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Résumé
          </a>
        </div>
        <p className="footer-note">Built with care in 2026.</p>
      </div>
    </footer>
  );
}
