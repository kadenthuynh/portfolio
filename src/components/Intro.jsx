import { meta, stats } from "../data/content";

export default function Intro() {
  return (
    <section id="intro" className="intro">
      <div className="intro-inner">
        <div className="intro-text">
          <h1>{meta.tagline}</h1>
          {meta.intro.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <div className="intro-stats">
            {stats.map((s) => (
              <div className="istat" key={s.label}>
                <div className="v">{s.value}</div>
                <div className="l">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="intro-photo-placeholder">
          <span>Photo</span>
        </div>
      </div>
    </section>
  );
}
