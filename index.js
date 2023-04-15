const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

// Read in the environment variables
require("dotenv").config();

const startServer = () => {
  // Create the Apollo server
  const server = new ApolloServer({ typeDefs, resolvers });

  // Initialize Express
  const app = express();

  // Start the Apollo server
  server
    .start()
    .then(() => {
      // Apply the Apollo middleware to Express
      server.applyMiddleware({ app });

      // Add a global error handler for the Express app to handle any uncaught request processing errors.
      app.use((error, req, res, next) => {
        console.error("An error occurred during request processing:", error);
        res.status(500).json({ message: "Internal Server Error" });
      });

      // Set the port and start the server
      const port = process.env.PORT || 4000;
      app.listen(port, () => {
        console.log(
          `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
        );
      });
    })
    .catch((error) => {
      console.error("Error starting the server:", error);
    });
};

startServer();
