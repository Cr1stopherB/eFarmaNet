const quantityInput = document.getElementById('quantity');
const decreaseBtn = document.querySelector('.decrease');
const increaseBtn = document.querySelector('.increase');
const addToCartBtn = document.querySelector('.add-to-cart');

decreaseBtn.addEventListener('click', () => {
    if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
});

increaseBtn.addEventListener('click', () => {
    if (quantityInput.value < 10) {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    }
});

addToCartBtn.addEventListener('click', () => {
    const quantity = quantityInput.value;
    alert(`¡${quantity} kg de manzanas añadidos al carrito!`);
});