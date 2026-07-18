import { BookOpen, FileCheck2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Publications() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="04 / Publications & patents"
          title="Research outputs."
          intro="Peer-reviewed work and intellectual property in timely communications and edge computing."
        />
        <div className="output-list">
          <article className="output-card">
            <div className="output-type"><BookOpen size={19} /> Publication · 2026</div>
            <h3>Status Updating in Two-Way Delay Systems with Preemption</h3>
            <p className="authors"><strong>J. Yang</strong>, M. Moltafet, and H. R. Sadjadpour</p>
            <p className="venue"><em>IEEE Communications Letters</em>, 2026</p>
            <div className="tag-row">
              <span>IEEE</span><span>Age of Information</span><span>Markov Decision Process</span>
            </div>
          </article>
          <article className="output-card">
            <div className="output-type"><FileCheck2 size={19} /> Patent application</div>
            <h3>Energy-Efficient Service Deployment and Delivery Method and System for Edge Computing Networks</h3>
            <p className="authors">
              X. Chen, H. Liu, C. Cheng, Z. Meng, <strong>J. Yang</strong>, Y. Fan, H. Xing, and L. Feng
            </p>
            <p className="venue">Chinese Invention Patent Application · No. CN 202510971145.4</p>
            <p className="patent-status">Notice of Allowance issued May 2026</p>
          </article>
        </div>
      </div>
    </section>
  );
}
