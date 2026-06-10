import Sidebar from "./components/Sidebar";
import Intro from "./components/Intro";
import Writing from "./components/Writing";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Leadership from "./components/Leadership";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { MotionConfig } from "framer-motion";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="shell">
        <Sidebar />
        <main className="content">
          <Intro />
          <Experience />
          <Education />
          <Writing />
          <Leadership />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  );
}
