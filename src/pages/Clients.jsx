import React from 'react';
import SEO from '../components/SEO';
import ClientsPage from '../components/pages/ClientsPage';

const Clients = () => {
    return (
        <div style={{ height: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
            <SEO 
                title="Clients & Target Markets | Roderic Navarro"
                description="Discover the target markets I serve, including SMEs, Startups, and Government Agencies, and read testimonials from satisfied clients."
            />
            <ClientsPage />
        </div>
    );
};

export default Clients;
