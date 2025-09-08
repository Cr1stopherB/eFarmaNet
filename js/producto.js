// Variable global para simular el estado de autenticación
let isUserLoggedIn = false;

// Función para agregar producto al carrito
function añadirProducto(productId) {
    if (!isUserLoggedIn) {
        // Mostrar alerta si el usuario no está registrado
        showAlert();
        return;
    }

    // Lógica para agregar al carrito (solo si está registrado)
    console.log(`Producto ${productId} agregado al carrito`);

    const alert = document.getElementById('alert');
    alert.textContent = `¡Producto ${productId} agregado al carrito exitosamente!`;
    alert.className = 'alert alert-success';
    alert.style.display = 'block';

    setTimeout(() => {
        alert.style.display = 'none';
    }, 3000);
}

// Función para mostrar alerta de registro requerido
function mostrarAlerta() {
    const alert = document.getElementById('alert');
    alert.textContent = 'Debes registrarte primero para agregar productos al carrito.';
    alert.className = 'alert alert-warning';
    alert.style.display = 'block';

    // Ocultar la alerta después de 5 segundos
    setTimeout(() => {
        alert.style.display = 'none';
    }, 5000);
}

// Funciones para simular inicio y cierre de sesión
function login() {
    isUserLoggedIn = true;
    updateUserStatus();

    const alert = document.getElementById('alert');
    alert.textContent = '¡Sesión iniciada correctamente! Ya puedes agregar productos al carrito.';
    alert.className = 'alert alert-success';
    alert.style.display = 'block';

    setTimeout(() => {
        alert.style.display = 'none';
    }, 3000);
}

function logout() {
    isUserLoggedIn = false;
    updateUserStatus();

    const alert = document.getElementById('alert');
    alert.textContent = 'Sesión cerrada. Para agregar productos, inicia sesión nuevamente.';
    alert.className = 'alert alert-warning';
    alert.style.display = 'block';

    setTimeout(() => {
        alert.style.display = 'none';
    }, 3000);
}

// Actualizar la interfaz según el estado de autenticación
function updateUserStatus() {
    const userStatus = document.getElementById('userStatus');
    if (isUserLoggedIn) {
        userStatus.textContent = 'Estado actual: Registrado';
        userStatus.className = 'user-status logged-in';
    } else {
        userStatus.textContent = 'Estado actual: No registrado';
        userStatus.className = 'user-status logged-out';
    }
}

// Inicializar estado al cargar la página
updateUserStatus();