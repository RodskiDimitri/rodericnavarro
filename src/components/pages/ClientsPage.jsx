import React from 'react';
import TargetMarkets from '../sections/TargetMarkets';

const ClientsPage = () => {
    return (
        <div className="container" style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ position: 'relative', flex: 1 }}>
                <TargetMarkets />
            </div>
        </div>
    );
};

export default ClientsPage;
