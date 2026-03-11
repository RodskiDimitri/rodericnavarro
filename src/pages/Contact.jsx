import React from 'react';
import SEO from '../components/SEO';
import ContactSection from '../components/sections/Contact';

const Contact = () => {
    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <SEO 
                title="Contact | Roderic Navarro"
                description="Get in touch with Roderic Navarro to discuss technical consulting, AI implementation, or IT management for your business."
            />
            <ContactSection />
        </div>
    );
};

export default Contact;
