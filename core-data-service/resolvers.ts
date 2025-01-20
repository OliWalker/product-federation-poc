import { products } from "./data.ts";

export const resolvers = {
  Query: {},
  Product: {
    __resolveReference(product) {
      // The data in the core-data service does not change
      // for each of the clients, therefore there is no
      // transformations - but we can always add them here
      // to adjust the data from our domain to whatever schema
      // we expose to the supergraph
      return products.find((p) => p.sku === product.sku);
    },
  },
};
