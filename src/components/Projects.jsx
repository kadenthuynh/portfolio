import { motion } from "framer-motion";
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
          >
            <Card className="h-full p-[18px]">
              <CardHeader>
                <div className="proj-name">{p.name}</div>
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
              </CardHeader>
              <CardContent>
                {Array.isArray(p.description) ? (
                  p.description.map((para, j) => (
                    <div key={j} className="proj-para">
                      <span className="proj-label">
                        {j === 0 ? "Overview" : "Implementation"}
                      </span>
                      <p>{para}</p>
                    </div>
                  ))
                ) : (
                  p.description
                )}
              </CardContent>
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
