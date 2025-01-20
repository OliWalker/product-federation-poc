import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { resolvers } from "./resolvers.ts";
import { CLIENT_NAME_HEADER } from "../clients.ts";

const typeDefs = mergeTypeDefs(loadFilesSync("copy-service/schema.graphql"));

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
      // pass the client name header to the resolvers
      clientName: req.headers[CLIENT_NAME_HEADER],
    }),
  })
);
app.listen(4003, () =>
  console.log(`🚀 copy subgraph ready at http://localhost:4003/`)
);
