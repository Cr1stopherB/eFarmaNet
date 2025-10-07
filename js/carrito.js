// Obtener carrito desde localStorage
let cart = JSON.parse(localStorage.getItem('carrito')) || [];

// Mostrar productos en el carrito
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('subtotal');
    const shippingElement = document.getElementById('shipping');
    const totalElement = document.getElementById('total');

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart"><p>Tu carrito está vacío</p></div>';
        subtotalElement.textContent = '$0.00';
        shippingElement.textContent = '$0.00';
        totalElement.textContent = '$0.00';
        return;
    }

    let cartHTML = '';
    let subtotal = 0;

    cart.forEach((item, index) => {
        subtotal += item.precio * (item.cantidad || 1);

        cartHTML += `
                    <div class="cart-item">
                        <img src="${item.imagen || 'placeholder.jpg'}" alt="${item.nombre}" class="item-image">
                        <div class="item-info">
                            <div class="item-name">${item.nombre}</div>
                            <div class="item-price">$${item.precio.toFixed(2)}</div>
                            <div class="item-quantity">
                                <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                                <input type="number" class="quantity-input" value="${item.cantidad || 1}" min="1" onchange="updateQuantityInput(${index}, this.value)">
                                <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                            </div>
                        </div>
                        <button class="remove-btn" onclick="removeFromCart(${index})">Eliminar</button>
                    </div>
                `;
    });

    // Calcular totales
    const shipping = subtotal > 0 ? 5.00 : 0.00;
    const total = subtotal + shipping;

    // Actualizar HTML
    cartItems.innerHTML = cartHTML;
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    shippingElement.textContent = `$${shipping.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;
}

// Actualizar cantidad (botones + y -)
function updateQuantity(index, change) {
    if (!cart[index].cantidad) cart[index].cantidad = 1;
    cart[index].cantidad += change;

    if (cart[index].cantidad < 1) cart[index].cantidad = 1;

    localStorage.setItem('carrito', JSON.stringify(cart));
    renderCart();
}

// Actualizar cantidad (input directo)
function updateQuantityInput(index, value) {
    const quantity = parseInt(value) || 1;
    if (quantity < 1) {
        cart[index].cantidad = 1;
    } else {
        cart[index].cantidad = quantity;
    }

    localStorage.setItem('carrito', JSON.stringify(cart));
    renderCart();
}

// Eliminar producto del carrito
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(cart));
    renderCart();
}

// Botón de pagar
document.getElementById('pay-btn').addEventListener('click', function () {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }

    alert('¡Gracias por tu compra!');
    cart = [];
    localStorage.setItem('carrito', JSON.stringify(cart));
    renderCart();
});

// Inicializar carrito al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    renderCart();
});