import { meta } from "../data/content";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-row">
          <div className="contact-left">
            <h2>Get in touch</h2>
            <p>Open to opportunities, conversations, and collaborations.</p>
          </div>
          <div className="contact-links">
            <a className="hero-link" href={`mailto:${meta.email}`}>{meta.email}</a>
            <a className="hero-link" href={`tel:${meta.phone}`}>{meta.phone}</a>
            <a className="hero-link" href={meta.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="footer-bar">
          <span>Kaden Huynh — San Diego, CA</span>
          <span>Built with React + Vite</span>
        </div>
      </div>
    </section>
  );
}
