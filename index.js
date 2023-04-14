const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

// Define the GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define the GraphQL resolvers
const resolvers = {
  Query: {
    hello: () => "Hello, world!",
  },
};

// Create the Apollo server
const server = new ApolloServer({ typeDefs, resolvers });

// Initialize Express
const app = express();

// Apply the Apollo middleware to Express
server.applyMiddleware({ app });

// Set the port and start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
});
