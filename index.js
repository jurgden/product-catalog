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

const products = [
  {
    id: 1,
    name: "Saguaro",
    description: "A large, tree-sized cactus native to the Sonoran Desert.",
    pricePerOz: 0.5,
    pricePerPlant: 50,
    color: "Green",
    // Add more fields as needed
  },
  {
    id: "2",
    name: "Barrel Cactus",
    description: "A large, round cactus known for its barrel shape.",
    pricePerOz: 2.35,
    pricePerPlant: 52.35,
    color: "green",
  },
  {
    id: "3",
    name: "Prickly Pear",
    description: "A flat, spiny cactus with edible fruit and pads.",
    pricePerOz: 2.35,
    pricePerPlant: 25.0,
    color: "green",
  },
  {
    id: "4",
    name: "Christmas Cactus",
    description: "A popular houseplant with colorful, tubular flowers.",
    pricePerOz: 2.35,
    pricePerPlant: 32.35,
    color: "pink",
  },
  {
    id: "5",
    name: "Moon Cactus",
    description:
      "A small, colorful cactus grafted onto another cactus for support.",
    pricePerOz: 2.35,
    pricePerPlant: 22.35,
    color: "red",
  },
  {
    id: "6",
    name: "Organ Pipe Cactus",
    description: "A tall, columnar cactus with multiple stems.",
    pricePerOz: 2.35,
    pricePerPlant: 82.35,
    color: "green",
  },
  {
    id: "7",
    name: "Old Man Cactus",
    description: "A hairy cactus resembling an old man with white hair.",
    pricePerOz: 2.35,
    pricePerPlant: 35.0,
    color: "green",
  },
  {
    id: "8",
    name: "Bishop's Cap",
    description: "A small, star-shaped cactus with five distinct ribs.",
    pricePerOz: 2.35,
    pricePerPlant: 15.0,
    color: "green",
  },
  {
    id: "9",
    name: "Teddy Bear Cholla",
    description: "A fuzzy-looking cactus with dense spines.",
    pricePerOz: 2.35,
    pricePerPlant: 45.0,
    color: "green",
  },
  {
    id: "10",
    name: "Totem Pole Cactus",
    description:
      "A nearly spineless cactus with interesting, columnar growth patterns.",
    pricePerOz: 2.35,
    pricePerPlant: 62.35,
    color: "green",
  },
  {
    id: "11",
    name: "Queen of the Night",
    description: "A night-blooming cactus with large, fragrant flowers.",
    pricePerOz: 10.0,
    pricePerPlant: 72.35,
    color: "white",
  },
  {
    id: "12",
    name: "Rat Tail Cactus",
    description: "A trailing cactus with long stems and tubular flowers.",
    pricePerOz: 4.75,
    pricePerPlant: 42.35,
    color: "pink",
  },
  {
    id: "13",
    name: "Golden Barrel Cactus",
    description: "A round, golden-yellow cactus with long, sharp spines.",
    pricePerOz: 5.45,
    pricePerPlant: 55.0,
    color: "yellow",
  },
  {
    id: "14",
    name: "Brain Cactus",
    description: "A small, crested cactus with a brain-like appearance.",
    pricePerOz: 3.15,
    pricePerPlant: 18.0,
    color: "green",
  },
  {
    id: "15",
    name: "Peruvian Apple Cactus",
    description:
      "A tall, columnar cactus with large, white flowers and edible fruit.",
    pricePerOz: 13.45,
    pricePerPlant: 92.35,
    color: "green",
  },
  {
    id: "16",
    name: "Chin Cactus",
    description: "A small, round cactus with colorful flowers.",
    pricePerOz: 1.95,
    pricePerPlant: 12.0,
    color: "purple",
  },
  {
    id: "17",
    name: "Feather Cactus",
    description: "A cactus with long, feathery spines that resemble feathers.",
    pricePerOz: 3.25,
    pricePerPlant: 28.0,
    color: "green",
  },
  {
    id: "18",
    name: "Fairy Castle Cactus",
    description: "A branching cactus with a castle-like appearance.",
    pricePerOz: 7.6,
    pricePerPlant: 75.0,
    color: "green",
  },
  {
    id: "19",
    name: "Star Cactus",
    description: "A small, round cactus with a star-shaped pattern of spines.",
    pricePerOz: 2.4,
    pricePerPlant: 12.35,
    color: "green",
  },
  {
    id: "20",
    name: "Mammillaria",
    description: "A genus of cactus with small, round, clustered bodies.",
    pricePerOz: 2.35,
    pricePerPlant: 22.0,
    color: "green",
  },
  {
    id: "21",
    name: "Pincushion Cactus",
    description:
      "A small, round cactus with dense, short spines resembling a pincushion.",
    pricePerOz: 2.35,
    pricePerPlant: 22.35,
    color: "green",
  },
  {
    id: "22",
    name: "Hedgehog Cactus",
    description:
      "A clustering cactus with cylindrical stems and vibrant flowers.",
    pricePerOz: 2.35,
    pricePerPlant: 32.35,
    color: "pink",
  },
  {
    id: "23",
    name: "Fishhook Cactus",
    description:
      "A small, round cactus with curved spines resembling fishhooks.",
    pricePerOz: 2.35,
    pricePerPlant: 18.0,
    color: "green",
  },
  {
    id: "24",
    name: "Candelabra Cactus",
    description: "A branching cactus with a candelabra-like growth pattern.",
    pricePerOz: 5.65,
    pricePerPlant: 52.35,
    color: "green",
  },
  {
    id: "25",
    name: "Peanut Cactus",
    description: "A low-growing cactus with elongated, peanut-shaped segments.",
    pricePerOz: 2.35,
    pricePerPlant: 15.0,
    color: "green",
  },
];

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
