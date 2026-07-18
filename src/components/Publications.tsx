import { BookOpen, FileCheck2 } from "lucide-react";

export function Publications() {
  return (
    <section className="section" id="publications">
      <div className="container">
        <div className="output-list">
          <article className="output-card">
            <div className="output-type"><BookOpen size={19} /> Publication · 2026</div>
            <h3>Status Updating in Two-Way Delay Systems with Preemption</h3>
            <p className="authors"><strong>J. Yang</strong>, M. Moltafet, and H. R. Sadjadpour</p>
            <p className="venue"><em>IEEE Communications Letters</em>, 2026</p>
          </article>
          <article className="output-card">
            <div className="output-type"><FileCheck2 size={19} /> Patent application</div>
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
