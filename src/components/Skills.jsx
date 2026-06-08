import { skills, interests } from "../data/content";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="sec-label">Skills &amp; Recognition</p>
        <div className="skills-grid">
          <div>
            <div className="skill-group-label">Languages</div>
            <div className="lang-list">
              {skills.languages.map((l) => (
                <div className="lang-item" key={l.lang}>
                  <span className="lang-name">{l.lang}</span>
                  <span className="lang-level">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="skill-group-label">Tools</div>
            <div className="tools-list">
              {skills.tools.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="skill-group-label">Awards</div>
            <div className="awards-list">
              {skills.awards.map((a) => (
                <span key={a}>{a}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: 28 }}>
          <div className="skill-group-label">Interests</div>
          <div className="interests-wrap">
            {interests.map((item) => (
              <span className="interest-tag" key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
