import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Testimonials from '../sections/Testimonials';
import TargetMarkets from '../sections/TargetMarkets';

const ClientsPage = () => {
    const [activeClientTab, setActiveClientTab] = useState('markets');

    return (
        <div className="container" style={{ padding: '2rem 1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <button
                    onClick={() => setActiveClientTab('markets')}
                    className={`btn ${activeClientTab === 'markets' ? 'primary' : ''}`}
                    style={{ padding: '0.5rem 1.5rem', borderRadius: '8px', background: activeClientTab === 'markets' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)', color: activeClientTab === 'markets' ? '#000' : 'var(--text-main)', border: 'none', fontWeight: 600 }}
                >
                    Target Markets
                </button>
                <button
                    onClick={() => setActiveClientTab('testimonials')}
                    className={`btn ${activeClientTab === 'testimonials' ? 'primary' : ''}`}
                    style={{ padding: '0.5rem 1.5rem', borderRadius: '8px', background: activeClientTab === 'testimonials' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)', color: activeClientTab === 'testimonials' ? '#000' : 'var(--text-main)', border: 'none', fontWeight: 600 }}
                >
                    Testimonials
                </button>
            </div>
            <div style={{ position: 'relative' }}>
                <AnimatePresence mode="wait">
                    {activeClientTab === 'testimonials' ? (
                        <motion.div key="test" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}>
                            <Testimonials />
                        </motion.div>
                    ) : (
                        <motion.div key="mark" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                            <TargetMarkets />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ClientsPage;
