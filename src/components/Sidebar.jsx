import React from 'react';
import { Cpu, Linkedin, Mail } from 'lucide-react';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Resume', id: 'resume' },
    { name: 'Clients', id: 'clients' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <aside className="sidebar desktop-only">
      <div className="sidebar-content glass">
        {/* Profile Card */}
        <div className="profile-section">
          <div className="avatar-wrapper">
            <div className="avatar-placeholder">
              <Cpu color="var(--accent-primary)" size={48} />
            </div>
          </div>
          <h2>Roderic Navarro</h2>
          <p className="title">AI Technology Consultant | Data Engineer</p>

          <div className="social-links">
            <a href="https://linkedin.com/in/rodericnavarro" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <button onClick={() => setActiveSection('contact')} aria-label="Email" style={{ padding: 0, border: 'none', background: 'none', display: 'flex' }}>
              <div className="social-btn"><Mail size={20} /></div>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.name}
                onClick={() => setActiveSection(link.id)}
                className={`nav-item ${isActive ? 'active' : ''}`}
                style={{ textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '1rem' }}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="sidebar-footer">
          <button onClick={() => setActiveSection('contact')} className="btn btn-primary w-full">Let's Talk</button>
          <div style={{ marginTop: '1.5rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.75rem', opacity: 0.6, lineHeight: 1.5 }}>
            &copy; {new Date().getFullYear()} Roderic G. Navarro.<br />All rights reserved.
          </div>
        </div>
      </div>

      <style>{`
        .sidebar {
          width: 320px;
          height: calc(100vh - 4rem);
          position: sticky;
          top: 2rem;
          display: flex;
        }

        .sidebar-content {
          width: 100%;
          border-radius: 24px;
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid var(--glass-border);
        }

        .profile-section {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .avatar-wrapper {
          width: 120px;
          height: 120px;
          margin: 0 auto 1.5rem;
          border-radius: 50%;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--accent-primary);
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
        }

        .profile-section h2 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .profile-section .title {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .social-links a, .social-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-main);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
          color: var(--text-main);
        }

        .social-links a:hover, .social-btn:hover {
          background: var(--accent-primary);
          color: var(--bg-main);
          border-color: var(--accent-primary);
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: auto;
        }

        .nav-item {
          padding: 0.75rem 1rem;
          border-radius: 12px;
          font-weight: 500;
          color: var(--text-muted);
          transition: all 0.3s ease;
        }

        .nav-item:hover {
          color: var(--text-main);
          background: rgba(255, 255, 255, 0.05);
        }

        .nav-item.active {
          color: var(--accent-primary);
          background: rgba(0, 240, 255, 0.1);
          border-left: 3px solid var(--accent-primary);
        }

        .sidebar-footer {
          margin-top: 2rem;
        }
          
        .w-full {
          width: 100%;
        }

        @media (min-width: 1025px) {
          .mobile-only {
            display: none !important;
          }
        }

        @media (max-width: 1024px) {
          .desktop-only {
            display: none !important;
          }
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
