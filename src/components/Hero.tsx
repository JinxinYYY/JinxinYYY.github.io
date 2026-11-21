import { GraduationCap, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid container">
        <div className="hero-copy">
          <h1>
            About Me
          </h1>
          <p className="hero-lead">
            Hi! I’m Jinxin Yang. Welcome to my homepage. I am a final-year undergraduate student in Electronic and
            Electrical Engineering at the SWJTU–Leeds Joint School, where I am advised by{" "}
            <a href="https://scholar.google.com/citations?user=iv1w1DkAAAAJ&hl=zh-CN" target="_blank" rel="noreferrer">
              Prof. Xiangyi Chen
            </a>
            . Previously, I was a research intern at the University of California, Santa Cruz, working with{" "}
            <a href="https://mohammad-moltafet.github.io/my-website/" target="_blank" rel="noreferrer">
              Prof. Mohammad Moltafet
            </a>{" "}
            and{" "}
            <a href="https://users.soe.ucsc.edu/~hamid/index.html" target="_blank" rel="noreferrer">
              Prof. Hamid Sadjadpour
            </a>
            . I am currently a research intern at the University of California, Irvine, working with{" "}
            <a href="https://sites.google.com/uci.edu/yanning-shen/home" target="_blank" rel="noreferrer">
              Prof. Yanning Shen
            </a>
            .
          </p>
          <p className="hero-lead">
            My research interests include wireless networks, stochastic optimization, and machine learning for
            networked systems.
          </p>
          <div className="hero-actions">
            <a
              className="profile-link"
              href="https://scholar.google.com/citations?user=qhyUFogAAAAJ&hl=zh-CN"
              target="_blank"
              rel="noreferrer"
              aria-label="Jinxin Yang on Google Scholar"
              title="Google Scholar"
            >
              <GraduationCap size={22} />
            </a>
            <a
              className="profile-link"
              href="https://www.linkedin.com/in/jinxin-yang-1728aa373/"
              target="_blank"
              rel="noreferrer"
              aria-label="Jinxin Yang on LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={21} />
            </a>
            <a
              className="profile-link"
              href="mailto:el23jy2@leeds.ac.uk"
              aria-label="Email Jinxin Yang"
              title="Email"
            >
              <Mail size={21} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
