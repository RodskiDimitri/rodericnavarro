import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import ResultsAtGlance from './components/sections/ResultsAtGlance';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import ResumePage from './components/pages/ResumePage';
import ClientsPage from './components/pages/ClientsPage';
import { siteConfig } from './data/config';

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
    document.title = siteConfig.meta.title;
  }, []);

  // Scroll to top on section change
  useEffect(() => {
    const mainCard = document.querySelector('.main-card');
    if (mainCard) mainCard.scrollTop = 0;
    window.scrollTo(0, 0);
  }, [activeSection]);

  // Map section IDs to combined pages
  const renderSection = () => {
    const pageStyle = { minHeight: 'calc(100vh - 4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' };
    switch (activeSection) {
      case 'home':
        return (
          <div key="home" style={pageStyle}>
            <Hero setActiveSection={setActiveSection} />
          </div>
        );
      case 'about':
        return (
          <div key="about" style={pageStyle}>
            <About />
            <ResultsAtGlance />
          </div>
        );
      case 'resume':
        return (
          <div key="resume" style={{ ...pageStyle, justifyContent: 'flex-start', height: '100%' }}>
            <ResumePage />
          </div>
        );
      case 'clients':
        return (
          <div key="clients" style={{ ...pageStyle, justifyContent: 'flex-start' }}>
            <ClientsPage />
          </div>
        );
      case 'contact':
        return (
          <div key="contact" style={pageStyle}>
            <Contact />
          </div>
        );
      default:
        return (
          <div key="home-default" style={pageStyle}>
            <Hero setActiveSection={setActiveSection} />
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

        <div className="main-card" style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
          <main style={{ flex: 1, position: 'relative' }}>
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
          <div className="mobile-only">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
