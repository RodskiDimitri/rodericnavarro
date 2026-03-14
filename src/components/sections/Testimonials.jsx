import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData as testimonials } from '../../data/content';

const TestimonialCard = ({ quote, name, role, industry, rating, accentColor }) => {
    return (
        <motion.div
            layout // Enable smooth position changes
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="glass glow-hover"
            style={{
                width: '100%',
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
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    // Get 3 visible testimonials with infinite wrap-around
    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % testimonials.length;
            // Use originalIndex as key to let Framer Motion track the same element moving
            visible.push({ ...testimonials[index], originalIndex: index });
        }
        return visible;
    };

    const visibleItems = getVisibleTestimonials();

    return (
        <section id="testimonials" style={{
            position: 'relative',
            overflow: 'hidden',
            padding: '2rem 0'
        }}>
            {/* Decorative elements */}
            <div style={{ position: 'absolute', top: '20%', right: '5%', width: '300px', height: '300px', background: 'var(--accent-secondary)', filter: 'blur(150px)', opacity: 0.08, borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', bottom: '20%', left: '5%', width: '250px', height: '250px', background: 'var(--accent-primary)', filter: 'blur(120px)', opacity: 0.08, borderRadius: '50%' }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                {/* Header Row */}
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-end',
                    marginBottom: '2rem'
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', display: 'inline-block' }}>
                            <span className="text-gradient">Testimonials</span>
                        </h2>
                        <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))', borderRadius: '2px' }}></div>
                    </motion.div>

                    {/* Navigation Arrows */}
                    <div style={{ display: 'flex', gap: '0.75rem', paddingBottom: '0.5rem' }}>
                        <button 
                            onClick={handlePrev}
                            aria-label="Previous Testimonial"
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                width: '40px', height: '40px', borderRadius: '8px',
                                background: 'transparent',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: 'var(--text-main)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                outline: 'none'
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-primary)')}
                            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button 
                            onClick={handleNext}
                            aria-label="Next Testimonial"
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                width: '40px', height: '40px', borderRadius: '8px',
                                background: 'transparent',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: 'var(--text-main)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                outline: 'none'
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-secondary)')}
                            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Grid layout with Framer Motion layout animations */}
                <div style={{ overflow: 'hidden', padding: '1rem 0' }}>
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(3, 1fr)', 
                        gap: '2rem',
                        alignItems: 'stretch'
                    }}>
                        <AnimatePresence mode="popLayout" initial={false}>
                            {visibleItems.map((testimonial) => (
                                <TestimonialCard 
                                    key={testimonial.originalIndex} 
                                    {...testimonial} 
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
