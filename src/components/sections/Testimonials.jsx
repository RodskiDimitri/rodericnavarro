import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ quote, name, role, industry, rating, delay, accentColor }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="glass glow-hover"
            style={{
                padding: '1.5rem 1.25rem',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                position: 'relative',
                overflow: 'hidden',
                height: '100%'
            }}
        >
            {/* Quote icon */}
            <div style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                color: accentColor,
                opacity: 0.15
            }}>
                <Quote size={48} />
            </div>

            {/* Star rating */}
            <div style={{ display: 'flex', gap: '4px' }}>
                {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} size={18} fill={accentColor} color={accentColor} />
                ))}
            </div>

            {/* Quote text */}
            <p style={{
                color: 'var(--text-main)',
                fontSize: '0.9rem',
                lineHeight: 1.5,
                fontStyle: 'italic',
                flex: 1,
                position: 'relative',
                zIndex: 2
            }}>
                "{quote}"
            </p>

            {/* Author */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                borderTop: '1px solid var(--glass-border)',
                paddingTop: '1.5rem'
            }}>
                <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: `color-mix(in srgb, ${accentColor} 20%, transparent)`,
                    border: `2px solid color-mix(in srgb, ${accentColor} 40%, transparent)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: accentColor,
                    fontFamily: 'var(--font-heading)'
                }}>
                    {name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                    <p style={{
                        color: 'var(--text-main)',
                        fontWeight: 600,
                        margin: 0,
                        fontSize: '0.95rem'
                    }}>
                        {name}
                    </p>
                    <p style={{
                        color: 'var(--text-muted)',
                        margin: 0,
                        fontSize: '0.85rem'
                    }}>
                        {role} · {industry}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Roderic cut our customer service response time by over 60% in the first month. We didn't think that kind of improvement was possible without hiring more staff.",
            name: "J. Reyes",
            role: "Operations Director",
            industry: "Healthcare SME",
            rating: 5,
            accentColor: "var(--accent-primary)"
        },
        {
            quote: "His approach to AI integration was practical, not theoretical. Within two weeks, he automated workflows that used to take my team hours every day.",
            name: "M. Santos",
            role: "CEO",
            industry: "E-Commerce Startup",
            rating: 5,
            accentColor: "var(--accent-secondary)"
        },
        {
            quote: "What impressed me most was how he explained complex technology in terms our entire leadership team could understand. The ROI was clear from day one.",
            name: "A. Torres",
            role: "Managing Partner",
            industry: "Professional Services",
            rating: 5,
            accentColor: "#00ff88"
        }
    ];

    return (
        <section id="testimonials" style={{
            position: 'relative',
            overflow: 'hidden',
            padding: '2rem 0'
        }}>
            {/* Decorative elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '5%',
                width: '300px',
                height: '300px',
                background: 'var(--accent-secondary)',
                filter: 'blur(150px)',
                opacity: 0.08,
                borderRadius: '50%'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '20%',
                left: '5%',
                width: '250px',
                height: '250px',
                background: 'var(--accent-primary)',
                filter: 'blur(120px)',
                opacity: 0.08,
                borderRadius: '50%'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '2rem' }}
                >
                    <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                        What Clients <span className="text-gradient">Say</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '0.9rem' }}>
                        Real feedback from business leaders who experienced measurable transformation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-3 gap-8" style={{ alignItems: 'stretch' }}>
                    {testimonials.map((testimonial, idx) => (
                        <TestimonialCard key={idx} {...testimonial} delay={idx * 0.15} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
