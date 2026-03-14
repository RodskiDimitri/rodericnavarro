import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData as testimonials } from '../../data/content';

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
                minWidth: '320px', // Prevents shrinking
                flex: '0 0 auto', // Allows scrolling
                scrollSnapAlign: 'start', // Snaps cleanly
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
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollability = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            // using a small buffer (2px) to account for sub-pixel rounding
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2); 
        }
    };

    useEffect(() => {
        checkScrollability();
        window.addEventListener('resize', checkScrollability);
        return () => window.removeEventListener('resize', checkScrollability);
    }, []);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 350; // Approximates one card width + gap
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

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
                {/* Header Row (Title on left, Arrows on right) */}
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
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            aria-label="Previous Testimonial"
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                width: '40px', height: '40px', borderRadius: '8px',
                                background: 'transparent',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: canScrollLeft ? 'var(--text-main)' : 'rgba(255,255,255,0.2)',
                                cursor: canScrollLeft ? 'pointer' : 'default',
                                transition: 'all 0.3s ease',
                                outline: 'none'
                            }}
                            onMouseEnter={(e) => canScrollLeft && (e.currentTarget.style.borderColor = 'var(--accent-primary)')}
                            onMouseLeave={(e) => canScrollLeft && (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            aria-label="Next Testimonial"
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                width: '40px', height: '40px', borderRadius: '8px',
                                background: 'transparent',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: canScrollRight ? 'var(--text-main)' : 'rgba(255,255,255,0.2)',
                                cursor: canScrollRight ? 'pointer' : 'default',
                                transition: 'all 0.3s ease',
                                outline: 'none'
                            }}
                            onMouseEnter={(e) => canScrollRight && (e.currentTarget.style.borderColor = 'var(--accent-secondary)')}
                            onMouseLeave={(e) => canScrollRight && (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Scrollable Container (no visible scrollbars) */}
                <div 
                    ref={scrollContainerRef}
                    onScroll={checkScrollability}
                    className="no-scrollbar"
                    style={{ 
                        display: 'flex',
                        gap: '2rem',
                        overflowX: 'auto',
                        scrollBehavior: 'smooth',
                        scrollSnapType: 'x mandatory',
                        paddingBottom: '1rem', // Space for shadows
                        paddingTop: '0.5rem',
                        alignItems: 'stretch'
                    }}
                >
                    {testimonials.map((testimonial, idx) => (
                        <TestimonialCard key={idx} {...testimonial} delay={idx * 0.15} />
                    ))}
                </div>
            </div>

            {/* Inject small style to hide scrollbar in all browsers */}
            <style>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
