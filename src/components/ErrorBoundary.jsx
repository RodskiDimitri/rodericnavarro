import React from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';

export default function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();

  // Log the error to the console for debugging
  console.error("ErrorBoundary caught an error:", error);

  const isFailedLoadError = (err) => {
    // Check for common error signatures related to stale assets or JSON parsing from GitHub Pages 404s
    if (err instanceof SyntaxError && err.message.includes("Unexpected token '<'")) return true;
    if (err.message && typeof err.message === 'string') {
      const msg = err.message.toLowerCase();
      if (msg.includes('failed to fetch dynamically imported module')) return true;
      if (msg.includes('chunk load failed')) return true;
      if (msg.includes('is not valid json')) return true;
    }
    return false;
  };

  // If it looks like a stale deployment issue, force a reload to get the new assets
  if (isFailedLoadError(error)) {
    const hasReloaded = sessionStorage.getItem('stale_reload_attempted');
    if (!hasReloaded) {
      sessionStorage.setItem('stale_reload_attempted', 'true');
      console.warn("Stale chunk/JSON detected. Forcing hard reload to fetch new deployment assets...");
      window.location.reload(true);
      return null; // Return null so we don't flash an error UI before reloading
    }
  }

  // Clear the reload flag on successful load or if we are showing the fallback UI
  const handleReload = () => {
    sessionStorage.removeItem('stale_reload_attempted');
    window.location.reload(true);
  };

  const handleGoHome = () => {
    sessionStorage.removeItem('stale_reload_attempted');
    navigate('/', { replace: true });
  };

  return (
    <div className="layout-wrapper" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
          
          {/* Visual Indicator */}
          <div className="glass" style={{ 
            width: '80px', height: '80px', borderRadius: '50%', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: 'rgba(255, 60, 60, 0.1)',
            border: '1px solid rgba(255, 60, 60, 0.2)',
            boxShadow: '0 0 40px rgba(255, 60, 60, 0.1)'
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff4d4d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>

          <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', margin: 0 }}>
            Whoops! <span className="text-gradient">Something went wrong.</span>
          </h1>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>
            We've encountered an unexpected issue while loading this page. 
            This usually happens if the application was recently updated in the background.
          </p>

          {/* Optional Developer output, can remain visible or be hidden in prod */}
          <div className="glass" style={{
            padding: '1rem', borderRadius: '12px', width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255,255,255,0.05)',
            textAlign: 'left',
            overflowX: 'auto',
            fontSize: '0.85rem',
            color: 'var(--text-muted)'
          }}>
            <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Error Details:</p>
            <code style={{ fontFamily: 'monospace' }}>
              {error?.statusText || error?.message || "Unknown error"}
            </code>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
            <button onClick={handleReload} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
              </svg>
              Reload Page
            </button>
            <button onClick={handleGoHome} className="btn btn-outline glow-hover" style={{ backgroundColor: 'transparent', borderColor: 'var(--border-color)', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Go to Homepage
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
