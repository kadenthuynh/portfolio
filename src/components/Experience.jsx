import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <p className="sec-label">Experience</p>
        <div className="timeline">
          {experience.map((e, i) => (
            <div className="timeline-item" key={i}>
              <div>
                <div className="timeline-role">{e.role}</div>
                <div className="timeline-org">{e.company}</div>
                <div className="timeline-location">{e.location}</div>
              </div>
              <div className="timeline-period">{e.period}</div>
              <ul className="timeline-bullets">
                {e.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
