// The services internal representation of the data.
// This is likely to be the services DB that it fills listening to Kafka events.

export const products = [
  {
    sku: "1",
    name: "Cloud Ace",
    descriptionPublic:
      "Designed for runners who refuse to compromise. It offers maximum cushioning and support.",
    descriptionB2b:
      "Premium running shoe with maximum cushioning and support, ideal for long-distance runners.",
    descriptionPartner:
      "Top-of-the-line running shoe with advanced cushioning technology for ultimate comfort.",
  },
  {
    sku: "2",
    name: "Cloud Monster",
    descriptionPublic:
      "Built for those who want to go big and bold. It features massive cushioning for a smooth ride.",
    descriptionB2b:
      "High-performance running shoe with oversized cushioning for a unique running experience.",
    descriptionPartner:
      "Innovative running shoe with extra-large cushioning for unparalleled comfort and performance.",
  },
  {
    sku: "3",
    name: "Cloud 5",
    descriptionPublic:
      "The ultimate everyday shoe. It's lightweight, comfortable, and versatile.",
    descriptionB2b:
      "Versatile and lightweight shoe perfect for everyday wear and various activities.",
    descriptionPartner:
      "Everyday shoe with a perfect balance of comfort and style, suitable for all-day wear.",
  },
  {
    sku: "4",
    name: "Cloud Swift",
    descriptionPublic:
      "Made for the city. It offers urban runners a lightweight and agile shoe.",
    descriptionB2b:
      "Lightweight and agile running shoe designed specifically for urban environments.",
    descriptionPartner:
      "City running shoe with a sleek design and responsive cushioning for urban adventures.",
  },
  {
    sku: "5",
    name: "Cloud Go",
    descriptionPublic:
      "Your go-to shoe for any run. It provides a smooth and comfortable ride.",
    descriptionB2b:
      "Reliable running shoe with balanced cushioning and support for everyday runs.",
    descriptionPartner:
      "Go-to running shoe with a smooth ride and comfortable fit, perfect for daily training.",
  },
];

// Each service also keeps a list of clients that it supports, this can be different depending on its needs.

export const clients = {
  PUBLIC: "PUBLIC",
  PARTNER: "PARTNER",
  B2B: "B2B",
} as const;
