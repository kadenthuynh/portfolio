import { education } from "../data/content";

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <p className="sec-label">Education</p>
        <div className="edu-list">
          {education.map((e, i) => (
            <div className="edu-item" key={i}>
              <div>
                <div className="edu-school">{e.school}</div>
                {e.location && <div className="edu-location">{e.location}</div>}
                <div className="edu-degree">{e.degree}</div>
                {e.gpa && (
                  <div className="edu-gpa">
                    GPA <strong>{e.gpa}</strong>
                  </div>
                )}
              </div>
              <div className="edu-period">{e.period}</div>
              {e.honors && e.honors.length > 0 && (
                <div className="edu-honors">
                  {e.honors.map((h) => (
                    <span className="chip chip-accent" key={h}>{h}</span>
                  ))}
                </div>
              )}
              {e.coursework && e.coursework.length > 0 && (
                <div className="coursework">
                  {e.coursework.map((c) => (
                    <span className="chip" key={c}>{c}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
