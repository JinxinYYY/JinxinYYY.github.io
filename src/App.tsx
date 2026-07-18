import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ResearchInterests } from "./components/ResearchInterests";
import { ResearchExperience } from "./components/ResearchExperience";
import { FeaturedResearch } from "./components/FeaturedResearch";
import { Publications } from "./components/Publications";
import { Education } from "./components/Education";
import { Awards } from "./components/Awards";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <ResearchInterests />
        <ResearchExperience />
        <FeaturedResearch />
        <Publications />
        <Education />
        <Awards />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
