import { portfolioData } from "../Data";
import useScrollReveal from "./useScrollReveal";
import "../styles/About.css";


import aboutPhoto from "../assets/images/profile.jpg"


export default function About() {
  useScrollReveal();

  return (
    <section id="about" className="section about">
      <div className="about__inner">
        {/* Header */}
        <div className="reveal">
          <p className="section-label">Who I Am</p>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider" />
        </div>

        <div className="about__grid">
          {/* ── Photo ── */}
          <div className="reveal reveal-delay-1">
            <div className="about__photo">
              {aboutPhoto ? (
                <img src={aboutPhoto} alt="About me" />
              ) : (
                <div className="about__photo-placeholder">
                  <i className="fa-regular fa-image" />
                  {/* To add your photo:
                      1. Put your image in src/assets/images/
                      2. Import it at the top of this file
                      3. Replace `null` with the import */}
                  <span>Add about.jpg<br />to assets/images/</span>
                </div>
              )}
            </div>
          </div>

          {/* ── Text + Stats ── */}
          <div className="about__body reveal reveal-delay-2">
            <p>{portfolioData.about}</p>
            <p>{portfolioData.aboutExtra}</p>

            {/* Stats */}
            <div className="about__stats">
              {portfolioData.stats.map((stat) => (
                <div className="about__stat" key={stat.label}>
                  <div className="about__stat-number">{stat.number}</div>
                  <div className="about__stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}