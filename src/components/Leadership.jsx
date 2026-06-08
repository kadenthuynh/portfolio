import { leadership } from "../data/content";

export default function Leadership() {
  return (
    <section id="leadership">
      <div className="container">
        <p className="sec-label">Leadership &amp; Activities</p>
        <div className="timeline">
          {leadership.map((l, i) => (
            <div className="timeline-item" key={i}>
              <div>
                <div className="timeline-role">{l.role}</div>
                <div className="timeline-org">{l.org}</div>
                <div className="timeline-location">{l.location}</div>
              </div>
              <div className="timeline-period">{l.period}</div>
              <ul className="timeline-bullets">
                {l.bullets.map((b, j) => (
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
