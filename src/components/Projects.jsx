import { motion } from "framer-motion";
import { projects } from "../data/content";
import BlockHead from "./BlockHead";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { TiltCard } from "./ui/tilt-card";

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
            <TiltCard>
            <Card className="h-full p-[18px]">
              <CardHeader>
                <div className="proj-name">{p.name}</div>
              </CardHeader>
              <CardContent>{p.description}</CardContent>
              <CardFooter>
                {p.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </CardFooter>
            </Card>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
