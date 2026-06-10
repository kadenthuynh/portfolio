import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Scales of justice reduced to line work — finial, pivoted beam, hanging
 * pans, braced stand, and stepped base. The beam tips with page scroll:
 * left side high at the top, level at the middle, mirrored at the bottom.
 */
export function Scales() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const tilt = useTransform(scrollYProgress, [0, 0.5, 1], reduce ? [0, 0, 0] : [9, 0, -9]);
  // pans hang 112 units out from the pivot, so they ride the beam ends
  const leftY = useTransform(tilt, (t) => -112 * Math.sin((t * Math.PI) / 180));
  const rightY = useTransform(tilt, (t) => 112 * Math.sin((t * Math.PI) / 180));

  const draw = (delay) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] },
        };

  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      role="img"
      aria-label="Abstract scales of justice line drawing"
    >
      {/* finial, beam, chains, pans */}
      <g>
        <motion.circle cx="160" cy="22" r="4" stroke="var(--text3)" strokeWidth="1.5" {...draw(0.15)} />
        <motion.line x1="160" y1="26" x2="160" y2="40" stroke="var(--text3)" strokeWidth="1.5" {...draw(0.2)} />
        <motion.g style={{ rotate: tilt, transformBox: "fill-box", transformOrigin: "center" }}>
          <motion.line x1="40" y1="44" x2="280" y2="44" stroke="var(--accent)" strokeWidth="1.5" {...draw(0.3)} />
        </motion.g>
        <motion.circle cx="160" cy="44" r="5" stroke="var(--text3)" strokeWidth="1.5" {...draw(0.38)} />
        <motion.g style={{ y: leftY }}>
          <motion.circle cx="48" cy="48" r="3" stroke="var(--text3)" strokeWidth="1.5" {...draw(0.44)} />
          <motion.line x1="48" y1="51" x2="24" y2="102" stroke="var(--text3)" strokeWidth="1.5" {...draw(0.52)} />
          <motion.line x1="48" y1="51" x2="48" y2="104" stroke="var(--text3)" strokeWidth="1.5" {...draw(0.57)} />
          <motion.line x1="48" y1="51" x2="72" y2="102" stroke="var(--text3)" strokeWidth="1.5" {...draw(0.62)} />
          <motion.line x1="16" y1="104" x2="80" y2="104" stroke="var(--text3)" strokeWidth="1.5" {...draw(0.82)} />
          <motion.path d="M 16 104 Q 48 132 80 104" stroke="var(--text3)" strokeWidth="1.5" {...draw(0.86)} />
        </motion.g>
        <motion.g style={{ y: rightY }}>
          <motion.circle cx="272" cy="48" r="3" stroke="var(--text3)" strokeWidth="1.5" {...draw(0.46)} />
          <motion.line x1="272" y1="51" x2="248" y2="102" stroke="var(--text3)" strokeWidth="1.5" {...draw(0.66)} />
          <motion.line x1="272" y1="51" x2="272" y2="104" stroke="var(--text3)" strokeWidth="1.5" {...draw(0.71)} />
          <motion.line x1="272" y1="51" x2="296" y2="102" stroke="var(--text3)" strokeWidth="1.5" {...draw(0.76)} />
          <motion.line x1="240" y1="104" x2="304" y2="104" stroke="var(--text3)" strokeWidth="1.5" {...draw(0.9)} />
          <motion.path d="M 240 104 Q 272 132 304 104" stroke="var(--text3)" strokeWidth="1.5" {...draw(0.94)} />
        </motion.g>
      </g>

      {/* stand with braces */}
      <motion.line x1="160" y1="49" x2="160" y2="156" stroke="var(--text3)" strokeWidth="1.5" {...draw(0.42)} />
      <motion.line x1="160" y1="58" x2="146" y2="72" stroke="var(--text3)" strokeWidth="1.5" {...draw(0.48)} />
      <motion.line x1="160" y1="58" x2="174" y2="72" stroke="var(--text3)" strokeWidth="1.5" {...draw(0.5)} />

      {/* base steps */}
      <g>
        <motion.line x1="136" y1="160" x2="184" y2="160" stroke="var(--text3)" strokeWidth="1.5" {...draw(1.0)} />
        <motion.line x1="122" y1="173" x2="198" y2="173" stroke="var(--text3)" strokeWidth="1.5" {...draw(1.08)} />
        <motion.line x1="106" y1="186" x2="214" y2="186" stroke="var(--accent)" strokeWidth="1.5" {...draw(1.16)} />
      </g>
    </svg>
  );
}
