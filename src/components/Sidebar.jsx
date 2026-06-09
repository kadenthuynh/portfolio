import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Mail, Phone } from "lucide-react";

const IconLinkedIn = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const IconGithub = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);
import { meta } from "../data/content";
import { Button } from "./ui/button";

const sections = [
  { id: "intro", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "writing", label: "Writing" },
  { id: "leadership", label: "Leadership" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

function getInitialTheme() {
  try {
    return localStorage.getItem("kh-theme") || "light";
  } catch {
    return "dark";
  }
}

export default function Sidebar() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [activeId, setActiveId] = useState("intro");

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
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="side">
      <div>
        <div className="side-name">
          {meta.first} {meta.last}
        </div>
        <div className="side-loc">{meta.location}</div>
      </div>

      <nav className="side-nav" style={{ position: "relative" }}>
        {sections.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={activeId === s.id ? "active" : undefined}
            style={{ position: "relative" }}
          >
            {activeId === s.id && (
              <motion.span
                layoutId="nav-indicator"
                className="absolute left-[-32px] top-0 bottom-0 w-[2px] bg-accent rounded-r"
                transition={{ type: "spring", stiffness: 500, damping: 38 }}
              />
            )}
            <span className="num">0{i}</span>
            {s.label}
          </a>
        ))}
      </nav>

      <div className="side-contact">
        <div className="side-contact-head">
          <span className="num">07</span>Contact
        </div>
        <div className="side-contact-grid">
          <a className="side-link side-link-full" href={`mailto:${meta.email}`}>
            <Mail size={13} strokeWidth={1.7} />
            {meta.email}
          </a>
          <a className="side-link" href={`tel:${meta.phone}`}>
            <Phone size={13} strokeWidth={1.7} />
            {meta.phone}
          </a>
          <a
            className="side-link"
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconLinkedIn />
            LinkedIn
          </a>
          <a
            className="side-link"
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconGithub />
            GitHub
          </a>
        </div>
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
