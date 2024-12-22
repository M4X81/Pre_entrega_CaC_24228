let cart = JSON.parse(localStorage.getItem("cart")) || []; 

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const clearCartButton = document.getElementById("clear-cart");
const totalQuantityDisplay = document.getElementById("cart-total-quantity")

// Actualizar el DOM con el contenido del carrito
function renderCart() {
  cartItems.innerHTML = ""; 
  let total = 0;
  let totalQuantity = 0

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} x${item.quantity} - $${item.price * item.quantity}`;
    
    const removeButton = document.createElement("button");
    removeButton.textContent = "Eliminar";
    removeButton.onclick = () => removeFromCart(item.id);
    li.appendChild(removeButton);

    cartItems.appendChild(li);

    total += item.price * item.quantity;
    totalQuantity += item.quantity;
  });

  cartTotal.textContent = total; 
  totalQuantityDisplay.textContent = `Cantidad total: ${totalQuantity}`;
}

// Agregar producto
function addToCart(id, name, price) {

  const existingProduct = cart.find((item) => item.id === id);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }

  saveCart(); 
  renderCart(); 
}
//Eliminar producto
function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id); 
  saveCart(); 
  renderCart(); 
}

// Vaciar carrito
clearCartButton.addEventListener("click", () => {
  cart = [];
  saveCart(); 
  renderCart(); 
});

// Guardar en localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".add-to-cart").forEach((button) => {
      button.addEventListener("click", (e) => {
        const productCard = e.target.closest(".product-cart");
        if (!productCard) {
          console.error("Error: El contenedor del producto no se encontró.");
          return;
        }
  
        const id = parseInt(productCard.dataset.id);
        const name = productCard.dataset.name;
        const price = parseFloat(productCard.dataset.price);
  
        addToCart(id, name, price);
      });
    });
});
document.getElementById("back-to-cart").addEventListener("click", () => {
  window.location.href = "/pages/store.html"; 
});

renderCart();
