import { education, experiences } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

function institutionLogo(institution: string) {
  if (institution.includes("Leeds")) {
    return { src: "/logos/leeds.png", alt: "University of Leeds logo", variant: "leeds" };
  }
  if (institution.includes("Irvine")) {
    return { src: "/logos/uci.png", alt: "UC Irvine logo", variant: "uci" };
  }
  if (institution.includes("Santa Cruz")) {
    return { src: "/logos/ucsc.jpg", alt: "University of California seal", variant: "ucsc" };
  }
  return { src: "/logos/swjtu.png", alt: "Southwest Jiaotong University logo", variant: "swjtu" };
}

export function ResearchExperience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading
          title="Research Experience"
        />
        <div className="experience-list">
          {experiences.map((item) => {
            const logo = institutionLogo(item.institution);
            return (
              <article className="experience-card" key={`${item.institution}-${item.role}`}>
                <img
                  className={`experience-logo experience-logo--${logo.variant}`}
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                />
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
            );
          })}
        </div>
        <div className="education-block">
          <SectionHeading
            title="Education Experience"
          />
          <div className="experience-list">
            {education.map((item) => {
              const logo = institutionLogo(item.institution);
              return (
                <article className="experience-card education-card" key={item.institution}>
                  <img
                    className={`experience-logo education-logo experience-logo--${logo.variant}`}
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                  />
                  <h3>{item.institution}</h3>
                  <p className="experience-meta">
                    <time>{item.period}</time>
                    <span aria-hidden="true">·</span>
                    <span>Undergraduate</span>
                  </p>
                  <div className="experience-facts education-facts">
                    <p>{item.degree}</p>
                    {item.gpa && <p><strong>GPA:</strong> {item.gpa}</p>}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
