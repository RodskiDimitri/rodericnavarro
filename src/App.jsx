import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import ResultsAtGlance from './components/sections/ResultsAtGlance';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Testimonials from './components/sections/Testimonials';
import TargetMarkets from './components/sections/TargetMarkets';
import Contact from './components/sections/Contact';

// Define the custom transition animation (Glass Morph)
const pageVariants = {
  initial: { opacity: 0, scale: 0.95, y: 20 },
  in: { opacity: 1, scale: 1, y: 0 },
  out: { opacity: 0, scale: 0.95, y: -20 }
};

const pageTransition = {
  type: "spring",
  stiffness: 260,
  damping: 20,
};

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.title = "Roderic Navarro | AI Consultant in Parañaque, Metro Manila";
  }, []);

  // Map section IDs to components
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div key="home">
            <Hero />
            <ResultsAtGlance />
          </div>
        );
      case 'about':
        return <About key="about" />;
      case 'skills':
        return <Skills key="skills" />;
      case 'experience':
        return <Experience key="experience" />;
      case 'testimonials':
        return <Testimonials key="testimonials" />;
      case 'markets':
        return <TargetMarkets key="markets" />;
      case 'contact':
        return <Contact key="contact" />;
      default:
        return (
          <div key="home-default">
            <Hero />
            <ResultsAtGlance />
          </div>
        );
    }
  };

  return (
    <div className="app-container">
      {/* Mobile Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <div className="layout-wrapper">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

        <div className="main-card" style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 4rem)', overflowY: 'auto' }}>
          <main style={{ flex: 1, position: 'relative', overflowX: 'hidden' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection} // changing the key triggers the animation
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                style={{ width: '100%', height: '100%' }}
              >
                {renderSection()}
              </motion.div>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
