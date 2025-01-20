import { CLIENTS } from "../clients.ts";
import { products } from "./data.ts";

// Here would lie the logic to select which field in the sub-domains data
// would best match the client that is requesting it. We can handle complex logic
// that the team owning the sub-domain would know best, which is why it is handled
// within the sub-domains service.
// Obviously this is a very simple example...
function clientToDescription(client: string) {
  switch (client) {
    case CLIENTS.B2B:
      return "thumbnailB2b";
    case CLIENTS.PARTNER:
      return "thumbnailPartner";
    case CLIENTS.PUBLIC:
    default:
      return "thumbnailPublic";
  }
}

export const resolvers = {
  Query: {},
  Product: {
    __resolveReference(product, { clientName }) {
      const requestedProduct = products.find((p) => p.sku === product.sku);
      if (!requestedProduct) return null;
      return {
        ...requestedProduct,
        thumbnail: requestedProduct[clientToDescription(clientName)],
      };
    },
  },
};
