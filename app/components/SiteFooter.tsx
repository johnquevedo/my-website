export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <div>
          <p className="footer-name">John Quevedo</p>
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
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
