import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Mail, Phone, FileText } from "lucide-react";

import { meta } from "../data/content";
import { Button } from "./ui/button";
import { Scales } from "./ui/scales";

const IconLinkedIn = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const sections = [
  { id: "intro", label: "About Me" },
  { id: "education", label: "Education" },
  { id: "writing", label: "Writing" },
  { id: "experience", label: "Experience" },
  { id: "leadership", label: "Leadership" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function getInitialTheme() {
  // The blocking script in index.html already resolved this before paint.
  return document.documentElement.getAttribute("data-theme") || "dark";
}

export default function Sidebar() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [activeId, setActiveId] = useState("intro");
  const clickGuard = useRef(0);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("kh-theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < clickGuard.current) return;
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    const onScroll = () => {
      if (Date.now() < clickGuard.current) return;
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50)
        setActiveId(sections[sections.length - 1].id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <aside className="side">
      <div>
        <h1 className="side-name">
          {meta.first} {meta.last}
        </h1>
        <div className="side-role">{meta.role}</div>
        <div className="side-contact-line">
          <span className="side-contact-group">
            <a href={`mailto:${meta.email}`}>
              <Mail size={11} strokeWidth={1.7} />
              {meta.email}
            </a>
            <span>|</span>
            <a href={`tel:${meta.phone}`}>
              <Phone size={11} strokeWidth={1.7} />
              {meta.phone}
            </a>
          </span>
          <span className="side-contact-group">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText size={11} strokeWidth={1.7} />
              Resume
            </a>
            <span>|</span>
            <a href={meta.linkedin} target="_blank" rel="noopener noreferrer">
              <IconLinkedIn />
              LinkedIn
            </a>
          </span>
        </div>
      </div>

      <nav className="side-nav" style={{ position: "relative" }}>
        {sections.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={activeId === s.id ? "active" : undefined}
            style={{ position: "relative" }}
            onClick={() => {
              clickGuard.current = Date.now() + 1200;
              setActiveId(s.id);
            }}
          >
            {activeId === s.id && (
              <motion.span
                layoutId="nav-indicator"
                className="absolute left-[-32px] top-0 bottom-0 w-[2px] bg-accent rounded-r hidden sm:block"
                transition={{ type: "spring", stiffness: 500, damping: 38 }}
              />
            )}
            <span className="num">0{i}</span>
            {s.label}
          </a>
        ))}
      </nav>

      <div className="side-figure" style={{ marginTop: "auto" }} aria-hidden="true">
        <Scales />
      </div>

      <div className="side-foot">
        <span>© 2026</span>
        <Button
          variant="icon"
          size="icon"
          aria-label="Toggle theme"
          onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        >
          {theme === "dark" ? (
            <Moon size={14} strokeWidth={1.8} />
          ) : (
            <Sun size={14} strokeWidth={1.8} />
          )}
        </Button>
      </div>
    </aside>
  );
}
