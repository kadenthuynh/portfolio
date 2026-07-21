import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { meta, contact } from "../data/content";
import BlockHead from "./BlockHead";

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const IconGitHub = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

export default function Contact() {
  return (
    <section className="block" id="contact">
      <BlockHead num="07" title="Contact" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p className="contact-body">{contact.body}</p>
        <div className="contact-actions">
          <a
            className="contact-primary"
            href={`mailto:${meta.email}`}
            rel="noopener noreferrer"
          >
            <Mail strokeWidth={1.8} />
            Email me
          </a>
          <a
            className="contact-secondary"
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconLinkedIn />
            Connect on LinkedIn
          </a>
          <a
            className="contact-secondary"
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconGitHub />
            GitHub
          </a>
          <a
            className="contact-secondary"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText strokeWidth={1.8} />
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
