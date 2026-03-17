import React from 'react';
import SEO from '../components/SEO';
import AboutSection from '../components/sections/About';

const About = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <SEO 
                title="About Roderic Navarro | AI Consultant"
                description="Learn about Roderic Navarro's 17+ years of experience in IT operations, strategy, and AI tech consulting."
            />
            <AboutSection />
        </div>
    );
};

export default About;
