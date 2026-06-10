import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Abstract architectural figure — an institutional colonnade reduced to
 * line work. Layers drift apart slightly on scroll for quiet depth.
 */
export function Structure() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yTop = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -22]);
  const yBase = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 14]);

  const draw = (delay) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] },
        };

  const columns = Array.from({ length: 7 }, (_, i) => 64 + i * 32);

  return (
    <svg
      ref={ref}
      viewBox="0 0 320 400"
      fill="none"
      role="img"
      aria-label="Abstract architectural line drawing"
    >
      {/* entablature */}
      <motion.g style={{ y: yTop }}>
        <motion.line x1="48" y1="44" x2="272" y2="44" stroke="var(--accent)" strokeWidth="1.5" {...draw(0.2)} />
        <motion.line x1="56" y1="58" x2="264" y2="58" stroke="var(--line2)" strokeWidth="1.5" {...draw(0.32)} />
      </motion.g>

      {/* colonnade */}
      {columns.map((x, i) => (
        <motion.line
          key={x}
          x1={x}
          y1="76"
          x2={x}
          y2="318"
          stroke="var(--line2)"
          strokeWidth="1.5"
          {...draw(0.42 + i * 0.06)}
        />
      ))}

      {/* stylobate steps */}
      <motion.g style={{ y: yBase }}>
        <motion.line x1="52" y1="334" x2="268" y2="334" stroke="var(--line2)" strokeWidth="1.5" {...draw(0.86)} />
        <motion.line x1="40" y1="348" x2="280" y2="348" stroke="var(--line2)" strokeWidth="1.5" {...draw(0.96)} />
        <motion.line x1="28" y1="362" x2="292" y2="362" stroke="var(--accent)" strokeWidth="1.5" {...draw(1.06)} />
      </motion.g>
    </svg>
  );
}
