import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, DollarSign, Clock, Shield } from 'lucide-react';

const useCountUp = (end, duration = 2000, startCounting = false) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);

    useEffect(() => {
        if (!startCounting) return;

        let startTime = null;
        const numericEnd = parseFloat(end.toString().replace(/[^0-9.]/g, ''));

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * numericEnd));

            if (progress < 1) {
                countRef.current = requestAnimationFrame(animate);
            }
        };

        countRef.current = requestAnimationFrame(animate);
        return () => {
            if (countRef.current) cancelAnimationFrame(countRef.current);
        };
    }, [end, duration, startCounting]);

    return count;
};

const StatCard = ({ icon, value, suffix, prefix, label, delay, color, description }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    const numericValue = parseFloat(value.toString().replace(/[^0-9.]/g, ''));
    const count = useCountUp(numericValue, 2000, isVisible);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="glass glow-hover"
            style={{
                padding: '2.5rem 2rem',
                borderRadius: '24px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Accent glow behind the number */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120px',
                height: '120px',
                background: color,
                filter: 'blur(80px)',
                opacity: 0.15,
                borderRadius: '50%'
            }}></div>

            <div style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
            }}>
                <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: `color-mix(in srgb, ${color} 15%, transparent)`,
                    border: `1px solid color-mix(in srgb, ${color} 25%, transparent)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: color
                }}>
                    {icon}
                </div>

                <div style={{
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    fontWeight: 700,
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    color: 'var(--text-main)'
                }}>
                    {prefix}{count}{suffix}
                </div>

                <p style={{
                    color: 'var(--text-main)',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    margin: 0,
                    lineHeight: 1.4
                }}>
                    {label}
                </p>
                {description && (
                    <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.9rem',
                        fontWeight: 400,
                        margin: 0,
                        lineHeight: 1.5,
                        opacity: 0.9,
                        marginTop: '-0.5rem'
                    }}>
                        {description}
                    </p>
                )}
            </div>
        </motion.div>
    );
};

const ResultsAtGlance = () => {
    const stats = [
        {
            icon: <Zap size={26} />,
            value: 15,
            suffix: '+',
            prefix: '',
            label: 'Hours Saved Weekly per Client',
            description: 'Directed the implementation of AI solutions for SME clients, fully automating manual workflows and eliminating repetitive tasks.',
            color: 'var(--accent-primary)'
        },
        {
            icon: <TrendingUp size={26} />,
            value: 35,
            suffix: '%',
            prefix: '',
            label: 'Client Productivity Boost',
            description: 'Achieved in just 30 days by leading the integration of efficiency strategies and driving team adoption of new tools.',
            color: 'var(--accent-secondary)'
        },
        {
            icon: <DollarSign size={26} />,
            value: 50,
            suffix: 'K+',
            prefix: '$',
            label: 'Annual Savings Generated',
            description: 'Delivered bottom-line impact through strategic vendor negotiations, contract management, and process optimization.',
            color: '#00ff88'
        },
        {
            icon: <Shield size={26} />,
            value: 85,
            suffix: '%',
            prefix: '',
            label: 'Drop in Security Incidents',
            description: 'Managed the rollout of comprehensive identity management systems and security protocols across 100+ user environments.',
            color: '#ff007f'
        }
    ];

    return (
        <section id="results" className="section" style={{
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-secondary)'
        }}>
            {/* Decorative background */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(0,240,255,0.06) 0%, rgba(112,0,255,0.04) 40%, transparent 70%)',
                borderRadius: '50%'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Results at a <span className="text-gradient">Glance</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Real impact delivered to real businesses — measured, tracked, and verified.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '1.5rem'
                }}>
                    {stats.map((stat, idx) => (
                        <StatCard key={idx} {...stat} delay={idx * 0.1} />
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    #results .container > div:last-child {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 600px) {
                    #results .container > div:last-child {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default ResultsAtGlance;
