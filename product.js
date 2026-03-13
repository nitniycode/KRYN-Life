const CART_KEY = "kryn_cart";
const PRODUCT_KEY = "kryn_selected_product";

const detailContainer = document.querySelector("#product-detail");

const formatINR = (value) => new Intl.NumberFormat("en-IN").format(value);
const getCart = () => JSON.parse(localStorage.getItem(CART_KEY) || "[]");
const saveCart = (cart) => localStorage.setItem(CART_KEY, JSON.stringify(cart));

function getSelectedProduct() {
  const params = new URLSearchParams(window.location.search);
  const queryId = Number(params.get("id"));
  const stored = JSON.parse(localStorage.getItem(PRODUCT_KEY) || "null");

  if (stored && (!queryId || stored.id === queryId)) return stored;
  return stored;
}

function addToCart(product) {
  const cart = getCart();
  const line = cart.find((item) => item.id === product.id);

  if (line) {
    line.qty += 1;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
  }

  saveCart(cart);
}

function renderProduct() {
  const product = getSelectedProduct();
  if (!product) {
    detailContainer.innerHTML = `
      <div class="empty-detail">
        <h1>Product not found</h1>
        <p>Please go back and select a product from the catalog.</p>
      </div>
    `;
    return;
  }

  detailContainer.innerHTML = `
    <div class="detail-image-wrap">
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <div class="detail-content">
      <p class="detail-category">${product.category}</p>
      <h1>${product.name}</h1>
      <p class="detail-price">₹${formatINR(product.price)}</p>
      <p class="detail-description">${product.description}</p>
      <ul class="detail-points">
        <li>Premium quality and durable stitching.</li>
        <li>Soft touch fabric and all-day comfort fit.</li>
        <li>Easy exchange & returns within 7 days.</li>
      </ul>
      <button id="add-detail-cart" class="primary">Add to Bag</button>
    </div>
  `;

  const addButton = document.querySelector("#add-detail-cart");
  addButton.addEventListener("click", () => {
    addToCart(product);
    addButton.textContent = "Added to Bag ✓";
  });
}

renderProduct();
