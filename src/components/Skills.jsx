import { motion } from "framer-motion";
import { skills } from "../data/content";
import BlockHead from "./BlockHead";
import { Badge } from "./ui/badge";

export default function Skills() {
  return (
    <section className="block" id="skills">
      <BlockHead num="06" title="Skills & Recognition" />

      {/* Top row: Languages | Awards | Tools (double-wide, groups in a row) */}
      <div className="grid grid-cols-2 tablet:grid-cols-4 gap-8 items-start mb-8">

        <div>
          <div className="sg-label">Languages</div>
          {skills.languages.map((l) => (
            <div className="lang" key={l.lang}>
              <span className="n">{l.lang}</span>
              <span className="lv">{l.level}</span>
            </div>
          ))}
        </div>

        {/* Tools spans 2 columns; bracket groups laid out in a row */}
        <div className="col-span-2">
          <div className="sg-label">Tools</div>
          <div className="flex gap-8">
            {skills.tools.map((group) => (
              <div key={group.label} className="flex-1">
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

    </section>
  );
}
