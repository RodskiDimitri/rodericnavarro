import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/sections/Hero';

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
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Helmet>
                <title>Roderic Navarro | AI Consultant & IT Manager</title>
                <meta name="description" content="Strategic AI implementation consulting and IT management. Specializing in resolving complex tech issues to drive ROI." />
            </Helmet>
            <Hero setActiveSection={handleNavigation} />
        </div>
    );
};

export default Home;
