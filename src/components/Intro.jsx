import { motion } from "framer-motion";
import { meta } from "../data/content";
import { fadeUp, stagger } from "../motion";
import BlockHead from "./BlockHead";
import { Spotlight } from "./ui/spotlight";

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
        >
          <BlockHead num="00" title={meta.tagline} />
          {meta.intro.map((para, i) => (
            <motion.p key={i} variants={fadeUp}>{para}</motion.p>
          ))}
          <motion.div className="intro-creds" variants={fadeUp}>
            <img className="cred-seal" src="/ucsb-seal.png" alt="UC Santa Barbara seal" />
            {meta.credentials.map((c) => (
              <div className="cred" key={c.value}>
                <div className="v">{c.value}</div>
                <div className="l">{c.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="intro-figure"
          variants={stagger}
          initial="hidden"
          animate="show"
          transition={{ delayChildren: 0.2 }}
        >
          <motion.img
            className="intro-portrait"
            src="/portrait.jpg"
            alt="Kaden Huynh"
            variants={fadeUp}
          />
          <motion.div className="cred" variants={fadeUp}>
            <div className="v cred-pin">
              <span className="ping" />
              {meta.location}
            </div>
            <div className="l">Hometown</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
