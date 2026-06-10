import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const PANELS = [
  {
    city: "Santa Barbara",
    detail: "UC Santa Barbara · 2024–2027",
    dot: { x: 133, y: 141 },
    outline:
      "M 115 25 L 195 25 L 195 70 L 240 140 L 245 170 L 175 175 L 165 160 L 150 152 L 135 143 L 120 128 L 112 100 L 100 70 L 108 40 Z",
  },
  {
    city: "Barcelona",
    detail: "Universitat Autònoma de Barcelona · Summer 2026",
    dot: { x: 221, y: 89 },
    outline:
      "M 75 70 L 120 62 L 165 58 L 215 60 L 228 78 L 221 89 L 218 95 L 200 120 L 182 138 L 150 155 L 118 168 L 100 162 L 96 140 L 104 118 L 100 96 L 88 84 Z",
  },
  {
    city: "Tokyo",
    detail: "International Christian University · Fall 2026",
    dot: { x: 186, y: 110 },
    outline:
      "M 90 160 L 130 135 L 162 118 L 184 108 L 205 82 L 226 52 L 235 58 L 213 92 L 192 112 L 168 124 L 134 142 L 98 168 Z " +
      "M 70 175 L 82 165 L 90 174 L 80 186 Z " +
      "M 110 155 L 130 146 L 136 154 L 116 163 Z " +
      "M 238 48 L 252 30 L 272 38 L 266 56 L 248 60 Z",
  },
];

const GAP = 16; // must match .fold-row gap
const PAD = 15; // panel border + padding
const VBW = 300; // panel svg viewBox width

/**
 * Tri-fold travel map: California, Spain, and Japan as line-work outlines
 * on three panels that unfold into view, joined by dashed flight arcs.
 */
export function FoldMap() {
  const reduce = useReducedMotion();
  const rowRef = useRef(null);
  const inView = useInView(rowRef, { once: true, amount: 0.3 });
  const [dims, setDims] = useState(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) =>
      setDims({ w: e.contentRect.width, h: e.contentRect.height })
    );
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  let arcs = [];
  if (dims) {
    const panelW = (dims.w - 2 * GAP) / 3;
    const scale = (panelW - 2 * PAD) / VBW;
    const pos = (i) => ({
      x: i * (panelW + GAP) + PAD + PANELS[i].dot.x * scale,
      y: PAD + PANELS[i].dot.y * scale,
    });
    arcs = PANELS.slice(0, -1).map((_, i) => {
      const a = pos(i);
      const b = pos(i + 1);
      return `M ${a.x} ${a.y} Q ${(a.x + b.x) / 2} ${Math.min(a.y, b.y) - 46} ${b.x} ${b.y}`;
    });
  }

  const fold = (i) => ({
    initial: reduce
      ? false
      : { rotateY: i === 0 ? 65 : i === 2 ? -65 : 0, opacity: 0 },
    whileInView: { rotateY: 0, opacity: 1 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.8, delay: i === 1 ? 0 : 0.3, ease: [0.25, 0.1, 0.25, 1] },
  });

  const draw = (delay) => ({
    initial: reduce ? false : { pathLength: 0, opacity: 0 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 1.1, delay, ease: [0.25, 0.1, 0.25, 1] },
  });

  const appear = (delay) => ({
    initial: reduce ? false : { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.5, delay },
  });

  return (
    <div className="fold-wrap" aria-label="Path from Santa Barbara to Barcelona to Tokyo">
      <div className="fold-row" ref={rowRef}>
        {PANELS.map((p, i) => (
          <motion.div
            className="fold-panel"
            key={p.city}
            {...fold(i)}
            style={{ transformOrigin: i === 0 ? "right center" : i === 2 ? "left center" : "center" }}
          >
            <svg viewBox={`0 0 ${VBW} 220`} fill="none">
              <motion.path
                d={p.outline}
                stroke="var(--text3)"
                strokeWidth="1.5"
                strokeLinejoin="round"
                {...draw(0.6 + i * 0.2)}
              />
              <motion.circle cx={p.dot.x} cy={p.dot.y} r="5" fill="var(--accent)" {...appear(1.2 + i * 0.15)} />
              <motion.circle
                cx={p.dot.x}
                cy={p.dot.y}
                r="10"
                stroke="var(--text3)"
                strokeWidth="1"
                opacity="0.5"
                {...appear(1.3 + i * 0.15)}
              />
            </svg>
            <div className="fold-city">{p.city}</div>
            <div className="fold-detail">{p.detail}</div>
          </motion.div>
        ))}
        {dims && (
          <svg className="fold-arcs" width={dims.w} height={dims.h}>
            {arcs.map((d, i) => (
              <motion.path
                key={i}
                className="route-arc"
                d={d}
                stroke="var(--accent)"
                strokeWidth="1.5"
                strokeDasharray="4 7"
                strokeLinecap="round"
                fill="none"
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.7, delay: 1.5 }}
              />
            ))}
          </svg>
        )}
      </div>
    </div>
  );
}
