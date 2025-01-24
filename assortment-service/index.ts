import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { resolvers } from "./resolvers.ts";
import { CLIENT_ID_HEADER } from "../clients.ts";

const typeDefs = mergeTypeDefs(
  loadFilesSync("assortment-service/schema.graphql")
);

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
});

await server.start();

const app = express();
app.use(express.json());
app.use(
  "/",
  expressMiddleware(server, {
    context: async ({ req }) => ({
      // If needed we could add sub-graph level authentication here too, for now we just
      // pass the client id header to the resolvers
      clientId: req.headers[CLIENT_ID_HEADER],
    }),
  })
);
app.listen(4002, () =>
  console.log(`🚀 assortment subgraph ready at http://localhost:4002/`)
);
