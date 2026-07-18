import { MapPin } from "lucide-react";
import { experiences } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function ResearchExperience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="03 / Experience"
          title="Research across communications, networks, and embedded systems."
        />
        <div className="timeline">
          {experiences.map((item) => (
            <article className="timeline-item" key={`${item.institution}-${item.role}`}>
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-meta">
                <time>{item.period}</time>
                <span><MapPin size={14} /> {item.location}</span>
              </div>
              <div className="timeline-content">
                <div className="institution-row">
                  <h3>{item.institution}</h3>
                  {item.ongoing && <span className="ongoing-badge">Ongoing</span>}
                </div>
                <p className="role">{item.role}</p>
                {item.project && <h4>{item.project}</h4>}
                <p className="supervisor">Supervisor: {item.supervisor}</p>
                <ul>
                  {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                {item.tags && (
                  <div className="tag-row">
                    {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
