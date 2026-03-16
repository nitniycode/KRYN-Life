const CART_KEY = "kryn_cart";

const formatINR = (value) => new Intl.NumberFormat("en-IN").format(value);
const getCart = () => JSON.parse(localStorage.getItem(CART_KEY) || "[]");
const saveCart = (cart) => localStorage.setItem(CART_KEY, JSON.stringify(cart));

const list = document.querySelector("#checkout-items");
const subtotalEl = document.querySelector("#subtotal");
const grandTotalEl = document.querySelector("#grand-total");

function recalc() {
  const lines = getCart();

  list.innerHTML = lines
    .map(
      (line) => `<li>
        <div><strong>${line.name}</strong><br><small>₹${formatINR(line.price)} each</small></div>
        <div class="qty-control">
          <button data-act="dec" data-id="${line.id}" type="button">-</button>
          <span>${line.qty}</span>
          <button data-act="inc" data-id="${line.id}" type="button">+</button>
        </div>
        <strong>₹${formatINR(line.price * line.qty)}</strong>
      </li>`
    )
    .join("");

  const subtotal = lines.reduce((s, l) => s + l.price * l.qty, 0);
  const shipping = lines.length ? 99 : 0;
  subtotalEl.textContent = formatINR(subtotal);
  grandTotalEl.textContent = formatINR(subtotal + shipping);
}

list.addEventListener("click", (event) => {
  const btn = event.target.closest("button[data-id]");
  if (!btn) return;

  const id = Number(btn.dataset.id);
  const act = btn.dataset.act;

  const cart = getCart();
  const line = cart.find((item) => item.id === id);
  if (!line) return;

  if (act === "inc") line.qty += 1;
  if (act === "dec") line.qty -= 1;

  saveCart(cart.filter((item) => item.qty > 0));
  recalc();
});

document.querySelector("#checkout-form").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Order placed successfully 🎉 (Demo realtime checkout)");
  saveCart([]);
  recalc();
});

recalc();
