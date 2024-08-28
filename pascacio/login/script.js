// Seleccionar elementos necesarios del DOM
const dropdownInput = document.getElementById('persona_confianza');
const dropdownList = document.querySelector('.dropdown-list');

// Mostrar u ocultar la lista desplegable al hacer clic en el input
dropdownInput.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el clic se propague al documento
    const isDisplayed = dropdownList.style.display === 'block';
    dropdownList.style.display = isDisplayed ? 'none' : 'block';
});

// Agregar evento de clic a cada elemento <li> del dropdown
dropdownList.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
        dropdownInput.value = item.textContent; // Actualizar el valor del input con el texto del item
        dropdownList.style.display = 'none'; // Ocultar la lista desplegable después de seleccionar
    });
});

// Ocultar la lista desplegable si se hace clic fuera de ella
document.addEventListener('click', (e) => {
    if (!dropdownInput.contains(e.target) && !dropdownList.contains(e.target)) {
        dropdownList.style.display = 'none';
    }
});

// Script de la geolocalización
document.getElementById('geolocateBtn').addEventListener('click', (e) => {
    e.preventDefault(); // Evita el envío del formulario para manejar la geolocalización
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById('location').textContent = "Geolocation is not supported by this browser.";
    }
});

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    document.getElementById('latitud').value = latitude;
    document.getElementById('longitud').value = longitude;
    document.getElementById('location').textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('location').textContent = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('location').textContent = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById('location').textContent = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('location').textContent = "An unknown error occurred.";
            break;
    }
}

// Redirige a mapa.html al enviar el formulario
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario para manejar la redirección
    // Puedes agregar aquí cualquier lógica de validación o procesamiento adicional si es necesario

    // Redirige a mapa.html
    window.location.href = 'pascacio/mapa/mapa.html';
});
