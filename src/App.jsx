import { useTheme } from "./useTheme";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Publications from "./components/Publications";
import SnakeGame from "./components/SnakeGame";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="relative min-h-screen font-sans">
      <Background />
      <Navbar theme={theme} toggle={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certificates />
        <Publications />
        <SnakeGame />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
