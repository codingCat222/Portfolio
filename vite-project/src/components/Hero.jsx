import { portfolioData } from "../Data";
import "../styles/Hero.css";


import profilePhoto from "../assets/images/profile.jpg";


export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__bg" />
      <div className="hero__glare" />

      <div className="hero__inner">
        {/* ── Left content ── */}
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for opportunities
          </div>

          <h1 className="hero__name">{portfolioData.name}</h1>

          <p className="hero__title">
            <i className="fa-solid fa-terminal" /> {portfolioData.title}
          </p>

          <p className="hero__tagline">{portfolioData.tagline}</p>

          <div className="hero__actions">
            <button className="btn-primary" onClick={() => scrollTo("projects")}>
              <i className="fa-solid fa-folder-open" />
              View My Work
            </button>
            <button className="btn-outline" onClick={() => scrollTo("contact")}>
              <i className="fa-regular fa-envelope" />
              Get In Touch
            </button>
          </div>

          {/* Social icons */}
          <div className="hero__socials">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noreferrer"
              className="hero__social-link"
              title="GitHub"
            >
              <i className="fa-brands fa-github" />
            </a>
            <a
              href={portfolioData.twitter}
              target="_blank"
              rel="noreferrer"
              className="hero__social-link"
              title="Twitter / X"
            >
              <i className="fa-brands fa-x-twitter" />
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hero__social-link"
              title="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              className="hero__social-link"
              title="Email"
            >
              <i className="fa-regular fa-envelope" />
            </a>
          </div>
        </div>

        {/* ── Right: profile photo ── */}
        <div className="hero__avatar-wrap">
          <div className="hero__avatar">
            {profilePhoto ? (
              <img src={profilePhoto} alt={portfolioData.name} />
            ) : (
              <div className="hero__avatar-placeholder">
                <i className="fa-regular fa-image" />
            
                <span>Add profile.jpg</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint">
        <span>scroll</span>
        <i className="fa-solid fa-chevron-down" />
      </div>
    </section>
  );
}