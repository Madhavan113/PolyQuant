import axios from 'axios';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

export const fetchMarketData = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        query GetMarkets {
          markets {
            id
            name
            question
            volume
            outcomePrices
            outcomes
            active
          }
        }
      `
    });
    return data.markets;
  } catch (error) {
    console.error('Error fetching market data:', error);
    throw error;
  }
};

export const fetchUserData = async (userId) => {
  try {
    const { data } = await client.query({
      query: gql`
        query GetUser($id: ID!) {
          user(id: $id) {
            id
            username
            trades {
              id
              marketId
              amount
              direction
              timestamp
            }
          }
        }
      `,
      variables: { id: userId }
    });
    return data.user;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// Add more API functions as needed
