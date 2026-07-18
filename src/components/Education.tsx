import { GraduationCap, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section className="section section--tinted" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading eyebrow="06 / Education" title="A foundation across theory and systems." />
        <article className="education-card">
          <div className="education-icon"><GraduationCap size={28} /></div>
          <div>
            <div className="education-heading">
              <div>
                <p>SWJTU–Leeds Joint School, Southwest Jiaotong University</p>
                <h3>BEng in Electronic and Electrical Engineering</h3>
              </div>
              <div className="education-meta">
                <time>September 2023–Present</time>
                <span><MapPin size={14} /> Chengdu, China</span>
              </div>
            </div>
            <div className="education-details">
              <strong>GPA 3.91 / 4.00</strong>
              <span>Interdisciplinary training in electronics, communications, embedded systems, mathematics, and programming</span>
              <span>Research emphasis on wireless communications, networking, optimization, and machine learning</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
