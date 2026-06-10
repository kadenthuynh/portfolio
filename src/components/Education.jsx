import { motion } from "framer-motion";
import { education } from "../data/content";
import BlockHead from "./BlockHead";
import { Badge } from "./ui/badge";
import { FoldMap } from "./ui/fold-map";

export default function Education() {
  return (
    <section className="block" id="education">
      <BlockHead num="02" title="Education" />
      <div>
        {education.map((e, i) => {
          const abroad = e.degree === "Study Abroad";
          return (
            <motion.div
              className="row"
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
            >
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
                    <>
                      <div className="meta-line">
                        {e.degree}
                        {e.location && ` · ${e.location}`}
                      </div>
                      {e.gpa && (
                        <div className="edu-gpa">
                          GPA <strong>{e.gpa}</strong>
                        </div>
                      )}
                    </>
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
            </motion.div>
          );
        })}
      </div>
      <FoldMap />
    </section>
  );
}
