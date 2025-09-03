// =====================
// FUNCIONES DE VALIDACIÓN
// =====================

// Validar correo Gmail
function validarCorreoGmail(email) {
    email = email.trim().toLowerCase();
    return email.endsWith('@gmail.com');
}

// Login
function validarLogin() {
    const email = document.getElementById('email-login').value.trim();
    const password = document.getElementById('password-login').value.trim();

    if (!validarCorreoGmail(email)) {
        alert("Correo inválido. Debe terminar en @gmail.com");
        return false;
    }
    if (password.length < 6) {
        alert("Contraseña debe tener al menos 6 caracteres");
        return false;
    }

    alert("Login exitoso");
    return true;
}

// Registro
function validarRegistro() {
    const nombre = document.getElementById('nombre-reg').value.trim();
    const email = document.getElementById('email-reg').value.trim();
    const password = document.getElementById('password-reg').value.trim();

    if (nombre === "") {
        alert("Debe ingresar un nombre");
        return false;
    }
    if (!validarCorreoGmail(email)) {
        alert("Correo inválido. Debe terminar en @gmail.com");
        return false;
    }
    if (password.length < 6) {
        alert("Contraseña debe tener al menos 6 caracteres");
        return false;
    }

    alert("Registro exitoso");
    return true;
}

// Contacto
function validarContacto() {
    const nombre = document.getElementById('nombre-contacto').value.trim();
    const email = document.getElementById('email-contacto').value.trim();
    const mensaje = document.getElementById('mensaje-contacto').value.trim();

    if (nombre === "") {
        alert("Debe ingresar su nombre");
        return false;
    }
    if (!validarCorreoGmail(email)) {
        alert("Correo inválido. Debe terminar en @gmail.com");
        return false;
    }
    if (mensaje === "") {
        alert("Debe ingresar un mensaje");
        return false;
    }

    alert("Mensaje enviado correctamente");
    return true;
}

// =====================
// PRODUCTOS Y CARRITO
// =====================

// Lista de productos
const productos = [
    { id: 1, nombre: "Paracetamol", precio: 500 },
    { id: 2, nombre: "Ibuprofeno", precio: 700 },
    { id: 3, nombre: "Vitamina C", precio: 800 },
    { id: 4, nombre: "Jabón Antibacterial", precio: 300 }
];

// Carrito (LocalStorage)
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Mostrar productos en pantalla
function mostrarProductos() {
    const divProductos = document.getElementById('productos');
    if (!divProductos) return;

    divProductos.innerHTML = "";
    productos.forEach(producto => {
        const card = document.createElement('div');
        card.className = "col-md-3 mb-3";
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Precio: $${producto.precio}</p>
                    <button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
                </div>
            </div>
        `;
        divProductos.appendChild(card);
    });
}

// Agregar producto al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

// Mostrar carrito
function mostrarCarrito() {
    const divCarrito = document.getElementById('carrito');
    if (!divCarrito) return;

    divCarrito.innerHTML = "";
    if (carrito.length === 0) {
        divCarrito.innerHTML = "<p>El carrito está vacío</p>";
        return;
    }

    carrito.forEach((producto, index) => {
        const item = document.createElement('div');
        item.className = "d-flex justify-content-between align-items-center mb-2";
        item.innerHTML = `
            <span>${producto.nombre} - $${producto.precio}</span>
            <button class="btn btn-sm btn-danger" onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        divCarrito.appendChild(item);
    });

    // Total
    const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
    const totalDiv = document.createElement('p');
    totalDiv.className = "mt-2 font-weight-bold";
    totalDiv.textContent = `Total: $${total}`;
    divCarrito.appendChild(totalDiv);
}

// Eliminar producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

// =====================
// INICIALIZACIÓN
// =====================
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
    mostrarCarrito();
});