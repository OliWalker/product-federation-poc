import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { resolvers } from "./resolvers.ts";
import { CLIENT_NAME_HEADER } from "../clients.ts";

const typeDefs = mergeTypeDefs(
  loadFilesSync("core-data-service/schema.graphql")
);

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
});

await server.start();

const app = express();
app.use(express.json());
app.use("/", expressMiddleware(server));
app.listen(4004, () =>
  console.log(`🚀 core-data subgraph ready at http://localhost:4004/`)
);
