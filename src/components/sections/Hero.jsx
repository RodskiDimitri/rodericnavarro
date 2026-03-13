import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ParticleNetwork from '../ui/ParticleNetwork';
import { siteConfig } from '../../data/config';

const Hero = ({ setActiveSection }) => {
    return (
        <section id="home" className="hero-section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <style>{`
                @media (max-width: 640px) {
                    .hero-section {
                        min-height: auto !important;
                        padding-top: 4rem;
                        padding-bottom: 2rem;
                    }
                    .hero-buttons {
                        flex-direction: column;
                        width: 100%;
                    }
                    .hero-buttons > * {
                        width: 100%;
                    }
                }
            `}</style>
            {/* Background animated elements */}
            <div style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', background: 'var(--accent-primary)', filter: 'blur(150px)', opacity: 0.15, borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '400px', height: '400px', background: 'var(--accent-secondary)', filter: 'blur(200px)', opacity: 0.15, borderRadius: '50%' }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                {/* Text Content — centered, full-width */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    {/* Mobile-only Profile Picture */}
                    <div className="mobile-only" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <div className="glass" style={{ width: '180px', height: '180px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', boxShadow: '0 0 30px rgba(0,240,255,0.1)' }}>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                style={{ position: 'absolute', width: '100%', height: '100%', border: '1px dashed var(--accent-primary)', borderRadius: '50%', opacity: 0.3 }}
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                style={{ position: 'absolute', width: '85%', height: '85%', border: '1px solid var(--accent-secondary)', borderRadius: '50%', opacity: 0.2 }}
                            />

                            {/* Neural Network Background inside glass ring */}
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', opacity: 0.8, zIndex: 0 }}>
                                <ParticleNetwork
                                    particleColor="rgba(0, 240, 255, 0.4)"
                                    lineColor="rgba(0, 240, 255, 0.2)"
                                    particleCount={20}
                                    connectionDistance={80}
                                    speed={0.4}
                                />
                            </div>

                            <motion.div
                                style={{ animation: 'float 6s ease-in-out infinite', width: '130px', height: '130px', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0, 240, 255, 0.2)', border: '3px solid var(--bg-secondary)', position: 'relative', zIndex: 10 }}
                            >
                                <img src={`${import.meta.env.BASE_URL}profile.png`} alt="Roderic Navarro" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </motion.div>
                        </div>
                    </div>



                    <h1 style={{ fontSize: 'clamp(3rem, 9vw, 5.5rem)', lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 700 }}>
                        Hi, I'm <br />
                        <span className="text-gradient">{siteConfig.personal.name}</span>
                    </h1>

                    <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', fontWeight: 400, color: 'var(--text-main)', marginBottom: '1.5rem' }}>
                        Strategic <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Technology Leader</span> &amp; <span style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>AI Consultant</span>
                    </h2>

                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '560px', margin: '0 auto 2.5rem' }}>
                        {siteConfig.meta.description}
                    </p>

                    <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <a href={siteConfig.personal.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            View Resume <ArrowRight size={18} />
                        </a>
                        <button
                            onClick={() => setActiveSection('contact')}
                            className="btn btn-outline glow-hover"
                            style={{ cursor: 'pointer' }}
                        >
                            Contact Me
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
