import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/market-view">Market View</Link>
                </li>
                <li>
                    <Link to="/trading-history">Trading History</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;