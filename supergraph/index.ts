import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { ApolloGateway, RemoteGraphQLDataSource } from "@apollo/gateway";
import { CLIENT_ID_HEADER } from "../clients.ts";

// Here we pass the validated Client Id to the sub-graphs so they can
// make decisions on which data to show based on which client they are serving.
// The verification of this header is done in a middleware function in the supergraph
// so that all requests are validated.
class ClientEnhancedDataSource extends RemoteGraphQLDataSource {
  willSendRequest({ request, context }) {
    request.http.headers.set(CLIENT_ID_HEADER, context.clientId);
  }
}

const gateway = new ApolloGateway({
  serviceList: [
    { name: "asset-service", url: "http://localhost:4001/" },
    { name: "assortment-service", url: "http://localhost:4002/" },
    { name: "copy-service", url: "http://localhost:4003/" },
    { name: "core-data-service", url: "http://localhost:4004/" },
    { name: "search-service", url: "http://localhost:4005/" },
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
      // Here, we have the validation that the JWT is signed by our Authentication service and has a reference to the
      // Client Id. For simplicity, now we are just passing the client id in the header.
      // This is more of a scope
      clientId: req.headers[CLIENT_ID_HEADER],
    }),
  })
);
app.listen(4000, () =>
  console.log(`🚀 Supergraph ready at http://localhost:4000/`)
);
