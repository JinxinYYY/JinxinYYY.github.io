import { researchInterests } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function ResearchInterests() {
  return (
    <section className="section section--tinted" id="research">
      <div className="container">
        <SectionHeading
          eyebrow="02 / Research interests"
          title="Networks as systems that sense, learn, and adapt."
          intro="I study the algorithms and infrastructure that make information flow more timely, reliable, and useful."
        />
        <div className="interest-grid">
          {researchInterests.map(({ title, description, icon: Icon }, index) => (
            <article className="interest-card" key={title}>
              <div className="card-index">0{index + 1}</div>
              <Icon className="card-icon" size={22} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
