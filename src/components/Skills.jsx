import { skills, interests } from "../data/content";
import BlockHead from "./BlockHead";

export default function Skills() {
  return (
    <section className="block" id="skills">
      <BlockHead num="06" title="Skills & Recognition" />
      <div className="skills-top">
        <div>
          <div className="sg-label">Languages</div>
          {skills.languages.map((l) => (
            <div className="lang" key={l.lang}>
              <span className="n">{l.lang}</span>
              <span className="lv">{l.level}</span>
            </div>
          ))}
        </div>
        <div>
          <div className="sg-label">Awards</div>
          <div className="stack">
            {skills.awards.map((a) => (
              <span key={a}>{a}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="skills-tools">
        <div className="sg-label">Tools</div>
        <div className="tool-groups-row">
          {skills.tools.map((group, gi) => (
            <div className="tool-group" key={gi}>
              <span className="tool-bracket-label">{group.label}</span>
              <div className="tool-bracket">
                {group.items.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="interests">
        <div className="sg-label">Interests</div>
        <div className="interests-wrap">
          {interests.map((item) => (
            <span className="tag" key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
