import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ResearchExperience } from "./components/ResearchExperience";
import { Publications } from "./components/Publications";
import { Misc } from "./components/Misc";
import { Footer } from "./components/Footer";

function pageContent(pathname: string) {
  const path = pathname.replace(/\/+$/, "") || "/";

  if (path === "/experience") {
    return <ResearchExperience />;
  }

  if (path === "/publications") {
    return <Publications />;
  }

  if (path === "/misc") {
    return <Misc />;
  }

  return <Hero />;
}

export default function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (href: string) => {
    const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
    const nextPath = href.replace(/\/+$/, "") || "/";

    if (currentPath !== nextPath) {
      window.history.pushState({}, "", href);
      setPathname(window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar currentPath={pathname} onNavigate={navigate} />
      <main id="main-content">
        <div className="page-transition" key={pathname}>
          {pageContent(pathname)}
        </div>
      </main>
      <Footer />
    </div>
  );
}
