let cart = [];

function addToCart(itemName, itemPrice) {
  cart.push({ name: itemName, price: itemPrice });
  updateCartDisplay();
}

function updateCartDisplay() {
  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  document.getElementById("totalItems").innerText = totalItems;
  document.getElementById("totalPrice").innerText = `$${totalPrice}`;
}
