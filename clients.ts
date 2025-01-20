// This should likely be a Config Server or Authentication server with business logic
// to extract JWT tokens and determine the client type / role based on the token.
// For simplicity, we are using a simple object to store the client types, which is decided by the client
// who is requesting the data.

export const CLIENTS = {
  PUBLIC: "PUBLIC",
  PARTNER: "PARTNER",
  B2B: "B2B",
} as const;

export const CLIENT_NAME_HEADER = "client-name";
