import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { ApolloGateway, RemoteGraphQLDataSource } from "@apollo/gateway";
import { CLIENT_NAME_HEADER } from "../clients.ts";

// This is needed to pass headers from the incoming request to the supergraph to the
// subsequent requests to the sub-graphs. We will likely be using JWT tokens in the headers
// rather then just the client name.
class ClientEnhancedDataSource extends RemoteGraphQLDataSource {
  willSendRequest({ request, context }) {
    request.http.headers.set(CLIENT_NAME_HEADER, context.clientName);
  }
}

const gateway = new ApolloGateway({
  serviceList: [
    { name: "asset-service", url: "http://localhost:4001/" },
    { name: "assortment-service", url: "http://localhost:4002/" },
    { name: "copy-service", url: "http://localhost:4003/" },
    { name: "core-data-service", url: "http://localhost:4004/" },
  ],
  buildService({ url }) {
    return new ClientEnhancedDataSource({ url });
  },
});

const server = new ApolloServer({
  gateway,
});

await server.start();

const app = express();
app.use(cors());
app.use(express.json());

app.use(
  "/",
  expressMiddleware(server, {
    context: async ({ req }) => ({
      // Here we have the authentication logic to validate which client is making the request
      // and potentially which user.
      // For simplicity, now we are just passing the client name in the header.
      clientName: req.headers[CLIENT_NAME_HEADER],
    }),
  })
);
app.listen(4000, () =>
  console.log(`🚀 Supergraph ready at http://localhost:4000/`)
);
