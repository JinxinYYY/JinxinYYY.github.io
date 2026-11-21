import { Menu, X } from "lucide-react";
import { useEffect, useState, type MouseEvent } from "react";
import { navItems } from "../data/portfolio";

type Props = {
  currentPath: string;
  onNavigate: (href: string) => void;
};

export function Navbar({ currentPath, onNavigate }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const normalizedPath = currentPath.replace(/\/+$/, "") || "/";

  const handleNavigation = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    setMenuOpen(false);
    onNavigate(href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="nav-inner">
        <a
          className="nav-brand"
          href="/"
          onClick={(event) => handleNavigation(event, "/")}
          aria-label="Jinxin Yang — Home"
        >
          Jinxin Yang
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              className={normalizedPath === (item.href.replace(/\/+$/, "") || "/") ? "active" : ""}
              href={item.href}
              onClick={(event) => handleNavigation(event, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="icon-button menu-button"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              className={normalizedPath === (item.href.replace(/\/+$/, "") || "/") ? "active" : ""}
              href={item.href}
              onClick={(event) => handleNavigation(event, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
