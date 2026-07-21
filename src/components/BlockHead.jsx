import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function BlockHead({ num, title }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <div className="b-head" ref={ref}>
      <motion.span
        className="b-num"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.28, ease: [0.34, 1.56, 0.64, 1] }}
      >
        {num}
      </motion.span>
      <motion.span
        className="b-title"
        initial={{ opacity: 0, x: -10 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.32, delay: 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {title}
      </motion.span>
    </div>
  );
}
