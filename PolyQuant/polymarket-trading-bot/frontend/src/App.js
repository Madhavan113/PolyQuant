import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MarketView from './components/MarketView';
import TradingHistory from './components/TradingHistory';
import Navigation from './components/Navigation';
import './styles/main.css';
import { ApolloProvider } from '@apollo/client';
import { client } from './services/api';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/market/:id" component={MarketView} />
            <Route path="/history" component={TradingHistory} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;