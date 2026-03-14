import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import ParticleNetwork from './ui/ParticleNetwork';
import { siteConfig } from '../data/config';

const Sidebar = () => {
  const navigate = useNavigate();
  const navLinks = siteConfig.navLinks.filter(link => link.name !== 'Contact');
  return (
    <aside className="sidebar desktop-only">
      <div className="sidebar-content">
        {/* Profile Card */}
        <div className="profile-section">
          <div className="avatar-wrapper">
            {/* Particle network background */}
            <div className="sidebar-particles">
              <ParticleNetwork
                particleColor="rgba(0, 240, 255, 0.4)"
                lineColor="rgba(0, 240, 255, 0.2)"
                particleCount={15}
                connectionDistance={60}
                speed={0.3}
              />
            </div>
            {/* Actual profile photo */}
            <div className="sidebar-photo-wrapper">
              <img
                src={`${import.meta.env.BASE_URL}profile.png`}
                alt="Roderic Navarro"
                className="sidebar-photo"
                loading="lazy"
              />
            </div>
          </div>
          <h2>{siteConfig.personal.name}</h2>
          <p className="title">{siteConfig.personal.role}</p>

          <div className="social-links">
            <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href={`mailto:${siteConfig.personal.email}`} aria-label="Email" style={{ padding: 0, border: 'none', background: 'none', display: 'flex', cursor: 'pointer' }}>
              <div className="social-btn"><Mail size={20} /></div>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {navLinks.map((link) => {
            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                style={{ textAlign: 'left', background: 'none', border: 'none', fontFamily: 'inherit', fontSize: '1rem', textDecoration: 'none', display: 'block' }}
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="sidebar-footer">
          <button onClick={() => navigate('/contact')} className="btn btn-primary w-full">Let's Talk</button>
          <div style={{ marginTop: '1.5rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.75rem', opacity: 0.45, lineHeight: 1.5 }}>
            &copy; {new Date().getFullYear()} {siteConfig.personal.fullName}.<br />All rights reserved.
          </div>
        </div>
      </div>

      <style>{`
        .sidebar {
          width: 320px;
          flex-shrink: 0;
          height: calc(100vh - 4rem);
          position: sticky;
          top: 2rem;
          display: flex;
        }

        .sidebar-content {
          width: 100%;
          padding: 2.5rem 2rem 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .profile-section {
          text-align: center;
          margin-bottom: 0.75rem;
        }

        .avatar-wrapper {
          width: 100px;
          height: 100px;
          margin: 0 auto 0.5rem;
          border-radius: 50%;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--accent-primary);
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
          position: relative;
          overflow: hidden;
        }

        /* Particle canvas clipped inside circle */
        .sidebar-particles {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          border-radius: 50%;
          overflow: hidden;
          opacity: 0.8;
          z-index: 0;
        }

        /* Profile photo on top */
        .sidebar-photo-wrapper {
          width: 86px;
          height: 86px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid var(--bg-secondary);
          box-shadow: 0 4px 16px rgba(0, 240, 255, 0.2);
          position: relative;
          z-index: 10;
        }

        .sidebar-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .profile-section h2 {
          font-size: 1.25rem;
          margin-bottom: 0.35rem;
        }

        .profile-section .title {
          color: var(--text-muted);
          font-size: 0.85rem;
          margin-bottom: 0.75rem;
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
          gap: 0.25rem;
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
          margin-top: 0.75rem;
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
    </aside >
  );
};

export default Sidebar;
