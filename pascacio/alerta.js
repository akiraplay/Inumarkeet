// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el botón que abre el modal
var btn = document.getElementById("openModalBtn");

// Obtener el <span> que cierra el modal
var span = document.getElementsByClassName("closeBtn")[0];

// Cuando el usuario haga clic en el botón, se abre el modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario haga clic en <span> (x), se cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario haga clic fuera del modal, se cierra
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
