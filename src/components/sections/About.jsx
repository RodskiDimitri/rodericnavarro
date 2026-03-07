import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, TrendingUp } from 'lucide-react';

const About = () => {
    const stats = [
        { icon: <Briefcase size={24} />, value: "17+", label: "Years Experience" },
        { icon: <TrendingUp size={24} />, value: "$50K+", label: "Annual Savings Generated" },
        { icon: <Award size={24} />, value: "99.8%", label: "System Uptime Maintained" }
    ];

    return (
        <section id="about" className="section relative" style={{ position: 'relative', zIndex: 5 }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '2rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'inline-block' }}>
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))', margin: '0 auto', borderRadius: '2px' }}></div>
                </motion.div>

                <div className="grid grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="glass p-8" style={{ padding: '2.5rem', borderRadius: '24px', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '-10px', left: '-10px', width: '40px', height: '40px', borderTop: '3px solid var(--accent-primary)', borderLeft: '3px solid var(--accent-primary)', borderRadius: '8px 0 0 0' }}></div>
                            <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', width: '40px', height: '40px', borderBottom: '3px solid var(--accent-secondary)', borderRight: '3px solid var(--accent-secondary)', borderRadius: '0 0 8px 0' }}></div>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Turning Complex Tech Into Business Results</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                                With 17+ years spanning customer service excellence, technical administration, and strategic leadership, I specialize in directing complex IT operations and translating technical concepts into actionable business strategies that drive measurable ROI.
                            </p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                                As an IT & Innovation Manager, I oversee comprehensive technology strategies and currently manage enterprise Google Workspace environments for organizations including Firestarter Group and Polianna. My focus is on empowering teams, negotiating enterprise contracts to cut costs, and leading initiatives that directly translate to saved time and increased revenue.
                            </p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                                My core strengths include: <strong>Strategic Planning & Vision Formulation</strong>, <strong>Cross-Cultural Team Leadership</strong>, and <strong>Business Process Optimization</strong>.
                            </p>
                        </div>
                    </motion.div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                className="glass glow-hover"
                                style={{ display: 'flex', alignItems: 'center', padding: '1.5rem 2rem', borderRadius: '16px', gap: '1.5rem' }}
                            >
                                <div style={{ background: 'rgba(0, 240, 255, 0.1)', padding: '1rem', borderRadius: '12px', color: 'var(--accent-primary)' }}>
                                    {stat.icon}
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '2rem', fontWeight: 700, margin: 0, color: 'var(--text-main)' }}>{stat.value}</h4>
                                    <p style={{ color: 'var(--text-muted)', margin: 0, fontWeight: 500 }}>{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
