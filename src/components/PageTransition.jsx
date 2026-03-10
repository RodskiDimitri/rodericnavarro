import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// Base transition configuration — shared across all line variants
const LINE_DURATION = 0.8;
const LINE_EASE = [0.25, 0.1, 0.25, 1];

// Content fade variants (subtle fade & scale for the actual page content)
const contentVariants = {
  initial: { opacity: 0, scale: 0.98 },
  in: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.15, ease: LINE_EASE } },
  out: { opacity: 0, scale: 0.98, transition: { duration: 0.3 } },
};

/**
 * Returns the framer-motion variants AND the inline style overrides
 * for the "signature line" overlay, based on the current route.
 */
function getLineConfig(pathname) {
  // Normalize pathname: strip the base path prefix and trailing slash for clean matching
  const clean = pathname.replace(/^\/rodericnavarro\/?/, '/').replace(/\/$/, '') || '/';

  switch (clean) {
    case '/':
      // Home: Horizontal line draws outward from center
      return {
        variants: {
          initial: { scaleX: 0, opacity: 1 },
          animate: { scaleX: 1, opacity: 0, transition: { duration: LINE_DURATION, ease: LINE_EASE } },
        },
        style: {
          top: '50%',
          left: 0,
          width: '100%',
          height: '2px',
          transformOrigin: '50% 50%',
        },
      };

    case '/about':
      // About: Vertical thin line draws top-to-bottom (Curtain)
      return {
        variants: {
          initial: { scaleY: 0, opacity: 1 },
          animate: { scaleY: 1, opacity: 0, transition: { duration: 1.0, ease: LINE_EASE } },
        },
        style: {
          top: 0,
          left: '50%',
          width: '2px',
          height: '100%',
          transformOrigin: '50% 0%', // Grow from top
        },
      };

    case '/resume':
      // Resume: Horizontal line draws left-to-right (Timeline)
      return {
        variants: {
          initial: { scaleX: 0, opacity: 1 },
          animate: { scaleX: 1, opacity: 0, transition: { duration: LINE_DURATION, ease: LINE_EASE } },
        },
        style: {
          top: '50%',
          left: 0,
          width: '100%',
          height: '2px',
          transformOrigin: '0% 50%', // Grow from left
        },
      };

    case '/clients':
      // Clients: Full-width line shrinks to center (converge)
      return {
        variants: {
          initial: { scaleX: 1, opacity: 1 },
          animate: { scaleX: 0, opacity: 0, transition: { duration: LINE_DURATION, ease: LINE_EASE } },
        },
        style: {
          top: '50%',
          left: 0,
          width: '100%',
          height: '2px',
          transformOrigin: '50% 50%', // Shrink to center
        },
      };

    case '/contact':
      // Contact: Diagonal line sweeps across the content area
      return {
        variants: {
          initial: { scaleX: 0, opacity: 1 },
          animate: { scaleX: 1, opacity: 0, transition: { duration: LINE_DURATION, ease: LINE_EASE } },
        },
        style: {
          top: '50%',
          left: '-25%', // Offset to allow the rotated line to span the full area
          width: '150%', // Wider than container so diagonal covers the area
          height: '2px',
          transformOrigin: '0% 50%', // Grow from left
          transform: 'rotate(-30deg)', // Slight diagonal for elegance
        },
      };

    default:
      // Fallback: Same as Home
      return {
        variants: {
          initial: { scaleX: 0, opacity: 1 },
          animate: { scaleX: 1, opacity: 0, transition: { duration: LINE_DURATION, ease: LINE_EASE } },
        },
        style: {
          top: '50%',
          left: 0,
          width: '100%',
          height: '2px',
          transformOrigin: '50% 50%',
        },
      };
  }
}

// Check if user prefers reduced motion
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function PageTransition({ children, pathname }) {
  const lineConfig = useMemo(() => getLineConfig(pathname), [pathname]);

  // If user prefers reduced motion, skip the line animation entirely
  // and use a simple, instant fade for content
  const reducedContentVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1, transition: { duration: 0.2 } },
    out: { opacity: 0, transition: { duration: 0.15 } },
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* The "Signature Line" Overlay — pointer-events: none so it never blocks clicks */}
      {!prefersReducedMotion && (
        <motion.div
          key={`${pathname}-line`}
          initial="initial"
          animate="animate"
          variants={lineConfig.variants}
          style={{
            position: 'absolute',
            ...lineConfig.style,
            backgroundColor: 'var(--accent-primary)',
            zIndex: 50,
            pointerEvents: 'none',
          }}
        />
      )}

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
