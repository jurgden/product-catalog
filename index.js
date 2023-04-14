const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const startServer = () => {
  // Create the Apollo server
  const server = new ApolloServer({ typeDefs, resolvers });

  // Initialize Express
  const app = express();

  // Start the Apollo server
  server.start().then(() => {
    // Apply the Apollo middleware to Express
    server.applyMiddleware({ app });

    // Set the port and start the server
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(
        `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
      );
    });
  });
};

startServer();
