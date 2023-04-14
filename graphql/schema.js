// graphql/schema.js
const { gql } = require("apollo-server-express");

// Define the GraphQL schema
const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    description: String!
    pricePerOz: Float!
    pricePerPlant: Float!
    color: String!
    // Add more fields as needed
  }

  type Query {
    products: [Product]!
  }
`;

module.exports = typeDefs;
