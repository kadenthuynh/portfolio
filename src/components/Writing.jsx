import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText } from "lucide-react";
import { writing } from "../data/content";
import { essayContent } from "../data/essays";
import BlockHead from "./BlockHead";
import { Button, LinkButton } from "./ui/button";

function essayKey(link) {
  return link.replace(/^\//, "").replace(/\.pdf$/, "");
}

function EssayBody({ link }) {
  const paras = essayContent[essayKey(link)] || [];
  const wcIndex = paras.indexOf("Works Cited");
  const premiseRe = /(?=\([A-Z]{1,4}\d?\))/;

  return paras.map((para, i) => {
    if (para === "Works Cited") {
      return <p key={i} className="essay-wc-header">{para}</p>;
    }
    if (wcIndex !== -1 && i > wcIndex) {
      const wcMatch = para.match(/^(.+?\.\s)(.+?)(\s\(\d{4}\).*)$/);
      return (
        <p key={i} className="essay-wc-entry">
          {wcMatch ? (
            <>{wcMatch[1]}<em>{wcMatch[2]}</em>{wcMatch[3]}</>
          ) : (
            para
          )}
        </p>
      );
    }
    if (premiseRe.test(para)) {
      const parts = para.split(premiseRe).filter(Boolean);
      if (parts.length > 1) {
        return (
          <div key={i} className="essay-arg-block">
            {parts.map((part, j) => (
              <p
                key={j}
                className={/^\([A-Z]{1,4}\d?\)/.test(part) ? "essay-premise" : undefined}
              >
                {part.trim()}
              </p>
            ))}
          </div>
        );
      }
    }
    return <p key={i}>{para}</p>;
  });
}

function WritingCard({ w, index, onOpen }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="w-card"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => onOpen(w)}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.38, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="w-card-front">
        <motion.div
          className="w-title"
          animate={{ color: hovered ? "var(--accent)" : "var(--text)" }}
          transition={{ duration: 0.15 }}
        >
          {w.title}
        </motion.div>
        <div className="w-tags">
          <b>{w.course}</b> · {w.term}
        </div>
        <motion.div
          className="w-read"
          animate={{ color: hovered ? "var(--accent)" : "var(--text3)" }}
          transition={{ duration: 0.15 }}
        >
          READ&nbsp;↗
        </motion.div>
      </div>
      <motion.div
        className="w-card-desc"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.18 }}
        style={{ pointerEvents: hovered ? "auto" : "none" }}
      >
        {w.description}
      </motion.div>
    </motion.div>
  );
}

export default function Writing() {
  const [active, setActive] = useState(null);

  const open = (w) => {
    setActive(w);
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    setActive(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      <section className="block" id="writing">
        <BlockHead num="03" title="Selected Writing" />
        <div className="w-grid">
          {writing.map((w, i) => (
            <WritingCard key={i} w={w} index={i} onOpen={open} />
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            className="modal-overlay"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <motion.div
              className="modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="modal-head">
                <div>
                  <div className="modal-meta">
                    {active.course}{" "}
                    <span className="term">{active.term}</span>
                  </div>
                  <div className="modal-title" id="modal-title">
                    {active.title}
                  </div>
                </div>
                <div className="modal-actions">
                  <LinkButton
                    href={active.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText size={14} strokeWidth={1.8} />
                    Open PDF
                  </LinkButton>
                  <Button
                    variant="icon"
                    size="icon"
                    onClick={close}
                    aria-label="Close"
                  >
                    <X size={15} strokeWidth={1.8} />
                  </Button>
                </div>
              </div>
              <div className="modal-body">
                <EssayBody link={active.link} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
