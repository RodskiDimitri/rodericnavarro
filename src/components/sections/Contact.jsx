import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { siteConfig } from '../../data/config';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const formRef = useRef(null);

    const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(false);

        emailjs.sendForm(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            formRef.current,
            EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setIsSubmitting(false);
                setSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setSubmitted(false), 5000);
            })
            .catch(() => {
                setIsSubmitting(false);
                setError(true);
                setTimeout(() => setError(false), 5000);
            });
    };

    const contactInfo = [
        { icon: <Mail size={24} />, title: "Email", value: siteConfig.personal.email, href: `mailto:${siteConfig.personal.email}` },
        { icon: <Phone size={24} />, title: "Phone", value: siteConfig.personal.phone, href: `tel:${siteConfig.personal.phone.replace(/[^0-9+]/g, '')}` },
        { icon: <MapPin size={24} />, title: "Location", value: siteConfig.personal.shortLocation, href: null }
    ];

    return (
        <section id="contact" className="section" style={{ position: 'relative' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Let's <span className="text-gradient">Connect</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Ready to optimize your operations or integrate AI into your business? Let's discuss how we can work together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 gap-8">
                    {/* Left Column: Contact Information Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                    >
                        {contactInfo.map((info, idx) => (
                            <div key={idx} className="glass glow-hover" style={{
                                padding: '2rem',
                                borderRadius: '16px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                border: '1px solid var(--glass-border)',
                                background: 'rgba(255, 255, 255, 0.02)'
                            }}>
                                <div style={{
                                    color: 'var(--accent-primary)',
                                    marginBottom: '1rem',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    {info.icon}
                                </div>
                                {info.href ? (
                                    <a href={info.href} style={{
                                        color: 'var(--text-main)',
                                        fontWeight: 600,
                                        fontSize: '1.1rem',
                                        transition: 'color 0.2s',
                                        textDecoration: 'none'
                                    }} onMouseOver={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-main)'}>
                                        {info.value}
                                    </a>
                                ) : (
                                    <p style={{ color: 'var(--text-main)', fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>{info.value}</p>
                                )}
                            </div>
                        ))}
                    </motion.div>

                    {/* Right Column: Google Map + Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                    >
                        {/* Map Area */}
                        <div style={{
                            borderRadius: '16px',
                            overflow: 'hidden',
                            border: '1px solid var(--glass-border)',
                            height: '220px',
                            width: '100%'
                        }}>
                            <iframe
                                title="Location Map - Parañaque City, Metro Manila"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61784.89!2d120.97!3d14.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cf03e564f455%3A0x35e4b7e19eb2544f!2sPara%C3%B1aque%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1709344800000!5m2!1sen!2sph"
                                width="100%"
                                height="100%"
                                style={{
                                    border: 'none',
                                    filter: 'grayscale(30%) brightness(0.8) contrast(1.1)',
                                    transition: 'filter 0.4s ease',
                                }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                onMouseOver={(e) => e.target.style.filter = 'grayscale(0%) brightness(0.9) contrast(1.05)'}
                                onMouseOut={(e) => e.target.style.filter = 'grayscale(30%) brightness(0.8) contrast(1.1)'}
                            ></iframe>
                        </div>

                        {/* Form Area */}
                        <div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-main)', textAlign: 'left' }}>
                                How Can I <span className="text-gradient">Help You?</span>
                            </h3>

                            <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <input
                                        type="text"
                                        id="name"
                                        name="user_name"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'var(--text-main)', outline: 'none', transition: 'border-color 0.3s' }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                                        onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                                    />
                                    <input
                                        type="email"
                                        id="email"
                                        name="user_email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'var(--text-main)', outline: 'none', transition: 'border-color 0.3s' }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                                        onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                                    />
                                </div>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'var(--text-main)', outline: 'none', transition: 'border-color 0.3s', resize: 'vertical' }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                                ></textarea>

                                {error && (
                                    <p style={{ color: '#ff4444', fontSize: '0.9rem', margin: 0, padding: '0.75rem 1rem', background: 'rgba(255,68,68,0.1)', borderRadius: '12px', borderLeft: '3px solid #ff4444' }}>
                                        Something went wrong. Please try emailing directly at {siteConfig.personal.email}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting || submitted}
                                    className="btn btn-primary"
                                    style={{ width: '100%', padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                                >
                                    {isSubmitting ? 'Sending...' : submitted ? '✓ Message Sent!' : error ? 'Try Again' : (
                                        <>Send Message <Send size={18} /></>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

