document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
});

/*CATALOGO*/
document.addEventListener("DOMContentLoaded", function() {
    const catalogoContainer = document.querySelector(".catalogo-container");
  
    // Agregar eventos de desplazamiento al contenedor del catálogo
    catalogoContainer.addEventListener("wheel", function(event) {
      event.preventDefault();
      catalogoContainer.scrollLeft += event.deltaY;
    });
  });