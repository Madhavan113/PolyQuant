import React, { useEffect, useState } from 'react';
import { fetchMarketData } from '../services/api';

const MarketView = () => {
    const [marketData, setMarketData] = useState(null);
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
            <h1>Market View</h1>
            {marketData && marketData.length > 0 ? (
                <ul>
                    {marketData.map((market) => (
                        <li key={market.id}>
                            <h2>{market.title}</h2>
                            <p>Current Price: {market.price}</p>
                            <p>Volume: {market.volume}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No market data available.</p>
            )}
        </div>
    );
};

export default MarketView;