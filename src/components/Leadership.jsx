import { motion } from "framer-motion";
import { leadership } from "../data/content";
import BlockHead from "./BlockHead";

export default function Leadership() {
  return (
    <section className="block" id="leadership">
      <BlockHead num="04" title="Leadership & Service" />
      <div>
        {leadership.map((l, i) => (
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
