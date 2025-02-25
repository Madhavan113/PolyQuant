import React, { useEffect, useState } from 'react';
import { fetchTradingHistory } from '../services/api';

const TradingHistory = () => {
    const [tradingHistory, setTradingHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getTradingHistory = async () => {
            try {
                const history = await fetchTradingHistory();
                setTradingHistory(history);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getTradingHistory();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Trading History</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Market</th>
                        <th>Action</th>
                        <th>Amount</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {tradingHistory.map((trade, index) => (
                        <tr key={index}>
                            <td>{new Date(trade.date).toLocaleString()}</td>
                            <td>{trade.market}</td>
                            <td>{trade.action}</td>
                            <td>{trade.amount}</td>
                            <td>{trade.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TradingHistory;