import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Landmark, Rocket } from 'lucide-react';

const TargetMarkets = () => {
    const markets = [
        {
            title: "SMEs",
            icon: <Building2 size={32} />,
            desc: "Technology adoption consulting, specific process optimization, and seamless AI integration to eliminate repetitive workflows and maximize revenue.",
            example: "",
            color: "var(--accent-primary)"
        },
        {
            title: "Startups",
            icon: <Rocket size={32} />,
            desc: "Robust infrastructure setup, scalable growth-oriented AI solutions, and strategic technology planning for rapid acceleration.",
            example: "",
            color: "var(--accent-secondary)"
        },
        {
            title: "Government Agencies",
            icon: <Landmark size={32} />,
            desc: "Compliance-focused modernization and process consulting, ensuring secure and highly reliable system architectures.",
            example: "",
            color: "#00ff88"
        }
    ];

    return (
        <section id="markets" style={{ position: 'relative', overflow: 'hidden', padding: '2rem 0' }}>

            {/* Background elements */}
            <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(112,0,255,0.1) 0%, rgba(0,0,0,0) 70%)', transform: 'translate(30%, -30%)' }}></div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,240,255,0.1) 0%, rgba(0,0,0,0) 70%)', transform: 'translate(-30%, 30%)' }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '2rem' }}
                >
                    <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                        Who I <span className="text-gradient">Help</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '0.9rem' }}>
                        Empowering diverse organizations through tailored strategies that translate complex technology into actionable business value.
                    </p>
                </motion.div>

                <div className="grid grid-cols-3 gap-8">
                    {markets.map((market, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className="glass glow-hover"
                            style={{
                                padding: '2rem 1.5rem',
                                borderRadius: '16px',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                boxShadow: `0 10px 40px rgba(0,0,0,0.2)`
                            }}
                        >
                            <div style={{
                                width: '80px', height: '80px', borderRadius: '50%',
                                background: `color-mix(in srgb, ${market.color} 15%, transparent)`,
                                color: market.color,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '1.5rem',
                                border: `1px solid color-mix(in srgb, ${market.color} 30%, transparent)`
                            }}>
                                {market.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{market.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem', marginBottom: '1rem' }}>{market.desc}</p>
                            {market.example && (
                                <p style={{
                                    color: market.color,
                                    fontSize: '0.85rem',
                                    fontWeight: 500,
                                    fontStyle: 'italic',
                                    margin: 0,
                                    padding: '0.75rem 1rem',
                                    background: `color-mix(in srgb, ${market.color} 8%, transparent)`,
                                    borderRadius: '12px',
                                    borderLeft: `3px solid ${market.color}`
                                }}>
                                    {market.example}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TargetMarkets;
