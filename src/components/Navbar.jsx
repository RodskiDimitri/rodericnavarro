import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar = () => {
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
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Clients', href: '#markets' },
        { name: 'Contact', href: '#contact' }
    ];

    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // Determine which section is currently mostly visible
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.2, rootMargin: "-100px 0px -100px 0px" });

        navLinks.forEach((link) => {
            const id = link.href.substring(1);
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        // Setup hero intersection specifically because it's not in the navbar links but it's the top
        const heroElement = document.getElementById('home');
        if (heroElement) observer.observe(heroElement);
        // If we intersect hero, we can set activeSection to empty string so nothing is highlighted.

        return () => observer.disconnect();
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'py-5 bg-transparent'
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
                <a href="#" className="flex items-center gap-2" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                    <Cpu color="var(--accent-primary)" size={28} />
                    <span>RODERIC<span className="text-gradient">.AI</span></span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden-mobile" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                style={{
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)',
                                    borderBottom: isActive ? '2px solid var(--accent-primary)' : '2px solid transparent',
                                    paddingBottom: '4px',
                                    transition: 'all 0.2s'
                                }}
                                onMouseOver={(e) => { if (!isActive) e.target.style.color = 'var(--text-main)'; }}
                                onMouseOut={(e) => { if (!isActive) e.target.style.color = 'var(--text-muted)'; }}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                    <a href="#contact" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem 1.25rem', borderRadius: '99px', border: '1px solid var(--border-color)', fontSize: '0.9rem', transition: 'all 0.3s' }}>
                        Let's Talk
                    </a>
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
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{
                                        padding: '0.75rem',
                                        fontSize: '1.1rem',
                                        fontWeight: 500,
                                        borderBottom: '1px solid var(--border-color)',
                                        color: isActive ? 'var(--accent-primary)' : 'var(--text-main)',
                                        background: isActive ? 'rgba(0, 240, 255, 0.05)' : 'transparent'
                                    }}
                                >
                                    {link.name}
                                </a>
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
