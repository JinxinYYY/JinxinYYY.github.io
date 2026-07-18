import { ArrowRight, BrainCircuit, CloudCog } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

function AoiDiagram() {
  return (
    <div className="aoi-diagram" aria-label="Information flow from sampler through forward channel to sink, then through feedback channel to sampler">
      <div><span>S</span><small>Sampler</small></div>
      <p>forward <ArrowRight size={16} /></p>
      <div><span>K</span><small>Sink</small></div>
      <p>feedback <ArrowRight size={16} /></p>
      <div><span>S</span><small>Sampler</small></div>
    </div>
  );
}

export function FeaturedResearch() {
  return (
    <section className="section section--dark" id="publications" aria-labelledby="featured-title">
      <div className="container">
        <SectionHeading
          eyebrow="03 / Featured research"
          title="Questions I'm working to answer."
          intro="From the freshness of a single update to the architecture of distributed intelligence."
        />
        <div className="featured-grid">
          <article className="featured-card featured-card--primary">
            <span className="featured-number">01</span>
            <div>
              <p className="featured-label">Age of Information</p>
              <h3>Timely Status Updating over Two-Way Delay Channels</h3>
              <p>
                Sampling and transmission policies for systems with random forward and feedback delays, with the goal
                of minimizing long-term Age of Information.
              </p>
            </div>
            <AoiDiagram />
          </article>
          <article className="featured-card">
            <CloudCog size={26} aria-hidden="true" />
            <div>
              <p className="featured-label">Network control</p>
              <h3>Intelligent Edge Computing</h3>
              <p>
                Markov decision processes, deep reinforcement learning, and Lyapunov optimization for computation
                offloading and resource allocation.
              </p>
            </div>
          </article>
          <article className="featured-card">
            <BrainCircuit size={26} aria-hidden="true" />
            <div>
              <p className="featured-label">Active direction</p>
              <h3>Graph Learning for Communication Systems</h3>
              <p>
                An active research direction connecting graph neural networks, semantic communications, and networked
                sensing. Ongoing work is focused on models and system design.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
