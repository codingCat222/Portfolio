import { useState } from "react";
import { portfolioData } from "../data";
import useScrollReveal from "./useScrollReveal";
import "../styles/Contact.css";

export default function Contact() {
  useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="contact__inner">
        {/* Header */}
        <div className="reveal">
          <p className="section-label">Let's Talk</p>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider" />
        </div>

        <div className="contact__grid">
          {/* ── Left info ── */}
          <div className="reveal reveal-delay-1">
            <p className="contact__info-desc">
              Have a project in mind, a question, or just want to say hi? My inbox
              is always open — I'll get back to you as soon as possible.
            </p>

            <div className="contact__info-list">
              <a href={`mailto:${portfolioData.email}`} className="contact__info-item">
                <div className="contact__info-icon">
                  <i className="fa-regular fa-envelope" />
                </div>
                <div>
                  <div className="contact__info-label">Email</div>
                  <div className="contact__info-value">{portfolioData.email}</div>
                </div>
              </a>

              <a
                href={portfolioData.github}
                target="_blank"
                rel="noreferrer"
                className="contact__info-item"
              >
                <div className="contact__info-icon">
                  <i className="fa-brands fa-github" />
                </div>
                <div>
                  <div className="contact__info-label">GitHub</div>
                  <div className="contact__info-value">github.com/codingCat222</div>
                </div>
              </a>

              <a
                href={portfolioData.twitter}
                target="_blank"
                rel="noreferrer"
                className="contact__info-item"
              >
                <div className="contact__info-icon">
                  <i className="fa-brands fa-x-twitter" />
                </div>
                <div>
                  <div className="contact__info-label">Twitter / X</div>
                  <div className="contact__info-value">@jaytech@09</div>
                </div>
              </a>

              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact__info-item"
              >
                <div className="contact__info-icon">
                  <i className="fa-brands fa-linkedin-in" />
                </div>
                <div>
                  <div className="contact__info-label">LinkedIn</div>
                  <div className="contact__info-value">linkedin.com/in/jaysam#20</div>
                </div>
              </a>
            </div>
          </div>

          {/* ── Form ── */}
          <div className="reveal reveal-delay-2">
            <div className="contact__form-wrap">
              {submitted ? (
                <div className="contact__success">
                  <i className="fa-solid fa-circle-check contact__success-icon" />
                  <h4>Message Sent!</h4>
                  <p>Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form className="contact__form" onSubmit={handleSubmit}>
                  <div className="contact__form-row">
                    <div className="contact__field">
                      <label className="contact__label" htmlFor="name">
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="contact__input"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="contact__field">
                      <label className="contact__label" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="contact__input"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="contact__field">
                    <label className="contact__label" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="contact__textarea"
                      placeholder="Tell me about your project..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="contact__submit">
                    <i className="fa-solid fa-paper-plane" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}