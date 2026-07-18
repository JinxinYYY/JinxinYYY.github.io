import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ResearchExperience } from "./components/ResearchExperience";
import { Publications } from "./components/Publications";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <ResearchExperience />
        <Publications />
      </main>
      <Footer />
    </div>
  );
}
