import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            title: "AI Technology Consultant",
            company: "Self-Employed",
            period: "Dec 2024 - Present",
            description: "Strategic AI implementation consulting for SMEs. Custom prompt engineering and chatbot development resulting in significant process optimization.",
            highlights: [
                "Eliminated 40% of repetitive workflows for 5 SME clients",
                "Boosted client productivity by 35% within 30 days",
                "Cut customer service response times from 2 hours to 48 minutes"
            ]
        },

        {
            title: "IT & Innovation Manager",
            company: "Polianna, LLC",
            period: "May 2023 - Jan 2024",
            description: "Led technology innovation initiatives and managed comprehensive IT infrastructure and strategic planning.",
            highlights: [
                "Delivered $20K+ annual cost savings via vendor negotiations",
                "Redesigned infrastructure cutting monthly downtime from 8% to <2%",
                "Increased operational efficiency across 4 departments by 30%"
            ]
        },
        {
            title: "System Adviser & Administrator",
            company: "Polianna, LLC",
            period: "Jan 2020 - May 2023",
            description: "Spearheaded Google Workspace administration, password identity management, and email security protocols.",
            highlights: [
                "Maintained 99.8% uptime with zero security breaches over 3 years",
                "Reduced security incidents by 85% with new IAM deployments",
                "Supported 200% company growth by scaling technology systems"
            ]
        }
    ];

    return (
        <section id="experience" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Professional <span className="text-gradient">Journey</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        A track record of driving innovation, optimizing operations, and delivering quantifiable business impact.
                    </p>
                </motion.div>

                <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
                    {/* Vertical Line */}
                    <div style={{ position: 'absolute', left: '24px', top: '0', bottom: '0', width: '2px', background: 'var(--glass-border)' }}></div>

                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            style={{ position: 'relative', display: 'flex', gap: '2rem', marginBottom: '3rem' }}
                        >
                            {/* Timeline dot */}
                            <div style={{ width: '50px', flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
                                <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'var(--bg-main)', border: '4px solid var(--accent-primary)', position: 'relative', zIndex: 2, marginTop: '8px' }}></div>
                            </div>

                            {/* Content Card */}
                            <div className="glass glow-hover" style={{ flex: 1, padding: '2rem', borderRadius: '16px', position: 'relative' }}>
                                {/* Connecting Line */}
                                <div style={{ position: 'absolute', top: '24px', left: '-20px', width: '20px', height: '2px', background: 'var(--glass-border)' }}></div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', margin: 0 }}>{exp.title}</h3>
                                        <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-secondary)', margin: 0, fontWeight: 500 }}>{exp.company}</h4>
                                    </div>
                                    <span style={{
                                        padding: '0.4rem 1rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        borderRadius: '99px',
                                        fontSize: '0.9rem',
                                        color: 'var(--text-muted)',
                                        whiteSpace: 'nowrap'
                                    }}>
                                        {exp.period}
                                    </span>
                                </div>

                                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>{exp.description}</p>

                                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                                    {exp.highlights.map((highlight, hIdx) => (
                                        <li key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                                            <span style={{ color: 'var(--accent-primary)', marginTop: '4px' }}>▹</span>
                                            <span style={{ fontSize: '0.95rem', lineHeight: 1.5 }}>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
