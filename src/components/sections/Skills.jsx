import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Network, Server, Wrench } from 'lucide-react';

const Skills = () => {
    const categories = [
        {
            title: "AI & Language Models",
            icon: <Bot size={24} />,
            color: "var(--accent-primary)",
            skills: ["Claude Pro (Anthropic)", "ChatGPT (OpenAI)", "Mistral AI", "Gemini AI", "Notebook LM", "Custom Prompt Engineering"]
        },
        {
            title: "Networking & Infrastructure",
            icon: <Network size={24} />,
            color: "var(--accent-secondary)",
            skills: ["Omada Network Systems", "Commercial WiFi Solutions", "Network Monetization", "System Optimization"]
        },
        {
            title: "Administration & Productivity",
            icon: <Server size={24} />,
            color: "#ff007f",
            skills: ["Google Workspace (Advanced Admin)", "Microsoft Office 2021", "Windows 11", "Project Management Tools"]
        },
        {
            title: "Automation & Integration",
            icon: <Wrench size={24} />,
            color: "#00ff88",
            skills: ["Zapier", "Custom Chatbot Development", "Google App Script", "Workflow Automation"]
        }
    ];

    return (
        <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Technical <span className="text-gradient">Arsenal</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Comprehensive expertise spanning artificial intelligence, modern network infrastructure, and enterprise automation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass glow-hover"
                            style={{ borderRadius: '20px', padding: '2rem', borderTop: `2px solid ${cat.color}` }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ background: `rgba(255,255,255,0.05)`, padding: '0.75rem', borderRadius: '12px', color: cat.color }}>
                                    {cat.icon}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{cat.title}</h3>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {cat.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        style={{
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '99px',
                                            fontSize: '0.9rem',
                                            color: 'var(--text-muted)',
                                            transition: 'all 0.3s'
                                        }}
                                        onMouseOver={(e) => {
                                            e.target.style.color = 'white';
                                            e.target.style.borderColor = cat.color;
                                            e.target.style.background = `color-mix(in srgb, ${cat.color} 10%, transparent)`;
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.color = 'var(--text-muted)';
                                            e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                                            e.target.style.background = 'rgba(255,255,255,0.03)';
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
