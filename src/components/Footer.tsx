import { Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© 2026 Jinxin Yang. Built with React and deployed on GitHub Pages.</p>
        <div className="footer-links">
          <a href="https://github.com/Rosword" target="_blank" rel="noreferrer" aria-label="Jinxin Yang on GitHub"><Github size={17} /></a>
          <a href="mailto:el23jy2@leeds.ac.uk" aria-label="Email Jinxin Yang"><Mail size={17} /></a>
        </div>
      </div>
    </footer>
  );
}
