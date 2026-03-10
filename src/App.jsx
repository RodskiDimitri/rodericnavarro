import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
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
  const location = useLocation();

  useEffect(() => {
    document.title = siteConfig.meta.title;
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    const mainCard = document.querySelector('.main-card');
    if (mainCard) mainCard.scrollTop = 0;
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app-container">
      {/* Mobile Navbar */}
      <Navbar />

      <div className="layout-wrapper">
        <Sidebar />

        <div className="main-card" style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
          <main style={{ flex: 1, position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname} // changing the key triggers the animation
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                style={{ width: '100%', height: '100%' }}
              >
                <Outlet />
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

