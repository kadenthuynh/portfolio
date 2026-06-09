import { motion } from "framer-motion";
import { projects } from "../data/content";
import BlockHead from "./BlockHead";

export default function Projects() {
  return (
    <section className="block" id="projects">
      <BlockHead num="05" title="Projects" />
      <div className="proj-grid">
        {projects.map((p, i) => (
          <motion.div
            className="proj"
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.09, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="proj-top">
              <div className="proj-name">{p.name}</div>
            </div>
            <p className="proj-desc">{p.description}</p>
            <div className="tags">
              {p.tech.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
