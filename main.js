const products = [
  { id: 1, name: "Kopi", price: 15000 },
  { id: 2, name: "Teh", price: 8000 },
  { id: 3, name: "Roti", price: 12000 },
];

const productTableBody = document.querySelector("#product-table tbody");
const cartTableBody = document.querySelector("#cart-table tbody");
const cartTotalEl = document.getElementById("cart-total");

const cart = {};

function currency(num) {
  return num.toLocaleString("id-ID");
}

function renderProducts() {
  products.forEach((p) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.name}</td>
      <td>${currency(p.price)}</td>
      <td><button class="btn" onclick="addToCart(${p.id})">Tambah</button></td>
    `;
    productTableBody.appendChild(tr);
  });
}

function renderCart() {
  cartTableBody.innerHTML = "";
  let total = 0;
  Object.values(cart).forEach((item) => {
    const subTotal = item.price * item.qty;
    total += subTotal;
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.name}</td>
      <td>
        <input type="number" min="1" value="${item.qty}" onchange="updateQty(${item.id}, this.value)" />
      </td>
      <td>${currency(item.price)}</td>
      <td>${currency(subTotal)}</td>
      <td><button class="btn btn-danger" onclick="removeItem(${item.id})">Hapus</button></td>
    `;
    cartTableBody.appendChild(tr);
  });
  cartTotalEl.textContent = currency(total);
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  if (!cart[product.id]) {
    cart[product.id] = { ...product, qty: 1 };
  } else {
    cart[product.id].qty += 1;
  }
  renderCart();
}

function updateQty(id, qty) {
  if (cart[id]) {
    cart[id].qty = parseInt(qty, 10);
    if (cart[id].qty <= 0) delete cart[id];
    renderCart();
  }
}

function removeItem(id) {
  delete cart[id];
  renderCart();
}

document.getElementById("checkout-btn").addEventListener("click", () => {
  if (Object.keys(cart).length === 0) {
    alert("Keranjang kosong!");
    return;
  }
  alert(`Total pembayaran: Rp ${cartTotalEl.textContent}\nTerima kasih!`);
  Object.keys(cart).forEach((key) => delete cart[key]);
  renderCart();
});

renderProducts();