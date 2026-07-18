import { Award } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const awards = [
  { title: "First-Class Scholarship", organization: "SWJTU–Leeds Joint School", distinction: "Top 1%", date: "November 2024" },
  { title: "Merit Student", organization: "Academic Year 2023–2024", distinction: "Top 3%", date: "November 2024" },
  { title: "Provincial Third Prize", organization: "Lanqiao Cup Microcontroller Design Competition", distinction: "Provincial award", date: "April 2024" },
];

export function Awards() {
  return (
    <section className="section" id="awards">
      <div className="container">
        <SectionHeading eyebrow="07 / Honors" title="Recognition for academic and technical work." />
        <div className="award-grid">
          {awards.map((award) => (
            <article className="award-item" key={award.title}>
              <Award size={21} aria-hidden="true" />
              <div>
                <p className="award-distinction">{award.distinction}</p>
                <h3>{award.title}</h3>
                <p>{award.organization}</p>
                <time>{award.date}</time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
