document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
});

/*Click*/
$(document).ready(function() {
    // Cuando se hace clic en un enlace con la clase 'smooth-scroll'
    $('.smooth-scroll').on('click', function(event) {
      // Evitar el comportamiento predeterminado de la navegación
      event.preventDefault();
  
      // Obtener el valor del atributo href del enlace
      var target = $(this).attr('href');
  
      // Desplazarse suavemente al elemento objetivo
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 1000); // Duración de la animación en milisegundos
    });
  });
  