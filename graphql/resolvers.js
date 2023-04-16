// graphql/resolvers.js
const products = require("../data/products");
const generateSignedUrl = require("../utils/signedUrl");

// Define the GraphQL resolvers
const resolvers = {
  Query: {
    products: async () => {
      const productsWithImages = await Promise.all(
        products.map(async (product) => {
          const imageFileName = `images/${product.id}.jpg`;
          const imageUrl = await generateSignedUrl(imageFileName);
          return { ...product, imageUrl };
        })
      );
      return productsWithImages;
    },
  },
};

module.exports = resolvers;
