import React from 'react';
import SEO from '../components/SEO';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import ResultsAtGlance from '../components/sections/ResultsAtGlance';

const Home = () => {
    const navigate = useNavigate();
    
    // We pass a mock setActiveSection function to Hero that uses navigate
    const handleNavigation = (section) => {
        // Map section names to routes
        const routes = {
            'home': '/',
            'about': '/about',
            'resume': '/resume',
            'clients': '/clients',
            'contact': '/contact'
        };
        navigate(routes[section] || '/');
    };

    return (
        <div style={{ height: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
            <SEO 
                title="Roderic Navarro | AI Consultant & IT Manager"
                description="Strategic AI implementation consulting and IT management. Specializing in resolving complex tech issues to drive ROI."
            />
            <Hero setActiveSection={handleNavigation} />
            <ResultsAtGlance />
        </div>
    );
};

export default Home;
