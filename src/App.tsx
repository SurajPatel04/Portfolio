import Navbar from './Navbar';
import Hero from './components/Hero';
import TechEcosystem from './components/TechEcosystem';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechEcosystem />
      <Experience />
      <Projects />
      <Certifications />
      <ResumeSection />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
