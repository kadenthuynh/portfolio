import { leadership } from "../data/content";
import BlockHead from "./BlockHead";

export default function Leadership() {
  return (
    <section className="block" id="leadership">
      <BlockHead num="04" title="Leadership & Service" />
      <div>
        {leadership.map((l, i) => (
          <div className="row" key={i}>
            <div className="row-top">
              <div>
                <div className="row-role">{l.role}</div>
                <div className="row-org">
                  {l.org}
                  {l.location && <span className="loc"> · {l.location}</span>}
                </div>
              </div>
              <div className="row-period">{l.period}</div>
            </div>
            {l.bullets && (
              <ul className="bullets">
                {l.bullets.map((b, j) => (
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
