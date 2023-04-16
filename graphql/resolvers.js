// graphql/resolvers.js
const products = require("../data/products");
const { generateSignedUrl } = require("../utils/signedUrl");

// Define the GraphQL resolvers
const resolvers = {
  Query: {
    products: () => {
      return products.map((product) => ({
        ...product,
        imageUrl: generateSignedUrl(product.id),
      }));
    },
  },
};

module.exports = resolvers;
