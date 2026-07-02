import { skills } from "../data/content";
import BlockHead from "./BlockHead";

export default function Skills() {
  return (
    <section className="block" id="skills">
      <BlockHead num="06" title="Skills & Languages" />

      {/* Languages: full-width, one column per language */}
      <div className="mb-8">
        <div className="sg-label">Languages</div>
        <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6">
          {skills.languages.map((l) => (
            <div key={l.lang} className="lang-item">
              <span className="lang-name">{l.lang}</span>
              <span className="lang-level">{l.level}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools: full-width, one even column per group */}
      <div>
        <div className="sg-label">Tools</div>
        <div className="grid grid-cols-2 tablet:grid-cols-4 gap-6 items-stretch">
          {skills.tools.map((group) => (
            <div key={group.label} className="tool-bracket">
              <span className="tool-bracket-label">{group.label}</span>
              {group.items.map((t) => (
                <span key={t} className="tool-item">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
