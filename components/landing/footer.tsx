import { FileText, Stethoscope } from "lucide-react";
export function Footer() {
  return (
    <footer className="footer section-wrap">
      <div className="footer-brand">
        <a href="#top" className="brand" aria-label="ClerkMate home">
          <span className="brand-mark" aria-hidden="true">
            <FileText className="brand-binder" size={18} />
            <Stethoscope className="brand-scope" size={21} />
          </span>
          <span>lerkMate</span>
        </a>
        <p>
          Clinical history-taking companion
          <br />
          for medical students.
        </p>
      </div>
      <div className="footer-links">
        <a href="#top">About</a>
        <a href="#resources">Resources</a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="#top">Privacy</a>
      </div>
      <p className="copyright">© 2025 ClerkMate</p>
    </footer>
  );
}
