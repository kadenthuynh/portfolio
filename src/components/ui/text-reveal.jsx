import { motion } from "framer-motion";

export function TextReveal({ text, className }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.38,
            delay: 0.05 + i * 0.045,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
