import React from 'react';
import { motion } from 'framer-motion';
import {
    Bot, Network, Server, Wrench,
    Terminal, Wifi, Shield, HardDrive,
    CheckSquare, MessageCircle, Settings,
    Cloud, FileText, Monitor, Zap, Code,
    Brain, MessageSquare, Wind, Sparkles, BookOpen
} from 'lucide-react';

// Reusable component to fetch actual brand logos from the SimpleIcons CDN
const BrandIcon = ({ name, color, Fallback }) => {
    const [error, setError] = React.useState(false);
    const hexColor = color.replace('#', '');

    if (error) {
        return <Fallback size={16} color={color} />;
    }

    return (
        <img
            src={`https://cdn.simpleicons.org/${name}/${hexColor}`}
            alt={`${name} icon`}
            style={{ width: '16px', height: '16px', objectFit: 'contain' }}
            onError={() => setError(true)}
        />
    );
};

const Skills = () => {
    const categories = [
        {
            title: "AI & Language Models",
            icon: <Bot size={28} />,
            color: "#3b82f6",
            bgColor: "rgba(59, 130, 246, 0.1)",
            skills: [
                { name: "Claude Pro", icon: <BrandIcon name="anthropic" color="#D97757" Fallback={Brain} />, brandColor: "#D97757" },
                { name: "ChatGPT", icon: <MessageSquare size={16} color="#10A37F" />, brandColor: "#10A37F" },
                { name: "Mistral AI", icon: <BrandIcon name="mistralai" color="#F26522" Fallback={Wind} />, brandColor: "#F26522" },
                { name: "Gemini AI", icon: <BrandIcon name="googlegemini" color="#8E75B2" Fallback={Sparkles} />, brandColor: "#8E75B2" },
                { name: "Notebook LM", icon: <BrandIcon name="google" color="#4285F4" Fallback={BookOpen} />, brandColor: "#4285F4" },
                { name: "Antigravity IDE", icon: <img src="https://antigravity.google/assets/image/antigravity-logo.png" alt="Antigravity IDE" style={{ width: '16px', height: '16px', objectFit: 'contain' }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />, brandColor: "#4A90D9" },
                { name: "Prompt Eng.", icon: <Terminal size={16} color="#A855F7" />, brandColor: "#A855F7" }
            ]
        },
        {
            title: "Networking & Infrastructure",
            icon: <Network size={28} />,
            color: "#8b5cf6",
            bgColor: "rgba(139, 92, 246, 0.1)",
            skills: [
                { name: "Omada Systems", icon: <BrandIcon name="tplink" color="#46B2C8" Fallback={Wifi} />, brandColor: "#46B2C8" },
                { name: "Commercial WiFi", icon: <Wifi size={16} color="#38BDF8" />, brandColor: "#38BDF8" },
                { name: "Net Monetization", icon: <Shield size={16} color="#22C55E" />, brandColor: "#22C55E" },
                { name: "System Optimization", icon: <HardDrive size={16} color="#F43F5E" />, brandColor: "#F43F5E" }
            ]
        },
        {
            title: "Admin & Productivity",
            icon: <Server size={28} />,
            color: "#ec4899",
            bgColor: "rgba(236, 72, 153, 0.1)",
            skills: [
                { name: "Google Workspace", icon: <BrandIcon name="google" color="#4285F4" Fallback={Cloud} />, brandColor: "#4285F4" },
                { name: "MS Office 2021", icon: <FileText size={16} color="#D83B01" />, brandColor: "#D83B01" },
                { name: "Windows 11", icon: <Monitor size={16} color="#0078D4" />, brandColor: "#0078D4" },
                { name: "Project Mgmt", icon: <CheckSquare size={16} color="#EAB308" />, brandColor: "#EAB308" }
            ]
        },
        {
            title: "Automation & Integration",
            icon: <Wrench size={28} />,
            color: "#10b981",
            bgColor: "rgba(16, 185, 129, 0.1)",
            skills: [
                { name: "Zapier", icon: <BrandIcon name="zapier" color="#FF4A00" Fallback={Zap} />, brandColor: "#FF4A00" },
                { name: "Custom Chatbots", icon: <MessageCircle size={16} color="#06B6D4" />, brandColor: "#06B6D4" },
                { name: "App Script", icon: <BrandIcon name="googleappsscript" color="#4285F4" Fallback={Code} />, brandColor: "#4285F4" },
                { name: "Workflows", icon: <Settings size={16} color="#94A3B8" />, brandColor: "#94A3B8" }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 12 } }
    };

    // --- Inline Styles ---
    const styles = {
        section: {
            position: 'relative',
            zIndex: 5,
        },
        header: {
            textAlign: 'center',
            marginBottom: '4rem',
        },
        heading: {
            fontSize: '2.5rem',
            marginBottom: '1rem',
            display: 'inline-block',
        },
        subtitle: {
            color: 'var(--text-muted)',
            maxWidth: '640px',
            margin: '0 auto',
            fontSize: '1.1rem',
            lineHeight: 1.7,
        },
        divider: {
            width: '60px',
            height: '4px',
            background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
            margin: '0 auto',
            borderRadius: '2px',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
        },
        card: {
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '24px',
            padding: '2.5rem',
        },
        cardAccent: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
        },
        cardHeader: {
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.5rem',
        },
        iconBox: {
            padding: '0.75rem',
            borderRadius: '12px',
            transition: 'transform 0.3s ease',
        },
        cardTitle: {
            fontSize: '1.4rem',
            fontWeight: 600,
            color: 'var(--text-main)',
            margin: 0,
        },
        skillsWrap: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
        },
        badge: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            background: 'rgba(255, 255, 255, 0.03)',
            color: 'var(--text-muted)',
            fontSize: '0.85rem',
            fontWeight: 500,
            cursor: 'default',
            transition: 'all 0.3s ease',
        },
    };

    return (
        <section id="skills" className="section" style={styles.section}>
            <div className="container">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    style={styles.header}
                >
                    <h2 style={styles.heading}>
                        Technical <span className="text-gradient">Arsenal</span>
                    </h2>
                    <div style={styles.divider}></div>
                    <p style={styles.subtitle}>
                        Comprehensive expertise spanning artificial intelligence, modern network infrastructure, and enterprise automation.
                    </p>
                </motion.div>

                <div style={styles.grid} className="skills-grid">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass glow-hover"
                            style={styles.card}
                        >
                            {/* Color accent bar at the top */}
                            <div style={{ ...styles.cardAccent, backgroundColor: cat.color }} />

                            {/* Card Header */}
                            <div style={styles.cardHeader}>
                                <div style={{ ...styles.iconBox, backgroundColor: cat.bgColor, color: cat.color }}>
                                    {cat.icon}
                                </div>
                                <h3 style={styles.cardTitle}>{cat.title}</h3>
                            </div>

                            {/* Skill Badges */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                style={styles.skillsWrap}
                            >
                                {cat.skills.map((skill, sIdx) => (
                                    <motion.div
                                        key={sIdx}
                                        variants={itemVariants}
                                        style={styles.badge}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = skill.brandColor;
                                            e.currentTarget.style.color = '#ffffff';
                                            e.currentTarget.style.boxShadow = `0 0 15px ${skill.brandColor}40`;
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                            e.currentTarget.style.color = 'var(--text-muted)';
                                            e.currentTarget.style.boxShadow = 'none';
                                            e.currentTarget.style.transform = 'scale(1)';
                                        }}
                                    >
                                        {skill.icon}
                                        {skill.name}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Responsive override for single-column on mobile */}
            <style>{`
                @media (max-width: 768px) {
                    .skills-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Skills;
