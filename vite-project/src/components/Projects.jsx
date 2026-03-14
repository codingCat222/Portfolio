import { portfolioData } from "../Data";
import useScrollReveal from "./useScrollReveal";
import "../styles/Projects.css";

export default function Projects() {
  useScrollReveal();

  return (
    <section id="projects" className="section projects">
      <div className="projects__inner">
        {/* Header */}
        <div className="reveal">
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">My Projects</h2>
          <div className="section-divider" />
        </div>

        {/* Grid */}
        <div className="projects__grid reveal reveal-delay-1">
          {portfolioData.projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {/* Colored accent bar */}
      <div
        className="project-card__accent"
        style={{ background: project.accentColor }}
      />

      {/* Screenshot with zoom-on-hover effect */}
      <div className="project-card__screenshot">
        {project.screenshot ? (
          <>
            <img src={project.screenshot} alt={`${project.title} screenshot`} />
            <div className="project-card__screenshot-overlay">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-card__overlay-btn project-card__overlay-btn--outline"
              >
                <i className="fa-brands fa-github" /> Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="project-card__overlay-btn project-card__overlay-btn--dark"
              >
                <i className="fa-solid fa-arrow-up-right-from-square" /> Live
              </a>
            </div>
          </>
        ) : (
          <div className="project-card__screenshot-placeholder">
            <i className="fa-regular fa-image" />
            {/* To add a screenshot:
                1. Put your image in src/assets/images/
                2. Import it in src/data.js
                3. Set screenshot: yourImport in the project entry */}
            <span>Add screenshot</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        {/* Tech badges */}
        <div className="project-card__tech">
          {project.tech.map((t) => (
            <span key={t} className="project-card__tech-badge">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="project-card__links">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-card__link"
          >
            <i className="fa-brands fa-github" /> GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="project-card__link"
          >
            <i className="fa-solid fa-arrow-up-right-from-square" /> Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}