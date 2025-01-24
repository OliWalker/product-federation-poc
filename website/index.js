const query = `
      query Products {
          products (skus: []) {
              sku
              color
              thumbnail
              weight
              name
              description
          }
      }
  `;

function getclientId() {
  const pathname = window.location.pathname;
  const clientId = pathname.split("/").pop().split(".")[0];
  return clientId.toUpperCase();
}

async function getProducts() {
  const clientId = getclientId();
  const response = await fetch("http://localhost:4000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "client-id": clientId,
    },
    body: JSON.stringify({ query }),
  });

  const result = await response.json();

  return result.data.products;
}

function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
  const image = document.createElement("img");
  image.src = product.thumbnail;
  image.alt = "Product Thumbnail";
  productCard.appendChild(image);
  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");
  const h2 = document.createElement("h2");
  h2.innerText = product.name;
  productInfo.appendChild(h2);
  const description = document.createElement("p");
  description.classList.add("description");
  description.innerText = product.description;
  productInfo.appendChild(description);
  const sku = document.createElement("p");
  sku.classList.add("sku");
  sku.innerHTML = `<strong>SKU:</strong> ${product.sku}`;
  productInfo.appendChild(sku);
  const color = document.createElement("p");
  color.classList.add("color");
  color.innerHTML = `<strong>Color:</strong> ${product.color}`;
  productInfo.appendChild(color);
  const weight = document.createElement("p");
  weight.classList.add("weight");
  weight.innerHTML = `<strong>Weight:</strong> ${product.weight}`;
  productInfo.appendChild(weight);
  productCard.appendChild(productInfo);

  return productCard;
}

async function run() {
  const products = await getProducts();

  products.forEach((product) => {
    const productCard = createProductCard(product);
    const productList = document.querySelector(".product-list");
    productList.appendChild(productCard);
  });
}

run();
