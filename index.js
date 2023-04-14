const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

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

// Define the GraphQL resolvers
const resolvers = {
  Query: {
    products: () => products,
  },
};

const startServer = async () => {
  // Create the Apollo server
  const server = new ApolloServer({ typeDefs, resolvers });

  // Initialize Express
  const app = express();

  // Start the Apollo server
  await server.start();

  // Apply the Apollo middleware to Express
  server.applyMiddleware({ app });

  // Set the port and start the server
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(
      `Server ready at http://localhost:${port}${server.graphqlPath}`
    );
  });
};

startServer();
