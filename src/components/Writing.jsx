import { useState } from "react";
import { writing } from "../data/content";
import { essayContent } from "../data/essays";
import BlockHead from "./BlockHead";

const IconClose = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const IconPDF = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/>
  </svg>
);

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
              <p key={j} className={/^\([A-Z]{1,4}\d?\)/.test(part) ? "essay-premise" : undefined}>
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
            <div className="w-card" key={i} onClick={() => open(w)}>
              <div className="w-card-front">
                <div className="w-title">{w.title}</div>
                <div className="w-tags"><b>{w.course}</b> · {w.term}</div>
                <div className="w-read">READ&nbsp;↗</div>
              </div>
              <div className="w-card-desc">{w.description}</div>
            </div>
          ))}
        </div>
      </section>

      {active && (
        <div className="modal-overlay" onClick={close}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="modal-meta">
                  {active.course} <span className="term">{active.term}</span>
                </div>
                <div className="modal-title">{active.title}</div>
              </div>
              <div className="modal-actions">
                <a className="modal-pdf-btn" href={active.link} target="_blank" rel="noopener noreferrer">
                  <IconPDF />
                  Open PDF
                </a>
                <button className="modal-close" onClick={close} aria-label="Close">
                  <IconClose />
                </button>
              </div>
            </div>
            <div className="modal-body">
              <EssayBody link={active.link} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
