import React from 'react';
import Experience from '../sections/Experience';
import Skills from '../sections/Skills';

const ResumePage = () => {
    return (
        <div className="container" style={{ padding: '2rem 1.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center', flexShrink: 0 }}>
                My <span className="text-gradient">Resume</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto', flexShrink: 0 }}>
                Career journey and technical expertise
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', flex: 1, overflow: 'hidden' }} className="resume-grid">
                <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ flex: 1, overflowY: 'auto', paddingRight: '1rem', paddingBottom: '2rem' }} className="custom-scrollbar">
                        <Experience />
                    </div>
                    {/* Bottom fade out */}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40px', background: 'linear-gradient(to top, var(--bg-main), transparent)', pointerEvents: 'none' }}></div>
                </div>
                <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ flex: 1, overflowY: 'auto', paddingRight: '1rem', paddingBottom: '2rem' }} className="custom-scrollbar">
                        <Skills />
                    </div>
                    {/* Bottom fade out */}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40px', background: 'linear-gradient(to top, var(--bg-main), transparent)', pointerEvents: 'none' }}></div>
                </div>
            </div>
        </div>
    );
};

export default ResumePage;
