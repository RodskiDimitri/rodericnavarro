import React from 'react';
import SEO from '../components/SEO';
import Experience from '../components/sections/Experience';
import Skills from '../components/sections/Skills';

const Resume = () => {
    return (
        <div className="container" style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column' }}>
            <SEO 
                title="Resume | Roderic Navarro"
                description="Review Roderic Navarro's professional journey, including roles as an AI Technology Consultant and IT Innovation Manager."
            />
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center', flexShrink: 0 }}>
                My <span className="text-gradient">Resume</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto', flexShrink: 0 }}>
                Career journey and technical expertise
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', flex: 1, minHeight: '600px' }} className="resume-grid">
                <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ paddingRight: '1rem', paddingBottom: '2rem' }}>
                        <Experience />
                    </div>
                </div>
                <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ paddingRight: '1rem', paddingBottom: '2rem' }}>
                        <Skills />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
