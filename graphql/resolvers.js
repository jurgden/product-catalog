// graphql/resolvers.js
const products = require("../data/products");

// Define the GraphQL resolvers
const resolvers = {
  Query: {
    products: () => products,
  },
};

module.exports = resolvers;
