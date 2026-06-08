import { meta } from "../data/content";

const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/>
  </svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.95-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const IconGithub = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-meta">
          <span>{meta.location}</span>
          <span className="hero-dot" />
          <span>Political Science &amp; Philosophy</span>
          <span className="hero-dot" />
          <span>UCSB '27</span>
        </div>
        <h1>{meta.name}</h1>
        <p className="hero-subtitle">Pre-law · Trilingual · Leadership</p>
        <p className="hero-bio">{meta.bio}</p>
        <div className="hero-links">
          <a className="hero-link" href={`mailto:${meta.email}`}>
            <IconMail /> {meta.email}
          </a>
          <a className="hero-link" href={`tel:${meta.phone}`}>
            <IconPhone /> {meta.phone}
          </a>
          <a className="hero-link" href={meta.linkedin} target="_blank" rel="noopener noreferrer">
            <IconLinkedIn /> LinkedIn
          </a>
          <a className="hero-link" href={meta.github} target="_blank" rel="noopener noreferrer">
            <IconGithub /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
