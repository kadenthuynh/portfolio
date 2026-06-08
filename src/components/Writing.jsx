import { writing } from "../data/content";

const IconExternal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

export default function Writing() {
  return (
    <section id="writing">
      <div className="container">
        <p className="sec-label">Academic Writing</p>
        <div className="writing-list">
          {writing.map((w, i) => (
            <div className="writing-item" key={i}>
              <div className="writing-meta">
                <span className="writing-course">{w.course}</span>
                <span className="writing-term">{w.term}</span>
              </div>
              <div className="writing-title">{w.title}</div>
              <p className="writing-desc">{w.description}</p>
              {w.link && (
                <a className="writing-read-btn" href={w.link} target="_blank" rel="noopener noreferrer">
                  <IconExternal /> Read
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
