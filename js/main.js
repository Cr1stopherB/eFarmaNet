// main.js
document.addEventListener('DOMContentLoaded', () => {
    // Solo inicializa productos y carrito si existen los contenedores
    if (document.getElementById('productos')) {
        mostrarProductos();
    }
    if (document.getElementById('carrito')) {
        mostrarCarrito();
    }

    // Opcional: puedes inicializar otras cosas si agregas más funciones
});
