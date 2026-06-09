import { motion } from "framer-motion";
import { experience } from "../data/content";
import BlockHead from "./BlockHead";

export default function Experience() {
  return (
    <section className="block" id="experience">
      <BlockHead num="01" title="Experience" />
      <div>
        {experience.map((e, i) => (
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
