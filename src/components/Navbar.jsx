import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Experience', id: 'experience' },
        { name: 'Clients', id: 'markets' },
        { name: 'Contact', id: 'contact' }
    ];

    return (
        <nav
            className={`mobile-only fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'py-5 bg-transparent'
                }`}
            style={{
                position: 'fixed', width: '100%', zIndex: 50, top: 0,
                transition: 'all 0.3s ease',
                padding: scrolled ? '1rem 0' : '1.5rem 0',
                backgroundColor: scrolled ? 'var(--glass-bg)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none'
            }}
        >
            <div className="container flex justify-between items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button onClick={() => setActiveSection('home')} className="flex items-center gap-2 font-heading" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)', background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>
                    <Cpu color="var(--accent-primary)" size={28} />
                    <span>RODERIC<span className="text-gradient">.AI</span></span>
                </button>

                {/* Desktop Nav (Should technically be hidden if we strictly use Sidebar, but kept for safe fallback) */}
                <div className="hidden-mobile" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.id;
                        return (
                            <button
                                key={link.name}
                                onClick={() => setActiveSection(link.id)}
                                style={{
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)',
                                    borderBottom: isActive ? '2px solid var(--accent-primary)' : '2px solid transparent',
                                    paddingBottom: '4px',
                                    transition: 'all 0.2s',
                                    background: 'none',
                                    borderTop: 'none',
                                    borderLeft: 'none',
                                    borderRight: 'none',
                                    cursor: 'pointer',
                                    fontFamily: 'inherit'
                                }}
                                onMouseOver={(e) => { if (!isActive) e.target.style.color = 'var(--text-main)'; }}
                                onMouseOut={(e) => { if (!isActive) e.target.style.color = 'var(--text-muted)'; }}
                            >
                                {link.name}
                            </button>
                        );
                    })}
                    <button onClick={() => setActiveSection('contact')} className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem 1.25rem', borderRadius: '99px', border: '1px solid var(--border-color)', fontSize: '0.9rem', transition: 'all 0.3s', background: 'transparent', color: 'var(--text-main)', cursor: 'pointer' }}>
                        Let's Talk
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer', display: 'none' }}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{ position: 'absolute', top: '100%', left: 0, width: '100%', background: 'var(--bg-secondary)', padding: '1rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                    >
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <button
                                    key={link.name}
                                    onClick={() => {
                                        setActiveSection(link.id);
                                        setMobileMenuOpen(false);
                                    }}
                                    style={{
                                        padding: '0.75rem',
                                        fontSize: '1.1rem',
                                        fontWeight: 500,
                                        borderBottom: '1px solid var(--border-color)',
                                        color: isActive ? 'var(--accent-primary)' : 'var(--text-main)',
                                        background: isActive ? 'rgba(0, 240, 255, 0.05)' : 'transparent',
                                        textAlign: 'left',
                                        borderTop: 'none',
                                        borderLeft: 'none',
                                        borderRight: 'none',
                                        cursor: 'pointer',
                                        fontFamily: 'inherit'
                                    }}
                                >
                                    {link.name}
                                </button>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
            <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
