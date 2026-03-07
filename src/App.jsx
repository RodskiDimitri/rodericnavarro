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
  const [activeClientTab, setActiveClientTab] = useState('testimonials');

  useEffect(() => {
    document.title = "Roderic Navarro | AI Consultant in Parañaque, Metro Manila";
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
            <div className="container" style={{ padding: '2rem 1.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center', flexShrink: 0 }}>
                My <span className="text-gradient">Resume</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto', flexShrink: 0 }}>
                Career journey and technical expertise
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', flex: 1, overflow: 'hidden' }} className="resume-grid">
                <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ flex: 1, overflowY: 'auto', paddingRight: '1rem', paddingBottom: '2rem' }} className="custom-scrollbar">
                    <Experience />
                  </div>
                  {/* Bottom fade out */}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40px', background: 'linear-gradient(to top, var(--bg-main), transparent)', pointerEvents: 'none' }}></div>
                </div>
                <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ flex: 1, overflowY: 'auto', paddingRight: '1rem', paddingBottom: '2rem' }} className="custom-scrollbar">
                    <Skills />
                  </div>
                  {/* Bottom fade out */}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40px', background: 'linear-gradient(to top, var(--bg-main), transparent)', pointerEvents: 'none' }}></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'clients':
        return (
          <div key="clients" style={{ ...pageStyle, justifyContent: 'flex-start' }}>
            <div className="container" style={{ padding: '2rem 1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <button
                  onClick={() => setActiveClientTab('testimonials')}
                  className={`btn ${activeClientTab === 'testimonials' ? 'primary' : ''}`}
                  style={{ padding: '0.5rem 1.5rem', borderRadius: '8px', background: activeClientTab === 'testimonials' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)', color: activeClientTab === 'testimonials' ? '#000' : 'var(--text-main)', border: 'none', fontWeight: 600 }}
                >
                  Testimonials
                </button>
                <button
                  onClick={() => setActiveClientTab('markets')}
                  className={`btn ${activeClientTab === 'markets' ? 'primary' : ''}`}
                  style={{ padding: '0.5rem 1.5rem', borderRadius: '8px', background: activeClientTab === 'markets' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)', color: activeClientTab === 'markets' ? '#000' : 'var(--text-main)', border: 'none', fontWeight: 600 }}
                >
                  Target Markets
                </button>
              </div>
              <div style={{ position: 'relative' }}>
                <AnimatePresence mode="wait">
                  {activeClientTab === 'testimonials' ? (
                    <motion.div key="test" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}>
                      <Testimonials />
                    </motion.div>
                  ) : (
                    <motion.div key="mark" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                      <TargetMarkets />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
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
          <div className="mobile-only">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
