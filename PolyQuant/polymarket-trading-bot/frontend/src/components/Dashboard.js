import React, { useEffect, useState } from 'react';
import { fetchMarketData } from '../services/api';

const Dashboard = () => {
    const [marketData, setMarketData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMarketData = async () => {
            try {
                const data = await fetchMarketData();
                setMarketData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getMarketData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Market Overview</h1>
            <ul>
                {marketData.map((market) => (
                    <li key={market.id}>
                        <h2>{market.title}</h2>
                        <p>Current Odds: {market.odds}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;