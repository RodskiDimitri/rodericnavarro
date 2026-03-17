import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// Base transition configuration — shared across all variants
const OVERLAY_DURATION = 2.0; // Increased from 1.4 for a more deliberate feel
const OVERLAY_EASE = [0.22, 1, 0.36, 1];

// Content fade variants (subtle fade & scale for the actual page content)
const contentVariants = {
  initial: { opacity: 0, scale: 0.98 },
  in: { opacity: 1, scale: 1, transition: { duration: 1.2, delay: 0.6, ease: OVERLAY_EASE } }, // Slower fade-in with longer delay
  out: { opacity: 0, scale: 0.98, transition: { duration: 0.4 } },
};

/**
 * Returns the framer-motion variants AND the inline JSX structure
 * for the overlay, based on the current route.
 */
function getOverlayConfig(pathname) {
  // Normalize pathname: strip the base path prefix and trailing slash for clean matching
  const clean = pathname.replace(/^\/rodericnavarro\/?/, '/').replace(/\/$/, '') || '/';

  switch (clean) {
    case '/':
      // Home: "Neural Pulse" - expanding radial glow
      return (
        <motion.div
          key="home-overlay"
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: OVERLAY_DURATION, ease: OVERLAY_EASE }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '100vw',
            marginLeft: '-50vw',
            marginTop: '-50vw',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-primary)',
            filter: 'blur(100px)',
            pointerEvents: 'none',
            zIndex: 50,
          }}
        />
      );

    case '/about':
      // About: "Cascade" - horizontal bars cascading down the screen
      return (
        <div
          key="about-overlay"
          style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', pointerEvents: 'none', zIndex: 50 }}
        >
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              initial={{ x: '-100%', opacity: 0.8 }}
              animate={{ x: '100%', opacity: 0 }}
              transition={{
                duration: OVERLAY_DURATION, // Use unified duration
                delay: i * 0.15, // Slightly more stagger
                ease: OVERLAY_EASE,
              }}
              style={{
                flex: 1,
                width: '100%',
                backgroundColor: 'var(--accent-primary)',
                borderBottom: i < 5 ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
              }}
            />
          ))}
        </div>
      );

    case '/resume':
      // Resume: "Slide-in Panel" - a sleek solid panel that sweeps across the screen horizontally
      return (
        <motion.div
          key="resume-overlay"
          initial={{ x: '100%', opacity: 1 }} // Start fully off-screen right, solid
          animate={{ x: '-100%', opacity: 0 }} // Slide to off-screen left, fading out
          transition={{ duration: OVERLAY_DURATION, ease: OVERLAY_EASE }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'var(--accent-primary)',
            pointerEvents: 'none',
            zIndex: 50,
          }}
        />
      );

    case '/clients':
      // Clients: "Segmented Unveil" - vertical data columns sliding away in a staggered wave
      return (
        <div
          key="clients-overlay"
          style={{ position: 'absolute', inset: 0, display: 'flex', pointerEvents: 'none', zIndex: 50 }}
        >
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 1, opacity: 0.6 }}
              animate={{ scaleY: 0, opacity: 0 }}
              transition={{ duration: OVERLAY_DURATION, delay: i * 0.2, ease: OVERLAY_EASE }}
              style={{
                flex: 1,
                height: '100%',
                backgroundColor: 'var(--accent-primary)',
                transformOrigin: i % 2 === 0 ? 'top' : 'bottom', // Alternating sliding direction
                borderRight: i < 3 ? '1px solid rgba(0, 0, 0, 0.2)' : 'none', // Subtle separation
              }}
            />
          ))}
        </div>
      );

    case '/contact':
      // Contact: "Zoom-In on Entry" - A central circular lens that zooms towards the viewer
      return (
        <motion.div
          key="contact-overlay"
          initial={{ scale: 0.8, opacity: 0.7 }}
          animate={{ scale: 3.5, opacity: 0 }}
          transition={{ duration: OVERLAY_DURATION, ease: OVERLAY_EASE }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '100vw',
            marginLeft: '-50vw',
            marginTop: '-50vw',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-primary)',
            filter: 'blur(40px)', // Softer edge for a more "atmospheric" zoom
            pointerEvents: 'none',
            zIndex: 50,
          }}
        />
      );

    default:
      // Fallback: simple fade
      return (
        <motion.div
          key="default-overlay"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 0 }}
          transition={{ duration: OVERLAY_DURATION }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'var(--accent-primary)',
            pointerEvents: 'none',
            zIndex: 50,
          }}
        />
      );
  }
}

// Check if user prefers reduced motion
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function PageTransition({ children, pathname }) {
  const overlay = useMemo(() => getOverlayConfig(pathname), [pathname]);

  // If user prefers reduced motion, skip the overlay animation entirely
  // and use a simple, instant fade for content
  const reducedContentVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1, transition: { duration: 0.2 } },
    out: { opacity: 0, transition: { duration: 0.15 } },
  };

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'clip' }}>
      {/* The Dynamic Overlay */}
      {!prefersReducedMotion && overlay}

      {/* The Actual Page Content */}
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={prefersReducedMotion ? reducedContentVariants : contentVariants}
        style={{ width: '100%', height: '100%' }}
      >
        {children}
      </motion.div>
    </div>
  );
}

