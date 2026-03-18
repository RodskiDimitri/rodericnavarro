import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData as testimonials } from '../../data/content';

// Variants for the entering/exiting card only
const cardVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 80 : -80,
        opacity: 0,
        scale: 0.95
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1
    },
    exit: (direction) => ({
        x: direction > 0 ? -80 : 80,
        opacity: 0,
        scale: 0.95
    })
};

const TestimonialCard = ({ quote, name, role, industry, accentColor, image }) => {
    return (
        <div
            className="glass glow-hover"
            style={{
                width: '100%',
                flex: 1,
                padding: '3rem 1.5rem 2rem 1.5rem', // More top padding for the floating avatar
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                position: 'relative',
                marginTop: '40px' // Space for the overlapping avatar
            }}
        >
            {/* Floating Avatar */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10
            }}>
                <div style={{
                    width: '72px', // Slightly larger for the floating effect
                    height: '72px',
                    borderRadius: '50%',
                    background: image ? 'var(--bg-secondary)' : `color-mix(in srgb, ${accentColor} 20%, transparent)`,
                    border: `3px solid ${accentColor}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: accentColor,
                    fontFamily: 'var(--font-heading)',
                    overflow: 'hidden',
                    boxShadow: `0 10px 25px rgba(0,0,0,0.5), 0 0 15px color-mix(in srgb, ${accentColor} 30%, transparent)`
                }}>
                    {image ? (
                        <img 
                            src={image} 
                            alt={name} 
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover' 
                            }} 
                        />
                    ) : (
                        name.split(' ').map(n => n[0]).join('')
                    )}
                </div>
            </div>

            {/* Quote text */}
            <p style={{
                color: 'var(--text-main)',
                fontSize: '0.95rem',
                lineHeight: 1.6,
                fontStyle: 'italic',
                flex: 1,
                position: 'relative',
                zIndex: 2,
                textAlign: 'center' // Centered text matches the floating avatar style
            }}>
                "{quote}"
            </p>

            {/* Author */}
            <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '1rem',
                borderTop: '1px solid var(--glass-border)',
                paddingTop: '1.5rem',
                marginTop: 'auto',
                minHeight: '110px'
            }}>
                <div style={{ minWidth: 0 }}>
                    <p style={{
                        color: 'var(--text-main)',
                        fontWeight: 700,
                        margin: '0 0 4px 0',
                        fontSize: '1rem'
                    }}>
                        {name}
                    </p>
                    <p style={{
                        color: 'var(--text-muted)',
                        margin: 0,
                        fontSize: '0.8rem',
                        lineHeight: 1.4
                    }}>
                        {role}
                        <span style={{ display: 'block', opacity: 0.7, fontSize: '0.75rem', marginTop: '2px' }}>
                            {industry}
                        </span>
                    </p>
                </div>

                {/* Quote icon at bottom right */}
                <div style={{
                    color: accentColor,
                    opacity: 0.2,
                    flexShrink: 0,
                    marginTop: '4px'
                }}>
                    <Quote size={28} />
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [visibleCount, setVisibleCount] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleCount(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCount(2);
            } else {
                setVisibleCount(3);
            }
        };

        // Initialize and add listener
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const handlePrev = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    // Get visible testimonials with infinite wrap-around
    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < visibleCount; i++) {
            const index = (currentIndex + i) % testimonials.length;
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

                {/* Slider: one card enters/exits at a time, others reposition */}
                <div style={{ overflow: 'hidden', padding: '1rem 0', position: 'relative' }}>
                    <LayoutGroup>
                        <div style={{
                            display: 'flex',
                            gap: '2rem',
                            alignItems: 'stretch',
                            width: '100%'
                        }}>
                            <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                                {visibleItems.map((testimonial) => {
                                    const gapTotal = 2 * (visibleCount - 1);
                                    const flexBasis = visibleCount > 1
                                        ? `calc(${100 / visibleCount}% - ${gapTotal / visibleCount}rem)`
                                        : '100%';

                                    return (
                                        <motion.div
                                            key={testimonial.originalIndex}
                                            layout
                                            custom={direction}
                                            variants={cardVariants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{
                                                layout: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
                                                opacity: { duration: 0.3 },
                                                x: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
                                                scale: { duration: 0.3 }
                                            }}
                                            style={{
                                                flex: `0 0 ${flexBasis}`,
                                                minWidth: 0,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'stretch' // Ensure the TestimonialCard stretches to full height
                                            }}
                                        >
                                            <TestimonialCard {...testimonial} />
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>
                    </LayoutGroup>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

