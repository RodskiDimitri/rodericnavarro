import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories as categories } from '../../data/content';
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
            marginBottom: '2rem',
        },
        heading: {
            fontSize: '1.5rem',
            marginBottom: '0.5rem',
            display: 'inline-block',
        },
        subtitle: {
            color: 'var(--text-muted)',
            maxWidth: '500px',
            margin: '0 auto',
            fontSize: '0.9rem',
            lineHeight: 1.5,
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
            gap: '1rem',
        },
        card: {
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '16px',
            padding: '1.25rem',
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
            gap: '0.75rem',
            marginBottom: '1rem',
        },
        iconBox: {
            padding: '0.5rem',
            borderRadius: '8px',
            transition: 'transform 0.3s ease',
        },
        cardTitle: {
            fontSize: '1rem',
            fontWeight: 600,
            color: 'var(--text-main)',
            margin: 0,
        },
        skillsWrap: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
        },
        badge: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.35rem 0.75rem',
            borderRadius: '9999px',
            border: '1px solid var(--border-color)',
            background: 'var(--hover-bg)',
            color: 'var(--text-muted)',
            fontSize: '0.75rem',
            fontWeight: 500,
            cursor: 'default',
            transition: 'all 0.3s ease',
        },
    };

    return (
        <section id="skills" style={styles.section}>
            <div>

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
                                            e.currentTarget.style.borderColor = 'var(--border-color)';
                                            e.currentTarget.style.color = 'var(--text-muted)';
                                            e.currentTarget.style.boxShadow = 'none';
                                            e.currentTarget.style.transform = 'scale(1)';
                                        }}
                                    >
                                        {skill.iconName ? <BrandIcon name={skill.iconName} color={skill.brandColor} Fallback={skill.fallback} /> : skill.customIcon}
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
