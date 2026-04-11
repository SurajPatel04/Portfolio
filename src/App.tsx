import { AnimatePresence } from 'motion/react';
import { ThemeProvider, useTheme } from './ThemeContext';
import Navbar from './Navbar';
import Hero from './components/Hero';
import TechEcosystem from './components/TechEcosystem';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalView from './components/TerminalView';

import './index.css';

function AppContent() {
  const { theme } = useTheme();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        {theme === 'terminal' ? (
          <TerminalView key="terminal" />
        ) : (
          <div key="modern">
            <Hero />
            <TechEcosystem />
            <Experience />
            <Projects />
            <Certifications />
            <ResumeSection />
            <Contact />
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
