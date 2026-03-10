import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutSection from '../components/sections/About';
import ResultsAtGlance from '../components/sections/ResultsAtGlance';

const About = () => {
    return (
        <div style={{ minHeight: 'calc(100vh - 4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Helmet>
                <title>About Roderic Navarro | AI Consultant</title>
                <meta name="description" content="Learn about Roderic Navarro's 17+ years of experience in IT operations, strategy, and AI tech consulting." />
            </Helmet>
            <AboutSection />
            <ResultsAtGlance />
        </div>
    );
};

export default About;
