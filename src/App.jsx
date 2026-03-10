import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition'; // Import our new dynamic transition
import { siteConfig } from './data/config';

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
              <PageTransition pathname={location.pathname} key={location.pathname}>
                <Outlet />
              </PageTransition>
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

