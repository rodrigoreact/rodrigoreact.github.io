/*habilitar carousel*/
const myCarouselElement = document.querySelector('#my-carousel');

/*habilitar los tooltip de bootstrap*/
$( document ).ready(function() {
    $('[data-bs-toggle="tooltip"]').tooltip();
});

/* Incluir un tooltip "Enviar por correo" al bot�n de correo */
$(document).ready(function () {
  $("#btnCorreo").on("click", function (event) {
    event.preventDefault();
    alert("Correo enviado");
  })
  
})