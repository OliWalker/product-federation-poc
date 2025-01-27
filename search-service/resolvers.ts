import { indexes, clients } from "./data.ts";

// Here would lie the logic to select which field in the sub-domains data
// would best match the client that is requesting it. We can handle complex logic
// that the team owning the sub-domain would know best, which is why it is handled
// within the sub-domains service.
// Obviously this is a very simple example...
function clientToSearchIndex(client: string) {
  switch (client) {
    case clients.B2B:
      return indexes.b2b;
    case clients.PARTNER:
      return indexes.partner;
    case clients.PUBLIC:
    default:
      return indexes.public;
  }
}

export const resolvers = {
  Query: {
    searchIndex: async (_parent, _args, context, _info) => {
      const index = clientToSearchIndex(context.clientId);
      return { products: index };
    },
  },

  SearchIndex: {
    products: ({ products }) => {
      return products;
    },
  },
};
