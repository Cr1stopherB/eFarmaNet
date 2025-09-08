// document.getElementById('loginForm').addEventListener('submit', function (e) {
//     e.preventDefault();
    
//     alert('Inicio de sesión exitoso. Redirigiendo...');
//     setTimeout(() => {
//         window.location.href = '../index.html';
//     }, 1000);
// });

// Función para obtener usuarios registrados desde localStorage
        function getRegisteredUsers() {
            const users = localStorage.getItem('registeredUsers');
            return users ? JSON.parse(users) : [];
        }
        
        // Función para validar credenciales
        function validateCredentials(email, password) {
            const users = getRegisteredUsers();
            
            // Buscar el usuario por email
            const user = users.find(user => user.email === email);
            
            // Si no existe el usuario
            if (!user) {
                return { isValid: false, message: 'El correo electrónico no está registrado.' };
            }
            
            // Si la contraseña no coincide
            if (user.password !== password) {
                return { isValid: false, message: 'La contraseña es incorrecta.' };
            }
            
            // Si las credenciales son válidas
            return { isValid: true, user: user };
        }
        
        // Función para mostrar alertas
        function showAlert(message) {
            const alert = document.getElementById('alert');
            alert.textContent = message;
            alert.style.display = 'block';
            
            // Ocultar la alerta después de 5 segundos
            setTimeout(() => {
                alert.style.display = 'none';
            }, 5000);
        }
        
        // Manejar el envío del formulario
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Validar las credenciales
            const validation = validateCredentials(email, password);
            
            if (validation.isValid) {
                // Guardar información de sesión
                sessionStorage.setItem('currentUser', JSON.stringify(validation.user));
                sessionStorage.setItem('isUserLoggedIn', 'true');
                
                // Redirigir a la página principal
                alert('Inicio de sesión exitoso. Redirigiendo...');
                window.location.href = '../index.html';
            } else {
                // Mostrar mensaje de error
                showAlert(validation.message);
            }
        });
        
        // Verificar si ya hay una sesión activa
        window.addEventListener('DOMContentLoaded', function() {
            const isLoggedIn = sessionStorage.getItem('isUserLoggedIn');
            if (isLoggedIn === 'true') {
                // Redirigir si ya está logueado
                window.location.href = '../index.html';
            }
        });