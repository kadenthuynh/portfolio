import { motion } from "framer-motion";
import { meta, stats } from "../data/content";
import { fadeUp, stagger } from "../motion";
import { Spotlight } from "./ui/spotlight";
import { TextReveal } from "./ui/text-reveal";

export default function Intro() {
  return (
    <section id="intro" className="intro" style={{ position: "relative", overflow: "hidden" }}>
      <Spotlight />
      <div className="intro-inner" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          className="intro-text"
          variants={stagger}
          initial="hidden"
          animate="show"
          custom={{ delayChildren: 0.1 }}
        >
          <h1><TextReveal text={meta.tagline} /></h1>
          {meta.intro.map((para, i) => (
            <motion.p key={i} variants={fadeUp}>{para}</motion.p>
          ))}
          {stats.length > 0 && (
            <motion.div className="intro-stats" variants={stagger}>
              {stats.map((s) => (
                <motion.div className="istat" key={s.label} variants={fadeUp}>
                  <div className="v">{s.value}</div>
                  <div className="l">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
        <motion.div
          className="intro-photo-placeholder"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span>Photo</span>
        </motion.div>
      </div>
    </section>
  );
}
