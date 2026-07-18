import { skillGroups } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section className="section section--tinted" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="08 / Technical toolkit"
          title="Methods and technologies."
          intro="A research toolkit spanning mathematical modeling, network systems, machine learning, and embedded implementation."
        />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
