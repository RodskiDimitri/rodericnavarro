import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import ParticleNetwork from '../ui/ParticleNetwork';
import { siteConfig } from '../../data/config';

const Hero = ({ setActiveSection }) => {
    return (
        <section id="home" style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background animated elements */}
            <div style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', background: 'var(--accent-primary)', filter: 'blur(150px)', opacity: 0.15, borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '400px', height: '400px', background: 'var(--accent-secondary)', filter: 'blur(200px)', opacity: 0.15, borderRadius: '50%' }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div className="grid grid-cols-2 gap-8 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid rgba(0, 240, 255, 0.2)', borderRadius: '99px', color: 'var(--accent-primary)', marginBottom: '1.5rem', fontWeight: 500, fontSize: '0.9rem' }}
                        >
                            Available for New Projects
                        </motion.div>

                        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 700 }}>
                            Hi, I'm <br />
                            <span className="text-gradient">{siteConfig.personal.name}</span>
                        </h1>

                        <h2 style={{ fontSize: '1.5rem', fontWeight: 400, color: 'var(--text-main)', marginBottom: '1.5rem' }}>
                            Strategic <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Technology Leader</span> & <span style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>AI Consultant</span>
                        </h2>

                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '500px' }}>
                            {siteConfig.meta.description}
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="https://drive.google.com/file/d/1-mxrsbG7iemZe5zizn2sF3u3MKBuhFUg/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
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

                    {/* Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{ display: 'flex', justifyContent: 'center' }}
                        className="hero-visual"
                    >
                        <div className="glass" style={{ width: '100%', maxWidth: '450px', aspectRatio: '1/1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', boxShadow: '0 0 40px rgba(0,240,255,0.1)' }}>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                style={{ position: 'absolute', width: '100%', height: '100%', border: '1px dashed var(--accent-primary)', borderRadius: '50%', opacity: 0.3 }}
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                style={{ position: 'absolute', width: '80%', height: '80%', border: '1px solid var(--accent-secondary)', borderRadius: '50%', opacity: 0.2 }}
                            />

                            {/* Neural Network Background inside glass ring */}
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', opacity: 0.8, zIndex: 0 }}>
                                <ParticleNetwork
                                    particleColor="rgba(0, 240, 255, 0.4)"
                                    lineColor="rgba(0, 240, 255, 0.2)"
                                    particleCount={40}
                                    connectionDistance={120}
                                    speed={0.4}
                                />
                            </div>

                            <motion.div
                                style={{ animation: 'float 6s ease-in-out infinite', width: '240px', height: '240px', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 240, 255, 0.2)', border: '4px solid var(--bg-secondary)', position: 'relative', zIndex: 10 }}
                            >
                                <img src={`${import.meta.env.BASE_URL}profile.png`} alt="Roderic Navarro" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
