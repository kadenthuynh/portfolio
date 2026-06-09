import { motion } from "framer-motion";

export function Spotlight() {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      style={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(ellipse 75% 55% at 65% -5%, rgba(200,169,110,0.11) 0%, transparent 68%)",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
