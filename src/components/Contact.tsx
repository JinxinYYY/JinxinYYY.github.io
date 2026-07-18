import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-grid">
        <div>
          <span className="eyebrow">09 / Contact</span>
          <h2>Let’s explore what future networks can do.</h2>
          <p>
            I am open to research collaborations, graduate-study opportunities, and technical discussions related to
            communications, networking, graph learning, and AI infrastructure.
          </p>
          <a className="button button--light" href="mailto:el23jy2@leeds.ac.uk">
            Send Me an Email <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="contact-details">
          <a href="mailto:el23jy2@leeds.ac.uk"><Mail size={19} /> <span><small>Email</small>el23jy2@leeds.ac.uk</span></a>
          <div><MapPin size={19} /> <span><small>Location</small>Chengdu, China</span></div>
          <a href="https://github.com/Rosword" target="_blank" rel="noreferrer"><Github size={19} /> <span><small>GitHub</small>github.com/Rosword</span></a>
          <span className="disabled-contact"><Linkedin size={19} /> <span><small>LinkedIn</small>Add profile URL</span></span>
          <span className="disabled-contact"><strong className="scholar-icon">G</strong> <span><small>Google Scholar</small>Add profile URL</span></span>
        </div>
      </div>
    </section>
  );
}
