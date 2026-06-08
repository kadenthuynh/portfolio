import { projects } from "../data/content";
import BlockHead from "./BlockHead";


export default function Projects() {
  return (
    <section className="block" id="projects">
      <BlockHead num="05" title="Projects" />
      <div className="proj-grid">
        {projects.map((p, i) => (
          <div className="proj" key={i}>
            <div className="proj-top">
              <div className="proj-name">{p.name}</div>
            </div>
            <p className="proj-desc">{p.description}</p>
            <div className="tags">
              {p.tech.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
