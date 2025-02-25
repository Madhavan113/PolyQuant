const typeDefs = `#graphql
  type Market {
    id: ID!
    name: String!
    question: String!
    volume: Float!
    outcomePrices: [Float!]!
    outcomes: [String!]!
    active: Boolean!
  }

  type User {
    id: ID!
    username: String!
    trades: [Trade!]!
  }

  type Trade {
    id: ID!
    marketId: ID!
    amount: Float!
    direction: String!
    timestamp: String!
  }

  type Query {
    markets: [Market!]!
    market(id: ID!): Market
    user(id: ID!): User
  }
`;

export default typeDefs;