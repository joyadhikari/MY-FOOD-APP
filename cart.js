document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".add-cart-btn");
  const cartCount = document.getElementById("cart-count");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cartCount) {
    cartCount.textContent = getTotalQuantity(cart);
  }

  // =============================
  // ADD TO CART (NO REPEAT)
  // =============================
  buttons.forEach(button => {
    button.addEventListener("click", () => {

      const card = button.closest(".recipe-card, .main-featured");
      const titleElement =
        card.querySelector("h3") || card.querySelector("h4");
      const priceElement = card.querySelector(".price");

      const name = titleElement.innerText;
      const price = parseFloat(priceElement.innerText.replace("$", ""));

      const existingItem = cart.find(item => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ name, price, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      if (cartCount) {
        cartCount.textContent = getTotalQuantity(cart);
      }

      button.textContent = "✔ Added";
      button.style.background = "#28a745";

      setTimeout(() => {
        button.textContent = "+ Add to Cart";
        button.style.background = "";
      }, 800);
    });
  });

  // =============================
  // DISPLAY CART
  // =============================
  const cartItemsContainer = document.getElementById("cart-items");
  const totalSection = document.querySelector(".total");

  if (cartItemsContainer) {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      total += item.price * item.quantity;

      cartItemsContainer.innerHTML += `
        <div class="cart-item">
          <div class="item-info">
            <h3>${item.name}</h3>
            <p>$${item.price.toFixed(2)} × ${item.quantity}</p>
          </div>
          <button onclick="removeItem(${index})">Remove</button>
        </div>
      `;
    });

    if (totalSection) {
      totalSection.innerHTML =
        `<h2>Total: $${total.toFixed(2)}</h2>`;
    }
  }

});

// =============================
// REMOVE ITEM
// =============================
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

// =============================
// TOTAL QUANTITY COUNT
// =============================
function getTotalQuantity(cart) {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}