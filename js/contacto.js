document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener valores del formulario
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validar que todos los campos estén completos
    if (!name || !email || !phone || !message) {
        showMessage('error');
        return;
    }

    // Crear objeto con los datos
    const formData = {
        name,
        email,
        phone,
        message,
        timestamp: new Date().toISOString()
    };

    // Guardar en localStorage
    saveToLocalStorage(formData);

    // Mostrar mensaje de éxito
    showMessage('success');

    // Limpiar formulario
    this.reset();
});

function saveToLocalStorage(data) {
    // Obtener datos existentes o inicializar array vacío
    const existingData = JSON.parse(localStorage.getItem('formSubmissions')) || [];

    // Agregar nuevos datos
    existingData.push(data);

    // Guardar de vuelta en localStorage
    localStorage.setItem('formSubmissions', JSON.stringify(existingData));
}

function showMessage(type) {
    // Ocultar todos los mensajes primero
    document.getElementById('successMessage').style.display = 'none';
    document.getElementById('errorMessage').style.display = 'none';

    // Mostrar el mensaje correspondiente
    if (type === 'success') {
        document.getElementById('successMessage').style.display = 'block';
    } else {
        document.getElementById('errorMessage').style.display = 'block';
    }

    // Ocultar mensaje después de 3 segundos
    setTimeout(() => {
        document.getElementById('successMessage').style.display = 'none';
        document.getElementById('errorMessage').style.display = 'none';
    }, 3000);
}