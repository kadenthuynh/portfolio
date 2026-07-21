import { education } from "../data/content";
import BlockHead from "./BlockHead";
import { Badge } from "./ui/badge";
import { FoldMap } from "./ui/fold-map";

export default function Education() {
  return (
    <section className="block" id="education">
      <BlockHead num="01" title="Education" />
      <div>
        {education.map((e, i) => {
          const abroad = e.degree === "Study Abroad";
          const head = [e.degree, e.location].filter(Boolean).join(" · ");
          return (
            <div className="row" key={i}>
              <div className="row-top">
                <div>
                  <div className="row-role">
                    {e.school}
                    {abroad && (
                      <Badge variant="blue" className="ml-2">
                        Study Abroad ✈
                      </Badge>
                    )}
                  </div>
                  {!abroad && (
                    <div className="meta-line">
                      {head}
                      {e.gpa && (
                        <>
                          {head ? " · GPA " : "GPA "}
                          <span className="gpa">{e.gpa}</span>
                        </>
                      )}
                    </div>
                  )}
                  {abroad && e.location && (
                    <div className="meta-line">{e.location}</div>
                  )}
                </div>
                <div className="row-period">{e.period}</div>
              </div>
              {e.honors && e.honors.length > 0 && (
                <div className="tags">
                  <span className="tag-label">Honors</span>
                  {e.honors.map((h) => (
                    <Badge key={h} variant="gold">{h}</Badge>
                  ))}
                </div>
              )}
              {e.coursework && e.coursework.length > 0 && (
                <div className="tags">
                  <span className="tag-label">Coursework</span>
                  {e.coursework.map((c) => (
                    <Badge key={c}>{c}</Badge>
                  ))}
                </div>
              )}
              {e.activities && e.activities.length > 0 && (
                <div className="tags">
                  <span className="tag-label">Activities</span>
                  {e.activities.map((a) => (
                    <Badge key={a}>{a}</Badge>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <FoldMap />
    </section>
  );
}
