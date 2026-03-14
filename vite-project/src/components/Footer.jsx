import { portfolioData } from "../data";
import "../styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          Designed &amp; Built by <span>{portfolioData.name}</span>
        </div>

        {/* Social icons */}
        <div className="footer__socials">
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
            title="GitHub"
          >
            <i className="fa-brands fa-github" />
          </a>
          <a
            href={portfolioData.twitter}
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
            title="Twitter / X"
          >
            <i className="fa-brands fa-x-twitter" />
          </a>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
            title="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in" />
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            className="footer__social-link"
            title="Email"
          >
            <i className="fa-regular fa-envelope" />
          </a>
        </div>

        <div className="footer__copy">© {year} — All rights reserved</div>
      </div>
    </footer>
  );
}