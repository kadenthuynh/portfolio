import { motion } from "framer-motion";
import { skills, interests } from "../data/content";
import BlockHead from "./BlockHead";
import { Badge } from "./ui/badge";

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
          <div className="flex flex-col gap-1.5">
            {skills.awards.map((a, i) => (
              <motion.div
                key={a}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Badge variant="gold">{a}</Badge>
              </motion.div>
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
                {group.items.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="interests">
        <div className="sg-label">Interests</div>
        <div className="interests-wrap">
          {interests.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.25, delay: i * 0.04, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Badge>{item}</Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
