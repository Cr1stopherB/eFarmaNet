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


// Obtener la página actual
const currentPage = window.location.pathname;

// Seleccionar todos los enlaces
const links = document.querySelectorAll('.nav-link');

// Buscar y activar el enlace correspondiente
links.forEach(link => {
    if (link.href.includes(currentPage)) {
        link.classList.add('active');
    }
});