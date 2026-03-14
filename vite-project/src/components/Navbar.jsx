import { useState, useEffect } from "react";
import { portfolioData } from "../Data";
import "../styles/Navbar.css";

const NAV_LINKS = ["home", "about", "projects", "skills", "contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Floating/shrink effect after 60px scroll
      setScrolled(window.scrollY > 60);

      // Active section tracking
      for (const id of NAV_LINKS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(id);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar__inner">
        <div className="navbar__brand">
          <span>{"<"}</span>{portfolioData.name}<span>{" />"}</span>
        </div>

        {/* Desktop links */}
        <nav>
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <button
                  className={`${link === "contact" ? "navbar__cta" : ""} ${activeSection === link ? "active" : ""}`}
                  onClick={() => scrollTo(link)}
                >
                  {link === "contact" ? "Hire Me" : link}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
        </button>
      </div>

      {/* Mobile menu */}
      <nav className={`navbar__mobile ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <button key={link} onClick={() => scrollTo(link)}>
            {link}
          </button>
        ))}
      </nav>
    </header>
  );
}