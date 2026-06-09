import { motion } from "framer-motion";
const IconGithub = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);
import { projects } from "../data/content";
import BlockHead from "./BlockHead";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";

export default function Projects() {
  return (
    <section className="block" id="projects">
      <BlockHead num="05" title="Projects" />
      <div className="proj-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.09, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -3, borderColor: "var(--line2)" }}
          >
            <Card className="h-full p-[18px]">
              <CardHeader>
                <div className="proj-name">{p.name}</div>
                {p.github && (
                  <a
                    className="proj-code"
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconGithub />
                    Code
                  </a>
                )}
              </CardHeader>
              <CardContent>{p.description}</CardContent>
              <CardFooter>
                {p.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
