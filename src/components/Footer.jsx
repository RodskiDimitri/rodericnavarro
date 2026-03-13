import React from 'react';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';
import { siteConfig } from '../data/config';

const Footer = () => {
    const scrollToTop = () => {
        // Desktop uses `.main-card` as the scrollable container
        const mainCard = document.querySelector('.main-card');
        if (mainCard) {
            mainCard.scrollTo({ top: 0, behavior: 'smooth' });
        }
        // Mobile uses the default window for scrolling
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer style={{
            backgroundColor: 'var(--bg-secondary)',
            borderTop: '1px solid var(--glass-border)',
            padding: '4rem 0 2rem 0',
            marginTop: '4rem'
        }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
                        RODERIC<span className="text-gradient">.AI</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '400px', marginBottom: '0.75rem' }}>
                        {siteConfig.meta.footerDescription}
                    </p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem', opacity: 0.8 }}>
                        Based in {siteConfig.personal.location}
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="social-icon">
                            <Linkedin size={20} />
                        </a>
                        <a href={`mailto:${siteConfig.personal.email}`} className="social-icon">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <button onClick={scrollToTop} className="btn-outline glow-hover" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-main)' }}>
                        <ArrowUp size={20} />
                    </button>

                    <div style={{ textAlign: 'right', marginTop: 'auto' }}>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            &copy; {new Date().getFullYear()} {siteConfig.personal.fullName}. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-main);
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
        }
        .social-icon:hover {
          background: var(--accent-primary);
          color: var(--bg-main);
          border-color: var(--accent-primary);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px var(--accent-glow);
        }
        @media (max-width: 768px) {
          .container { grid-template-columns: 1fr !important; }
          .container > div:last-child { align-items: flex-start !important; margin-top: 2rem; }
          .container > div:last-child > div { text-align: left !important; }
        }
      `}</style>
        </footer>
    );
};

export default Footer;

