import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { projects } from "../data/content";
import BlockHead from "./BlockHead";
import { Badge } from "./ui/badge";
import { Button, LinkButton } from "./ui/button";
import { AthenaPreview } from "./ui/athena-preview";

function ProjectLinks({ p }) {
  return (
    <>
      {p.live && (
        <a
          href={p.live}
          target="_blank"
          rel="noopener noreferrer"
          className="proj-code"
        >
          View Live →
        </a>
      )}
      {p.github && (
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          className="proj-code"
        >
          View Code →
        </a>
      )}
    </>
  );
}

function ProjectCard({ p, index, onOpen }) {
  return (
    <motion.article
      className="feat-card"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(p)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(p);
        }
      }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.09, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="feat-card-top">
        <span className="feat-card-kicker">{p.tech[0]}</span>
        <span className="feat-card-cue">Details →</span>
      </div>
      <h4 className="feat-card-title">{p.name}</h4>
      <p className="feat-card-tag">{p.tagline}</p>
    </motion.article>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  const open = (p) => {
    setActive(p);
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

  return (
    <>
      <section className="block" id="projects">
        <BlockHead num="05" title="Projects" />
        <div className="feat">
          {featured && (
            <motion.article
              className="feat-hero feat-hero--split"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="feat-hero-main">
                <div className="feat-hero-top">
                  <span className="feat-kicker">Featured Project</span>
                  <ProjectLinks p={featured} />
                </div>
                <h3 className="feat-hero-title">{featured.name}</h3>
                {featured.description.map((para, j) => (
                  <div key={j} className="proj-para">
                    <span className="proj-label">
                      {j === 0 ? "Overview" : "Implementation"}
                    </span>
                    <p className="feat-hero-desc">{para}</p>
                  </div>
                ))}
                <div className="feat-tech">
                  {featured.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
              <AthenaPreview />
            </motion.article>
          )}

          <div className="feat-grid">
            {rest.map((p, i) => (
              <ProjectCard key={p.name} p={p} index={i} onOpen={open} />
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
              role="dialog"
              aria-modal="true"
              aria-labelledby="proj-modal-title"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="modal-head">
                <div>
                  <div className="modal-meta">{active.tech[0]}</div>
                  <div className="modal-title" id="proj-modal-title">
                    {active.name}
                  </div>
                </div>
                <div className="modal-actions">
                  {active.live && (
                    <LinkButton
                      href={active.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live →
                    </LinkButton>
                  )}
                  {active.github && (
                    <LinkButton
                      href={active.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code →
                    </LinkButton>
                  )}
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
                {active.description.map((para, j) => (
                  <div key={j} className="proj-para">
                    <span className="proj-label">
                      {j === 0 ? "Overview" : "Implementation"}
                    </span>
                    <p className="modal-desc">{para}</p>
                  </div>
                ))}
                <div className="feat-tech">
                  {active.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
