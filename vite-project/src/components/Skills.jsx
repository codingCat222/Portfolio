import { useState, useEffect, useRef } from "react";
import { portfolioData } from "../Data";
import useScrollReveal from "./useScrollReveal";
import "../styles/Skills.css";

export default function Skills() {
  useScrollReveal();
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  // Trigger bar animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills" ref={sectionRef}>
      <div className="skills__inner">
        {/* Header */}
        <div className="reveal">
          <p className="section-label">What I Know</p>
          <h2 className="section-title">My Skills</h2>
          <div className="section-divider" />
        </div>

        <div className="skills__grid">
          {portfolioData.skills.map((skill, idx) => (
            <div
              key={skill.name}
              className={`skill-item reveal reveal-delay-${(idx % 4) + 1}`}
            >
              <div className="skill-item__info">
                <div className="skill-item__left">
                  <i className={`${skill.icon} skill-item__icon`} />
                  <span className="skill-item__name">{skill.name}</span>
                </div>
                <span className="skill-item__pct">{skill.level}%</span>
              </div>
              <div className="skill-item__bar-bg">
                <div
                  className="skill-item__bar-fill"
                  style={{ width: animated ? `${skill.level}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}