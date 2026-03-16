const products = [
  { id: 1, name: "Men Check Shirt - Blue", category: "Men", price: 1499, image: "https://images.unsplash.com/photo-1603252109360-909baaf261c7?auto=format&fit=crop&w=900&q=80" },
  { id: 2, name: "Men Check Shirt - Olive", category: "Men", price: 1599, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80" },
  { id: 3, name: "Men Baggy Jeans - Washed", category: "Men", price: 1899, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80" },
  { id: 4, name: "Men Baggy Pants - Stone", category: "Men", price: 1799, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80" },
  { id: 5, name: "Men Joggers - Charcoal", category: "Men", price: 1399, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80" },
  { id: 6, name: "Men Joggers - Beige", category: "Men", price: 1499, image: "https://images.unsplash.com/photo-1506629905607-45d4f0f74f2d?auto=format&fit=crop&w=900&q=80" },
  { id: 7, name: "Men Oversized Tee - White", category: "Men", price: 899, image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?auto=format&fit=crop&w=900&q=80" },
  { id: 8, name: "Men Oversized Tee - Black", category: "Men", price: 999, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=80" },
  { id: 9, name: "Men Linen Shirt - Sand", category: "Men", price: 1699, image: "https://images.unsplash.com/photo-1593032465171-8bd8f0f4ce4a?auto=format&fit=crop&w=900&q=80" },
  { id: 10, name: "Men Cargo Pants - Utility", category: "Men", price: 1999, image: "https://images.unsplash.com/photo-1614251056216-f748f76cd228?auto=format&fit=crop&w=900&q=80" },
  { id: 11, name: "Men Sneakers - Court White", category: "Men", price: 2599, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80" },
  { id: 12, name: "Men Sneakers - Urban Grey", category: "Men", price: 2799, image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80" },
  { id: 13, name: "Men Sandals - Comfort", category: "Men", price: 1299, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80" },
  { id: 14, name: "Men Denim Jacket", category: "Men", price: 2499, image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&w=900&q=80" },
  { id: 15, name: "Men Baggy Lowers - Black", category: "Men", price: 1499, image: "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=900&q=80" },
  { id: 16, name: "Men Straight Jeans - Indigo", category: "Men", price: 1699, image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=900&q=80" },
  { id: 17, name: "Men Check Shirt - Rust", category: "Men", price: 1549, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80" },
  { id: 18, name: "Men Track Joggers - Navy", category: "Men", price: 1399, image: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?auto=format&fit=crop&w=900&q=80" },
  { id: 19, name: "Men Slip-on Sandals", category: "Men", price: 1199, image: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=900&q=80" },
  { id: 20, name: "Men Knit Polo", category: "Men", price: 1299, image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=900&q=80" },

  { id: 21, name: "Women Jeans - Light Blue", category: "Women", price: 1899, image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?auto=format&fit=crop&w=900&q=80" },
  { id: 22, name: "Women Baggy Jeans - Mid Blue", category: "Women", price: 1999, image: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=900&q=80" },
  { id: 23, name: "Women Cotton Top - White", category: "Women", price: 999, image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?auto=format&fit=crop&w=900&q=80" },
  { id: 24, name: "Women Ribbed Top - Black", category: "Women", price: 1099, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80" },
  { id: 25, name: "Women Co-ord Set - Beige", category: "Women", price: 2499, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80" },
  { id: 26, name: "Women Casual Shirt - Ivory", category: "Women", price: 1499, image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=80" },
  { id: 27, name: "Women Wide Pants - Sand", category: "Women", price: 1699, image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=900&q=80" },
  { id: 28, name: "Women Crop Top - Dusty Rose", category: "Women", price: 899, image: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?auto=format&fit=crop&w=900&q=80" },
  { id: 29, name: "Women Sneakers - Minimal White", category: "Women", price: 2699, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80" },
  { id: 30, name: "Women Sneakers - Street Beige", category: "Women", price: 2799, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=80" },
  { id: 31, name: "Women Sandals - Flat Tan", category: "Women", price: 1399, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80" },
  { id: 32, name: "Women Sandals - Strappy Black", category: "Women", price: 1499, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80" },
  { id: 33, name: "Women Heels - Nude", category: "Women", price: 2199, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80" },
  { id: 34, name: "Women Heels - Classic Black", category: "Women", price: 2299, image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&w=900&q=80" },
  { id: 35, name: "Women Printed Top - Floral", category: "Women", price: 1199, image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80" },
  { id: 36, name: "Women Baggy Pants - White", category: "Women", price: 1799, image: "https://images.unsplash.com/photo-1499939667766-4afceb292d05?auto=format&fit=crop&w=900&q=80" },
  { id: 37, name: "Women Jeans - Dark Blue", category: "Women", price: 1899, image: "https://images.unsplash.com/photo-1465406325903-9d93ee82f613?auto=format&fit=crop&w=900&q=80" },
  { id: 38, name: "Women Lounge Set", category: "Women", price: 2099, image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=80" },
  { id: 39, name: "Women Formal Shirt - Blue", category: "Women", price: 1599, image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=900&q=80" },
  { id: 40, name: "Women Party Top - Satin", category: "Women", price: 1299, image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=900&q=80" }
];

const pageType = document.body.dataset.page || "home";
const forcedCategory = pageType === "men" ? "Men" : pageType === "women" ? "Women" : "all";

const state = { filtered: [...products], visibleCount: 20 };
const CART_KEY = "kryn_cart";
const PRODUCT_KEY = "kryn_selected_product";

const grid = document.querySelector("#product-grid");
const resultCount = document.querySelector("#result-count");
const search = document.querySelector("#search");
const categoryFilter = document.querySelector("#category-filter");
const sortFilter = document.querySelector("#sort-filter");
const cartBtn = document.querySelector("#cart-btn");
const cartPanel = document.querySelector("#cart-panel");
const closeCart = document.querySelector("#close-cart");
const cartItems = document.querySelector("#cart-items");
const cartCount = document.querySelector("#cart-count");
const cartTotal = document.querySelector("#cart-total");
const checkoutBtn = document.querySelector(".checkout");
const loadMoreBtn = document.querySelector("#load-more-btn");

const formatINR = (value) => new Intl.NumberFormat("en-IN").format(value);
const getCart = () => JSON.parse(localStorage.getItem(CART_KEY) || "[]");
const saveCart = (cart) => localStorage.setItem(CART_KEY, JSON.stringify(cart));

function renderProducts(items) {
  const visibleItems = items.slice(0, state.visibleCount);

  grid.innerHTML = visibleItems
    .map(
      (product) => `
      <article class="product" data-product-id="${product.id}">
        <img src="${product.image}" alt="${product.name}" />
        <div class="product-info">
          <h3>${product.name}</h3>
          <p class="meta">${product.category}</p>
          <strong>₹${formatINR(product.price)}</strong>
          <button class="primary" data-id="${product.id}">Add to Bag</button>
        </div>
      </article>
    `
    )
    .join("");

  resultCount.textContent = `Showing ${visibleItems.length} of ${items.length} items`;

  if (loadMoreBtn) {
    if (state.visibleCount >= items.length) {
      loadMoreBtn.classList.add("hidden");
    } else {
      loadMoreBtn.classList.remove("hidden");
    }
  }
}

function applyFilters() {
  const query = search.value.trim().toLowerCase();
  const category = forcedCategory === "all" ? (categoryFilter ? categoryFilter.value : "all") : forcedCategory;
  const sort = sortFilter ? sortFilter.value : "featured";

  let updated = products.filter((product) => {
    const matchesCategory = category === "all" || product.category === category;
    const matchesQuery = product.name.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  if (sort === "low") updated.sort((a, b) => a.price - b.price);
  if (sort === "high") updated.sort((a, b) => b.price - a.price);

  state.filtered = updated;
  state.visibleCount = 20;
  renderProducts(updated);
}

function animateAddToCart(productId) {
  const card = document.querySelector(`[data-product-id="${productId}"]`);
  if (card) {
    card.classList.remove("added");
    void card.offsetWidth;
    card.classList.add("added");
  }

  cartBtn.classList.remove("bump");
  void cartBtn.offsetWidth;
  cartBtn.classList.add("bump");

  cartCount.classList.remove("flash");
  void cartCount.offsetWidth;
  cartCount.classList.add("flash");

  cartPanel.classList.remove("pulse");
  void cartPanel.offsetWidth;
  cartPanel.classList.add("pulse");
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const cart = getCart();
  const line = cart.find((item) => item.id === productId);
  if (line) {
    line.qty += 1;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
  }
  saveCart(cart);
}

function openProductDetails(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const selectedProduct = {
    ...product,
    description:
      product.category === "Men"
        ? "Designed for everyday comfort with a modern silhouette. This piece pairs easily with denim, joggers, or chinos and is built with breathable fabric for all-day wear."
        : "Crafted for versatile styling with a flattering fit. This piece transitions from day to evening and works beautifully with sneakers, flats, or heels.",
  };

  localStorage.setItem(PRODUCT_KEY, JSON.stringify(selectedProduct));
  window.location.href = `product.html?id=${product.id}`;
}

function renderCart() {
  const cart = getCart();

  cartItems.innerHTML = cart
    .map((item) => `<li><span>${item.name} x${item.qty}</span><strong>₹${formatINR(item.qty * item.price)}</strong></li>`)
    .join("");

  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  cartTotal.textContent = formatINR(total);
  cartCount.textContent = count;
}

grid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-id]");
  if (button) {
    const id = Number(button.dataset.id);
    addToCart(id);
    renderCart();
    animateAddToCart(id);
    return;
  }

  const card = event.target.closest(".product[data-product-id]");
  if (!card) return;

  const id = Number(card.dataset.productId);
  openProductDetails(id);
});

[search, categoryFilter, sortFilter].filter(Boolean).forEach((input) => {
  input.addEventListener("input", applyFilters);
  input.addEventListener("change", applyFilters);
});

cartBtn.addEventListener("click", () => cartPanel.classList.toggle("hidden"));
closeCart.addEventListener("click", () => cartPanel.classList.add("hidden"));

if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    window.location.href = "checkout.html";
  });
}


if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", () => {
    state.visibleCount += 20;
    renderProducts(state.filtered);
  });
}

if (categoryFilter && forcedCategory !== "all") {
  categoryFilter.value = forcedCategory;
  categoryFilter.setAttribute("disabled", "disabled");
}

applyFilters();
renderCart();
