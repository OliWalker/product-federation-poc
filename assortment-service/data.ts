// The services internal representation of the data.
// This is likely to be the services DB that it fills listening to Kafka events.

export const products = [
  { sku: "1" },
  { sku: "2" },
  { sku: "3" },
  { sku: "4" },
  { sku: "5" },
];

// Each service also keeps a list of clients that it supports, this can be different depending on its needs.

export const clients = {
  PUBLIC: "PUBLIC",
  PARTNER: "PARTNER",
  B2B: "B2B",
} as const;
