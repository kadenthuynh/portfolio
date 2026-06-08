import Sidebar from "./components/Sidebar";
import Intro from "./components/Intro";
import Writing from "./components/Writing";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Leadership from "./components/Leadership";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
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
      </main>
    </div>
  );
}
