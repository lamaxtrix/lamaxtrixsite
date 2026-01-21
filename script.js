(() => {
    const documento = document;
    const scriptWidget = documento.createElement("script");
    scriptWidget.type = "module";
    scriptWidget.src = "https://w.behold.so/widget.js";
    documento.head.append(scriptWidget);
})();

window.addEventListener('DOMContentLoaded', () => {
    const tarjetas = document.querySelectorAll('.tarjeta-servicio');
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            window.location.href = '#contacto';
        });
    });

    const botonHamburguesa = document.querySelector('.boton-hamburguesa');
    const menuEnlaces = document.querySelector('.enlaces');
    
    botonHamburguesa.addEventListener('click', () => {
        botonHamburguesa.classList.toggle('activo');
        menuEnlaces.classList.toggle('activo');
    });

    menuEnlaces.querySelectorAll('a').forEach(enlace => {
        enlace.addEventListener('click', () => {
            botonHamburguesa.classList.remove('activo');
            menuEnlaces.classList.remove('activo');
        });
    });
});