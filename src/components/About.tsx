import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading eyebrow="01 / About" title="Engineering timely, intelligent systems." />
        <div className="prose-large about-copy">
          <p>
            I am pursuing a BEng in Electronic and Electrical Engineering at the SWJTU–Leeds Joint School,
            Southwest Jiaotong University. My work sits at the intersection of communications, networking,
            optimization, and machine learning.
          </p>
          <p>
            My research experience spans Age-of-Information-aware status updating, Markov decision processes,
            reinforcement learning, multi-access edge computing, graph neural networks, semantic communications,
            and embedded data-acquisition systems.
          </p>
          <p>
            My long-term goal is to develop intelligent, reliable, and efficient networking systems that support
            large-scale machine learning and AI infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}
