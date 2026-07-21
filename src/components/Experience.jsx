import { experience } from "../data/content";
import BlockHead from "./BlockHead";

export default function Experience() {
  return (
    <section className="block" id="experience">
      <BlockHead num="03" title="Experience" />
      <div>
        {experience.map((e, i) => (
          <div className="row" key={i}>
            <div className="row-top">
              <div>
                <div className="row-role">{e.role}</div>
                <div className="row-org">
                  {e.company}
                  {e.location && <span className="loc"> · {e.location}</span>}
                </div>
              </div>
              <div className="row-period">{e.period}</div>
            </div>
            {e.bullets && (
              <ul className="bullets">
                {e.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
