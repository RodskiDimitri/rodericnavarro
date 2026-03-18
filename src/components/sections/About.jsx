import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Server, Settings, Brain } from 'lucide-react';
import { aboutStats as stats } from '../../data/content';
import Testimonials from './Testimonials';

const About = () => {
    const services = [
        {
            icon: <Settings size={28} />,
            title: 'Business Process Optimization',
            description: 'I streamline operations and automate workflows to eliminate manual friction, reduce costs, and improve overall team efficiency.',
            color: 'var(--accent-primary)'
        },
        {
            icon: <Zap size={28} />,
            title: 'IT Strategy & Leadership',
            description: 'I align complex technological infrastructures with overarching business goals, ensuring IT acts as a catalyst for growth rather than a cost center.',
            color: 'var(--accent-secondary)'
        },
        {
            icon: <Brain size={28} />,
            title: 'AI Technology Consulting',
            description: 'I implement strategic, pragmatic artificial intelligence solutions tailored to drive measurable ROI and modernize legacy business practices.',
            color: '#a855f7' // A distinct tertiary brand color
        },
        {
            icon: <Server size={28} />,
            title: 'Systems & Infrastructure',
            description: 'With extensive hands-on experience in enterprise environments, I oversee secure, scalable administration of core platforms like Google Workspace.',
            color: '#10b981' // A distinct quaternary brand color
        }
    ];

    return (
        <section id="about" className="section relative" style={{ position: 'relative', zIndex: 5, overflow: 'hidden' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                
                {/* 1. Bio Section */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'left', marginBottom: '3rem' }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'inline-block' }}>
                            About <span className="text-gradient">Me</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass p-responsive"
                        style={{ borderRadius: '24px', position: 'relative', maxWidth: '900px', margin: '0 auto' }}
                    >
                        <div className="hidden-mobile" style={{ position: 'absolute', top: '-10px', left: '-10px', width: '40px', height: '40px', borderTop: '3px solid var(--accent-primary)', borderLeft: '3px solid var(--accent-primary)', borderRadius: '8px 0 0 0' }}></div>
                        <div className="hidden-mobile" style={{ position: 'absolute', bottom: '-10px', right: '-10px', width: '40px', height: '40px', borderBottom: '3px solid var(--accent-secondary)', borderRight: '3px solid var(--accent-secondary)', borderRadius: '0 0 8px 0' }}></div>

                        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-main)', fontWeight: 600 }}>
                            Hi, I'm Roderic — an IT leader focused on turning complex tech into business results.
                        </h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                            My journey in technology began over 17 years ago. From my early days navigating customer service excellence and technical administration, I quickly discovered that my true passion lies not just in maintaining systems, but in leveraging them to solve fundamental business challenges.
                        </p>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                            Throughout my career as an IT & Innovation Manager, I have overseen comprehensive technology strategies and managed complex, enterprise-level environments for companies across the globe. By focusing on cross-cultural team empowerment and negotiating strategic enterprise contracts, I've consistently led initiatives that directly translate to saved time and increased revenue.
                        </p>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                            Today, I specialize in directing complex IT operations and translating highly technical concepts into actionable strategies. Whether it's optimizing a core business process or implementing cutting-edge AI workflows, I bring a practical, performance-focused approach to every project I touch.
                        </p>
                    </motion.div>
                </div>

                {/* 2. The Authority Strip (Stats) */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', 
                    gap: '1.5rem', 
                    maxWidth: '1000px', 
                    margin: '0 auto',
                    width: '100%'
                }}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
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

                {/* 3. What I Do Grid */}
                <div>
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'left', marginBottom: '3rem' }}
                    >
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', display: 'inline-block' }}>
                            What <span className="text-gradient">I Do</span>
                        </h2>
                    </motion.div>

                    <div 
                        className="grid grid-cols-2 gap-8" 
                        style={{ 
                            maxWidth: '1000px', 
                            margin: '0 auto' 
                        }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass glow-hover"
                                style={{ 
                                    padding: '2rem', 
                                    borderRadius: '16px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Top color accent bar */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '3px',
                                    background: service.color
                                }} />
                                
                                <div style={{ color: service.color }}>
                                    {service.icon}
                                </div>
                                
                                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: 'var(--text-main)' }}>
                                    {service.title}
                                </h4>
                                
                                <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: 1.6, fontSize: '0.95rem' }}>
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 4. Testimonials */}
                <div style={{ margin: '1rem 0' }}>
                    <Testimonials />
                </div>

            </div>
        </section>
    );
};

export default About;
