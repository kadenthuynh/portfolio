import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { meta, contact } from "../data/content";
import BlockHead from "./BlockHead";

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
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
