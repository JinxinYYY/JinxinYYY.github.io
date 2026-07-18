import { ArrowDownToLine, ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid container">
        <div className="hero-copy">
          <h1>
            Jinxin Yang
          </h1>
          <p className="hero-title">Undergraduate Researcher in Wireless Communications and Networked Systems</p>
          <p className="hero-lead">
            Electronic and Electrical Engineering undergraduate at the SWJTU–Leeds Joint School, working on
            intelligent and reliable networking systems for future AI infrastructure.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#research">
              View Research <ArrowRight size={17} />
            </a>
            <a className="button button--secondary" href="/Jinxin_Yang_CV.pdf" download>
              Download CV <ArrowDownToLine size={17} />
            </a>
            <a className="button button--text" href="mailto:el23jy2@leeds.ac.uk">
              Contact Me
            </a>
          </div>
        </div>
        <aside className="hero-aside" aria-label="Current academic status">
          <p className="aside-label">Current</p>
          <strong>Research Intern</strong>
          <span>University of California, Irvine</span>
          <hr />
          <strong>BEng Student</strong>
          <span>SWJTU–Leeds Joint School</span>
          <div className="hero-meta"><MapPin size={15} /> Chengdu, China</div>
          <div className="social-row" aria-label="Profile links">
            <a className="social-link" href="https://github.com/Rosword" target="_blank" rel="noreferrer" aria-label="Jinxin Yang on GitHub"><Github size={17} /></a>
            <span className="social-link social-link--disabled" aria-label="LinkedIn URL to be added" title="LinkedIn URL to be added"><Linkedin size={17} /></span>
            <span className="social-link social-link--disabled scholar-icon" aria-label="Google Scholar URL to be added" title="Google Scholar URL to be added">G</span>
            <a className="social-link" href="mailto:el23jy2@leeds.ac.uk" aria-label="Email Jinxin Yang"><Mail size={17} /></a>
          </div>
        </aside>
      </div>
    </section>
  );
}
