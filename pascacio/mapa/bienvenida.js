function showWelcomeAlert() {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'welcome-alert';
    alertDiv.innerHTML = `
        <div class="welcome-alert-content">
            <img src="/mapa/img/welcome.jpeg" alt="Bienvenido">
            <br>
            <button onclick="closeWelcomeAlert()">Cerrar</button>
        </div>
        <div class="welcome-alert-overlay" onclick="closeWelcomeAlert()"></div>
    `;
    document.body.appendChild(alertDiv);
}

function closeWelcomeAlert() {
    const alertDiv = document.querySelector('.welcome-alert');
    if (alertDiv) {
        alertDiv.remove();
        localStorage.setItem('welcomeShown', 'true');
    }
}

window.onload = function() {
    if (!localStorage.getItem('welcomeShown')) {
        showWelcomeAlert();
    }
}