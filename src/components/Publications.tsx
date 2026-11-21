import { BookOpen, FileCheck2 } from "lucide-react";

export function Publications() {
  return (
    <section className="section" id="publications">
      <div className="container">
        <div className="output-list">
          <article className="output-card">
            <div className="output-type"><BookOpen size={19} /> Publication · 2026</div>
            <a
              href="https://ieeexplore.ieee.org/document/11615272"
              target="_blank"
              rel="noreferrer"
              title="View on IEEE Xplore"
            >
              <h3>Status Updating in Two-Way Delay Systems With Preemption</h3>
            </a>
            <p className="authors"><strong>J. Yang</strong>, M. Moltafet, and H. R. Sadjadpour</p>
            <p className="venue">
              <em>IEEE Communications Letters</em>, vol. 30, pp. 2690–2694, 2026. {" "}
              <a href="https://doi.org/10.1109/LCOMM.2026.3715512" target="_blank" rel="noreferrer">
                doi: 10.1109/LCOMM.2026.3715512
              </a>
            </p>
          </article>
          <article className="output-card">
            <div className="output-type"><FileCheck2 size={19} /> Patent</div>
            <h3>Energy-Efficient Service Deployment and Delivery Method and System for Edge Computing Networks</h3>
            <p className="authors">
              X. Chen, H. Liu, C. Cheng, Z. Meng, <strong>J. Yang</strong>, Y. Fan, H. Xing, and L. Feng
            </p>
            <p className="venue">Chinese Invention Patent Application · No. CN 202510971145.4</p>
          </article>
        </div>
      </div>
    </section>
  );
}
