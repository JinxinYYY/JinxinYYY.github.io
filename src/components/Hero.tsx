import { Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid container">
        <div className="hero-copy">
          <h1>
            Jinxin Yang
          </h1>
          <p className="hero-lead">
            I am a final-year undergraduate student in Electronic and Electrical Engineering at the SWJTU–Leeds Joint
            School, where I am advised by{" "}
            <a href="https://scholar.google.com/citations?user=iv1w1DkAAAAJ&hl=zh-CN" target="_blank" rel="noreferrer">
              Prof. Xiangyi Chen
            </a>
            . Previously, I was a research intern at the University of California, Santa Cruz, working with{" "}
            <a href="https://mohammad-moltafet.github.io/my-website/" target="_blank" rel="noreferrer">
              Dr. Mohammad Moltafet
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
          <div className="hero-actions">
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
