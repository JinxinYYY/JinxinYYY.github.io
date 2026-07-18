import { experiences } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

function institutionMark(institution: string) {
  if (institution.includes("Irvine")) return "UCI";
  if (institution.includes("Santa Cruz")) return "UCSC";
  return "SWJTU";
}

export function ResearchExperience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="01 / Experience"
          title="Research Experience"
        />
        <div className="experience-list">
          {experiences.map((item) => (
            <article className="experience-card" key={`${item.institution}-${item.role}`}>
              <span className="experience-mark" aria-hidden="true">
                {institutionMark(item.institution)}
              </span>
              <h3>{item.institution}</h3>
              <p className="experience-meta">
                <time>{item.period}</time>
                <span aria-hidden="true">·</span>
                <span>{item.role}</span>
              </p>
              <div className="experience-facts">
                <p><strong>Research Area:</strong> {item.researchArea}</p>
                <p><strong>Supervisor:</strong> {item.supervisor}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
