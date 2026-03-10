import React from 'react';
import { Helmet } from 'react-helmet-async';
import ClientsPage from '../components/pages/ClientsPage';

const Clients = () => {
    return (
        <div style={{ minHeight: 'calc(100vh - 4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <Helmet>
                <title>Clients & Target Markets | Roderic Navarro</title>
                <meta name="description" content="Discover the target markets I serve, including SMEs, Startups, and Government Agencies, and read testimonials from satisfied clients." />
            </Helmet>
            <ClientsPage />
        </div>
    );
};

export default Clients;
