document.getElementById('formularioRegistro').addEventListener('submit', function (e) {
    e.preventDefault();
    const contraseña = document.getElementById('contraseña').value;
    const confirmarContraseña = document.getElementById('confirm-password').value;

    if (contraseña !== confirmarContraseña) {
        alert('Las contraseñas no coinciden');
        return;
    }

    alert('Registro exitoso. Serás redirigido para iniciar sesión.');
    setTimeout(() => {
        window.location.href = 'inicioSesion.html';
    }, 1000);
});

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    // Obtener usuarios existentes
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

    // Verificar si el email ya está registrado
    if (existingUsers.some(user => user.email === email)) {
        alert('Este correo electrónico ya está registrado.');
        return;
    }

    // Agregar nuevo usuario
    const newUser = { name, email, password };
    existingUsers.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));

    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    setTimeout(() => {
        window.location.href = '../inicioSesion.html';
    }, 1000);
});

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
        alert("Correo inválido. Debe terminar en @gmail.com, @duoc.cl y @profesor.duoc.cl");
        return false;
    }
    if (password.length < 6) {
        alert("Contraseña debe tener entre 4 a 10 caracteres");
        return false;
    }

    alert("Registro exitoso");
    return true;
}