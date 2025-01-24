// The services internal representation of the data.
// This is likely to be the services DB that it fills listening to Kafka events.

export const products = [
  {
    sku: "1",
    thumbnailPublic:
      "https://library.on.com/transform/a0b0e82a-a23d-40f9-856c-eb2afad60296/SS21-Cloudace-Black-Eclipse-M-Pack-Shot-1",
    thumbnailB2b:
      "https://library.on.com/transform/9e693dea-a174-4214-8568-6250df77d441/SS21-Cloudace-Black-Eclipse-M-Pack-Shot-4",
    thumbnailPartner:
      "https://library.on.com/transform/3d12af42-6e94-4e65-a6df-2dae0922846b/SS21-Cloudace-Black-Eclipse-M-Pack-Shot-2",
  },
  {
    sku: "2",
    thumbnailPublic:
      "https://library.on.com/transform/73926125-e586-4ccb-8d9f-552f879747f7/3ME10460629-cloudmonster-ss24-white_indigo-m-d",
    thumbnailB2b:
      "https://library.on.com/transform/ff84e991-7ecd-4ae9-ae23-56deffdd1218/3ME10460629-cloudmonster-ss24-white_indigo-m-g4",
    thumbnailPartner:
      "https://library.on.com/transform/8cf0a93e-4be8-42ad-a88b-ce6b979e6fd1/3ME10460629-cloudmonster-ss24-white_indigo-m-g2",
  },
  {
    sku: "3",
    thumbnailPublic:
      "https://library.on.com/transform/88686c5a-dadb-4bf4-b3ad-8dfb513c0371/59-98363-cloud_5-ss23-ice_prairie-w-g1",
    thumbnailB2b:
      "https://library.on.com/transform/4a4eed4f-cc28-4ff6-82c9-3ceac0666084/59-98363-cloud_5-ss23-ice_prairie-w-g4",
    thumbnailPartner:
      "https://library.on.com/transform/da63b86c-0b2d-49bd-af41-b034afc0a3ab/59-98363-cloud_5-ss23-ice_prairie-w-g2",
  },
  {
    sku: "4",
    thumbnailPublic:
      "https://library.on.com/transform/7ae104e7-5ab8-4595-a3df-1a83eb03eb88/41-99461-cloudswift_edge_prism-ss21-black-w-d",
    thumbnailB2b:
      "https://library.on.com/transform/0810986a-8239-42fd-bf15-21aa14391c2b/SS21-Cloudswift-Edge-Prism-Aurora-W-Pack-Shot-4",
    thumbnailPartner:
      "https://library.on.com/transform/1c11cd43-3db3-4601-94d3-1d29cab1c63d/SS21-Cloudswift-Edge-Prism-Aurora-W-Pack-Shot-2",
  },
  {
    sku: "5",
    thumbnailPublic:
      "https://library.on.com/transform/ad7714cf-85af-4a85-872f-6b5816c0b61a/55-98204-cloudgo-ss23-iron_frost-w-g1",
    thumbnailB2b:
      "https://library.on.com/transform/21d31c1e-b525-4654-b084-bb8abe0e36b3/55-98204-cloudgo-ss23-iron_frost-w-g4",
    thumbnailPartner:
      "https://library.on.com/transform/d384005a-c915-41f3-8cf2-0200d9c94193/55-98204-cloudgo-ss23-iron_frost-w-g2",
  },
];

// Each service also keeps a list of clients that it supports, this can be different depending on its needs.

export const clients = {
  PUBLIC: "PUBLIC",
  PARTNER: "PARTNER",
  B2B: "B2B",
} as const;
