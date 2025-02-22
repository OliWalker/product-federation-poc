import { products, clients } from "./data.ts";

// Here would be the complex business logic to decide which clients can see which assortment.
// Because this service declares the type and the query, all requests for products will go through this service.
// That means this sub-domain is enabled to take whole responsiblity for the assortment. This is a good thing.
// Obviously this is a very simple example of how an assortment service could work...
function clientAvailableSkus(client: string) {
  switch (client) {
    case clients.B2B:
      return ["1", "2", "3", "4", "5"];
    case clients.PARTNER:
      return ["1", "2", "3"];
    case clients.PUBLIC:
    default:
      return ["1", "2"];
  }
}

export const resolvers = {
  Query: {
    product: (_, { sku }, { clientId }) => {
      // These are the querys where we can control which products the client can see.
      // Here is where we filter the complete list of products, to those which are available in
      // the requesting clients context.
      const clientSkus = clientAvailableSkus(clientId);
      const product = products.find((p) => p.sku === sku);
      if (clientSkus.includes(sku)) return product;
      return null;
    },
    products: (_, { skus = [] }, { clientId }) => {
      const clientSkus = clientAvailableSkus(clientId);

      const availableSkus =
        skus.length > 0
          ? skus.filter((sku) => clientSkus.includes(sku))
          : clientSkus;

      const availableProducts = products.filter(({ sku }) =>
        availableSkus.includes(sku)
      );
      return availableProducts;
    },
  },
  Product: {
    __resolveReference(product) {
      return products.find((p) => p.sku === product.id);
    },
  },
};
