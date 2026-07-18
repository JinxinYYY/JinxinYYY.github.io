import { ArrowRight, Github, Mail, MapPin } from "lucide-react";

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
            I am a senior undergraduate student in Electronic and Electrical Engineering at the SWJTU–Leeds Joint
            School, advised by Prof. Xiangyi Chen. Previously, I was a research intern at UC Santa Cruz, where I
            worked with Dr. Mohammad Moltafet and Prof. Hamid Sadjadpour. I am currently a research intern at UC
            Irvine, working with Prof. Yanning Shen.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#publications">
              View Publications <ArrowRight size={17} />
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
            <a className="social-link" href="mailto:el23jy2@leeds.ac.uk" aria-label="Email Jinxin Yang"><Mail size={17} /></a>
          </div>
        </aside>
      </div>
    </section>
  );
}
