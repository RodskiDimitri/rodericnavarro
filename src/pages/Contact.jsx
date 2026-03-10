import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactSection from '../components/sections/Contact';

const Contact = () => {
    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Helmet>
                <title>Contact | Roderic Navarro</title>
                <meta name="description" content="Get in touch with Roderic Navarro to discuss technical consulting, AI implementation, or IT management for your business." />
            </Helmet>
            <ContactSection />
        </div>
    );
};

export default Contact;
