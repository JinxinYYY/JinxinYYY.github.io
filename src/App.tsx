import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ResearchExperience } from "./components/ResearchExperience";
import { Publications } from "./components/Publications";
import { Footer } from "./components/Footer";

function pageContent(pathname: string) {
  const path = pathname.replace(/\/+$/, "") || "/";

  if (path === "/experience") {
    return <ResearchExperience />;
  }

  if (path === "/publications") {
    return <Publications />;
  }

  return <Hero />;
}

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        {pageContent(window.location.pathname)}
      </main>
      <Footer />
    </div>
  );
}
