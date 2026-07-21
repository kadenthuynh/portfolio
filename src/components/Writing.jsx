import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText } from "lucide-react";
import { writing } from "../data/content";
import useModalFocus from "../hooks/useModalFocus";
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

function MiniCard({ w, index, onOpen }) {
  return (
    <motion.article
      className="feat-card"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(w)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(w);
        }
      }}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.38, delay: index * 0.04, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="feat-card-top">
        <span className="feat-card-kicker">{w.term}</span>
        <span className="feat-card-cue">Read →</span>
      </div>
      <h4 className="feat-card-title">{w.title}</h4>
      <p className="feat-card-tag">{w.course}</p>
    </motion.article>
  );
}

export default function Writing() {
  const [active, setActive] = useState(null);
  const modalRef = useModalFocus(!!active);

  const open = (w) => {
    setActive(w);
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    setActive(null);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const featured = writing.find((w) => w.featured);
  const rest = writing.filter((w) => !w.featured);

  return (
    <>
      <section className="block" id="writing">
        <BlockHead num="02" title="Written Works" />
        <div className="feat">
          {featured && (
            <motion.article
              className="feat-hero feat-hero--split feat-hero--essay"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.42, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="feat-hero-main">
                <div className="feat-hero-top">
                  <span className="feat-kicker">Featured Essay</span>
                  <span className="feat-term">{featured.term}</span>
                </div>
                <h3 className="feat-hero-title">{featured.title}</h3>
                <span className="feat-hero-course">{featured.course}</span>
                <p className="feat-hero-desc">{featured.description}</p>
                <button className="feat-hero-cta" onClick={() => open(featured)}>
                  Read essay →
                </button>
              </div>
              {featured.interlocutors && (
                <aside className="essay-interlocutors">
                  <span className="ei-label">In Conversation With</span>
                  <ul>
                    {featured.interlocutors.map((x) => (
                      <li key={x.author}>
                        <span className="ei-author">{x.author}</span>
                        <span className="ei-work">{x.work}</span>
                      </li>
                    ))}
                  </ul>
                </aside>
              )}
            </motion.article>
          )}
          <div className="feat-grid">
            {rest.map((w, i) => (
              <MiniCard key={i} w={w} index={i} onOpen={open} />
            ))}
          </div>
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
              ref={modalRef}
              tabIndex={-1}
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
                <p className="modal-desc">{active.description}</p>
                <EssayBody link={active.link} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
