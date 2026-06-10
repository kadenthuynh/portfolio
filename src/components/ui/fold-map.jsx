import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const PANELS = [
  {
    city: "Santa Barbara",
    detail: "University of California, Santa Barbara · 2024–2027",
    dot: { x: 143.3, y: 166.6 },
    outline:
      "M 87.4 16 L 138.5 16.2 L 138.5 75.7 L 178 111 L 223.3 155.1 L 223.3 157.6 L 228 166.1 L 231.2 168.9 L 226.7 172.8 L 224.8 176.3 L 225 183.9 L 221.8 186.7 L 222.9 194.1 L 225 194.2 L 225.9 197.9 L 225 199.7 L 183.9 204 L 182 201.4 L 180.7 192.4 L 173.5 184.1 L 167.2 179.6 L 166 180.8 L 163.6 180.1 L 163.9 178.1 L 161.2 174.1 L 157.4 175 L 150.9 172 L 149.9 169.6 L 145.5 166.7 L 131.1 166.1 L 128.3 163.4 L 128.9 157.9 L 127.9 157 L 128.5 153.1 L 124.4 150.2 L 124.2 146.2 L 122.7 145.9 L 118.2 141.7 L 111.4 131.4 L 108.6 129 L 107.9 122.6 L 109.2 123.1 L 110.3 119.3 L 108 115.8 L 105.3 116.3 L 100.3 110.6 L 100.6 108.2 L 98.8 105.1 L 98.8 99.8 L 101.7 99.8 L 100.5 92.5 L 99.2 93.3 L 98.9 96.9 L 95.8 97.7 L 92.1 94.9 L 91.5 90.3 L 89.1 86.6 L 85.9 84.3 L 79.5 76.6 L 80.3 75 L 78.1 68.4 L 79 64.7 L 77.7 59.2 L 73.6 53.7 L 69.6 50.7 L 68.8 47.1 L 72.8 38.4 L 73.6 35.5 L 72.8 33.2 L 74.3 27.2 L 73 21.8 L 71.3 20.5 L 72 16.1 Z",
  },
  {
    city: "Barcelona",
    detail: "Universitat Autònoma de Barcelona · Summer 2026",
    dot: { x: 236.6, y: 74 },
    outline:
      "M 54.2 16 L 42.3 21.6 L 44.1 26.4 L 32.8 26.3 L 26.6 30.4 L 24.4 36.9 L 30.4 41 L 29 47.2 L 33.8 44.2 L 30.9 46.1 L 34.2 50.9 L 32.2 53.2 L 34 53.6 L 31.7 56.4 L 32.2 62.7 L 44.8 55.5 L 46.9 58.2 L 44.5 61.5 L 45.5 63.7 L 50.2 61 L 59.2 63.8 L 64.4 59.5 L 70.5 59.4 L 75.4 60.7 L 76 67.3 L 81.9 69.1 L 79.6 74 L 68.3 82.7 L 70.7 87.1 L 71 98.7 L 66.4 103.1 L 69.4 107.3 L 66.7 115.5 L 57 115.5 L 61.5 120.5 L 62.6 126.7 L 67.8 131.1 L 62.2 138.1 L 60.8 145.2 L 65.4 151.5 L 68.1 150.4 L 67 155.1 L 62.3 156.1 L 57.5 166.3 L 59.7 176 L 66.6 175.7 L 76.7 181.8 L 77.8 188.6 L 84.4 199.5 L 92.7 204 L 101.3 194.2 L 110.4 192.1 L 115.2 186.8 L 145.6 187.7 L 152.9 183.9 L 157.5 186.4 L 165.6 171.5 L 172 166.6 L 181.8 165.9 L 183.9 164.5 L 182.6 159 L 187.2 148.2 L 200.9 138.2 L 193.4 130.8 L 190.7 119.6 L 207.2 93.2 L 212.7 90.6 L 209.7 88.1 L 215.9 82.1 L 236.1 76.5 L 238.4 72.6 L 252.9 64.7 L 256.4 60.4 L 254.1 54.3 L 258.2 51.4 L 251 47.7 L 243.5 51.2 L 238.2 48.7 L 233.8 50.9 L 228.4 47.1 L 223.4 48.7 L 221.6 41.9 L 209.5 38.6 L 208.9 42.6 L 195.4 42.5 L 190.7 38.9 L 186 40.4 L 182.5 35.9 L 173 32.3 L 169.8 34 L 170.9 29 L 164.5 28 L 163.4 25.4 L 154.1 27.6 L 145.5 24 L 138.5 26.4 L 130.5 22.6 L 111.5 25.3 L 88 19 L 83.4 21.5 L 63.7 21.4 Z M 255.5 108.2 L 238.8 117.8 L 243.1 120.8 L 246.4 118.7 L 248.6 123.2 L 253.3 125.3 L 260.5 116 L 260.6 113.4 L 254.6 112.8 Z M 271.9 105.1 L 267.1 106.1 L 267.1 109.4 L 275.3 112.2 L 275.6 107.5 Z",
  },
  {
    city: "Tokyo",
    detail: "International Christian University · Fall 2026",
    dot: { x: 171, y: 143.3 },
    outline:
      "M 183.9 67.3 L 182.1 72.7 L 186.6 71.3 L 186.4 75.5 L 183.4 74.2 L 182 76.6 L 181 71.9 L 177.9 71 L 176.7 77 L 172.8 79.4 L 174.6 83.1 L 173.5 86.8 L 171.3 87.5 L 174.7 90.5 L 174.1 96.2 L 167.9 112.1 L 162.5 115.6 L 159.9 121.1 L 146.5 129.1 L 144.3 128 L 147.7 119.3 L 141.4 121.3 L 141.1 129 L 134.9 135.7 L 133.3 139.4 L 134.6 142.9 L 131.8 144.7 L 126.8 145.1 L 126.3 141.8 L 107.6 146 L 104.3 144.1 L 99.8 146.1 L 99.8 148.1 L 87.1 159.3 L 81.6 160.3 L 82.3 166.1 L 90.2 164.5 L 94 167.9 L 97.3 160.5 L 98.6 164.5 L 99.6 162.3 L 104 163.6 L 108.2 159.2 L 108.3 161 L 110.5 161.1 L 109 159.3 L 110.2 158.7 L 110.7 160.5 L 117.5 158.6 L 114.1 158.1 L 118.6 155.4 L 127.2 156.4 L 126.8 159.4 L 123.7 161.4 L 125.4 162.8 L 124.2 166.2 L 131.9 172.5 L 137.2 163.1 L 143.3 161.4 L 143.3 157.8 L 139.5 155.9 L 141.3 152 L 144.1 156.6 L 143.8 154.6 L 147.1 154.8 L 144.2 157.5 L 156.7 157.3 L 157.8 153.6 L 161.6 150.4 L 163.2 151.5 L 161.6 156.1 L 162.9 157.3 L 165.9 153.6 L 166.4 148.8 L 169.9 148.3 L 171.3 150.4 L 171.6 146.2 L 174.8 143.9 L 171.8 148 L 173.1 149.1 L 171.9 152.5 L 173.9 153.3 L 178.6 149.5 L 179.6 144.7 L 183.4 143.2 L 180.4 135.4 L 184.6 126.2 L 184.3 111.3 L 187.1 108.2 L 190.7 109.9 L 189.5 104.8 L 191.7 102.3 L 191.2 100.4 L 194.2 99.1 L 195.7 93.4 L 193.1 84.2 L 189 78.2 L 189.4 68.9 L 187.5 69.9 Z M 194.4 16 L 190.3 18.8 L 192.1 25.9 L 190.5 36.9 L 187.7 38.5 L 188.5 44.6 L 186.7 46.4 L 178.1 44.1 L 177.4 45.6 L 179.2 48.6 L 172.8 52.9 L 171.7 56.7 L 174.8 63.1 L 173.4 66.9 L 174.6 69.3 L 178.3 69 L 181.9 65 L 183.8 65.9 L 187.1 64.6 L 186.9 62.8 L 179.3 58.4 L 178.1 57.1 L 179.5 55 L 184.3 58.2 L 191.9 54.3 L 206.3 63.3 L 207.8 62.9 L 209.3 56 L 213.6 52.1 L 217.6 49.8 L 226.1 49.3 L 233.7 44.1 L 229.8 43.9 L 228.6 42.5 L 229.8 41.2 L 226.9 39.3 L 229.9 32.8 L 229.1 30.5 L 222.3 35.8 L 219.2 35.3 L 208.9 30 Z M 83.3 165.3 L 77.2 165.8 L 77.6 168.1 L 74.2 171 L 71.6 169.8 L 69.5 172.7 L 68.7 171.1 L 66.3 174.6 L 67 175.8 L 68.6 174 L 68 176 L 69.6 176.7 L 68.4 179.4 L 70.9 181 L 71.1 183.9 L 74.5 180.7 L 74.9 183.3 L 77 181.9 L 76.4 179.3 L 74.8 179.4 L 74.7 176.6 L 76.7 176.3 L 79.2 181.2 L 76.9 183.7 L 73.1 183.9 L 72.7 188.8 L 74.7 190 L 76.4 196.1 L 74.1 198 L 75.1 200.7 L 79.8 201.6 L 78.8 198.1 L 79.9 196.8 L 81 199.4 L 79.6 204 L 84.4 200.7 L 84.1 198.1 L 86.9 199.2 L 90.5 183.7 L 94.4 178.7 L 91.9 175.8 L 93 174.1 L 88.7 174.3 L 91 171.8 L 90.6 169.6 L 84.5 169.4 Z M 115 159.4 L 109.1 161.5 L 109.9 163.9 L 108.7 165.2 L 105 165.7 L 103 163 L 99.8 166.2 L 99.8 168.9 L 93.4 173.6 L 97.2 172.3 L 98.3 178 L 100.4 179.1 L 98.9 181.8 L 103.7 181.7 L 103.9 177.7 L 106.4 173.1 L 110.9 171 L 115.5 174.9 L 117.7 169.7 L 121.4 167.1 L 120.3 161.7 Z",
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
