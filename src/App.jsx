import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition'; // Import our new dynamic transition
import FloatingNav from './components/FloatingNav';
import { siteConfig } from './data/config';

function App() {
  const location = useLocation();

  // Theme State Management
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    document.title = siteConfig.meta.title;
  }, []);

  // Apply theme class and save to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (theme === 'light') {
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
      }
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  // Scroll to top on route change
  useEffect(() => {
    const mainCard = document.querySelector('.main-card');
    if (mainCard) mainCard.scrollTop = 0;
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app-container">
      {/* Mobile Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <div className="layout-wrapper">
        <Sidebar theme={theme} toggleTheme={toggleTheme} />

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
        <FloatingNav />
      </div>
    </div>
  );
}

export default App;

