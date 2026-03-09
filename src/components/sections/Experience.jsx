import React from 'react';
import { motion } from 'framer-motion';
import poliannaLogo from '../../assets/polianna-logo.jpg';
import firestartLogo from '../../assets/firestarter-logo.jpg';

const Experience = () => {
    const experiences = [
        {
            title: "AI Technology Consultant",
            company: "Self-Employed",
            period: "Dec 2024 - Present",
            description: "Strategic AI implementation consulting for SMEs. Custom prompt engineering and chatbot development resulting in significant process optimization.",
            highlights: [
                "Automated and eliminated repetitive workflows for SME clients",
                "Boosted client productivity by 35% within 30 days",
                "Cut customer service response times from 2 hours to 48 minutes"
            ]
        },
        {
            title: "IT & Innovation Manager",
            company: "Polianna, LLC",
            logo: poliannaLogo,
            period: "Jan 2020 - Jan 2024",
            description: "Led technology innovation, IT infrastructure management, and strategic planning. Progressed from System Adviser & Administrator to IT & Innovation Manager, driving transformation across the organization.",
            highlights: [
                "Delivered $20K+ annual cost savings via vendor negotiations",
                "Redesigned infrastructure cutting monthly downtime from 8% to <2%",
                "Increased operational efficiency across 4 departments by 30%",
                "Maintained 99.8% uptime with zero security breaches over 3 years",
                "Reduced security incidents by 85% with new IAM deployments"
            ]
        },
        {
            title: "IT Administrator",
            company: "Firestarter Group",
            logo: firestartLogo,
            period: "Mar 2016 - Dec 2019",
            description: "Administered complete IT infrastructure including system maintenance, optimization protocols, and end-to-end technical support.",
            highlights: [
                "Managed full IT infrastructure for the organization",
                "Implemented system maintenance and optimization protocols",
                "Provided comprehensive technical support and troubleshooting"
            ]
        }
    ];

    return (
        <section id="experience" style={{ position: 'relative' }}>
            <div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '2rem' }}
                >
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                        Professional <span className="text-gradient">Journey</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto', fontSize: '0.9rem' }}>
                        Driving innovation and delivering quantifiable business impact.
                    </p>
                </motion.div>

                <div style={{ maxWidth: '100%', position: 'relative', paddingLeft: '40px' }}>
                    {/* Vertical Connecting Line */}
                    <div style={{ position: 'absolute', left: '19px', top: '24px', bottom: '0', width: '2px', background: 'linear-gradient(to bottom, var(--accent-primary), transparent)' }}></div>

                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            style={{ position: 'relative', display: 'flex', gap: '1rem', marginBottom: '2rem' }}
                        >
                            {/* Timeline dot */}
                            <div style={{ position: 'absolute', left: '-40px', width: '30px', display: 'flex', justifyContent: 'center' }}>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 + 0.3 }}
                                    style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'var(--accent-primary)', border: '4px solid var(--bg-main)', position: 'relative', zIndex: 2, marginTop: '24px', boxShadow: '0 0 10px var(--accent-glow)' }}
                                />
                            </div>

                            {/* Content Card */}
                            <div className="glass glow-hover" style={{ flex: 1, padding: '1.25rem', borderRadius: '12px', position: 'relative', overflow: 'hidden' }}>
                                {/* Decorative Gradient Blob */}
                                <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'var(--accent-primary)', opacity: 0.05, filter: 'blur(40px)', borderRadius: '50%' }}></div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        {exp.logo && (
                                            <img
                                                src={exp.logo}
                                                alt={`${exp.company} logo`}
                                                loading="lazy"
                                                style={{
                                                    width: '48px',
                                                    height: '48px',
                                                    objectFit: 'contain',
                                                    borderRadius: '8px',
                                                    background: 'rgba(255,255,255,0.08)',
                                                    padding: '4px',
                                                    flexShrink: 0
                                                }}
                                            />
                                        )}
                                        <div>
                                            <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', margin: 0 }}>{exp.title}</h3>
                                            <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-secondary)', margin: 0, fontWeight: 500 }}>{exp.company}</h4>
                                        </div>
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

                                <p style={{ color: 'var(--text-muted)', marginBottom: '0.75rem', lineHeight: 1.5, fontSize: '0.85rem' }}>{exp.description}</p>

                                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                                    {exp.highlights.map((highlight, hIdx) => (
                                        <li key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                                            <span style={{ color: 'var(--accent-primary)', marginTop: '3px', fontSize: '0.8rem' }}>▹</span>
                                            <span style={{ fontSize: '0.82rem', lineHeight: 1.4 }}>{highlight}</span>
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
