// The services internal representation of the data.
// This is likely to be the services DB that it fills listening to Kafka events.

// The service can store more or less data depending on its needs.
// Here in the Search Data we actually store the index rather then the products themselves.

export const indexes = {
  public: [
    { sku: "1" },
    { sku: "2" },
    { sku: "3" },
    { sku: "4" },
    { sku: "5" },
  ],
  b2b: [{ sku: "5" }, { sku: "4" }, { sku: "3" }, { sku: "2" }, { sku: "1" }],
  partner: [
    { sku: "4" },
    { sku: "1" },
    { sku: "3" },
    { sku: "5" },
    { sku: "2" },
  ],
};

// Each service also keeps a list of clients that it supports, this can be different depending on its needs.

export const clients = {
  PUBLIC: "PUBLIC",
  PARTNER: "PARTNER",
  B2B: "B2B",
} as const;
