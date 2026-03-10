import React from 'react';
import { Helmet } from 'react-helmet-async';
import Experience from '../components/sections/Experience';
import Skills from '../components/sections/Skills';

const Resume = () => {
    return (
        <div className="container" style={{ padding: '2rem 1.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Helmet>
                <title>Resume | Roderic Navarro</title>
                <meta name="description" content="Review Roderic Navarro's professional journey, including roles as an AI Technology Consultant and IT Innovation Manager." />
            </Helmet>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center', flexShrink: 0 }}>
                My <span className="text-gradient">Resume</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto', flexShrink: 0 }}>
                Career journey and technical expertise
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', flex: 1, minHeight: '600px' }} className="resume-grid">
                <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ flex: 1, overflowY: 'auto', paddingRight: '1rem', paddingBottom: '2rem' }} className="custom-scrollbar">
                        <Experience />
                    </div>
                </div>
                <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ flex: 1, overflowY: 'auto', paddingRight: '1rem', paddingBottom: '2rem' }} className="custom-scrollbar">
                        <Skills />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
