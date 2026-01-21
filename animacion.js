const lienzo = document.createElement('canvas');
const contexto = lienzo.getContext('2d');
document.getElementById('contenedor-canvas').appendChild(lienzo);

let desplazamiento = 0;
const espaciado = 80;

function setup() {
    lienzo.width = window.innerWidth;
    lienzo.height = window.innerHeight;
}

function draw() {
    contexto.fillStyle = '#000000';
    contexto.fillRect(0, 0, lienzo.width, lienzo.height);
    
    contexto.strokeStyle = 'rgba(252, 186, 3, 0.15)';
    contexto.lineWidth = 0.5;

    for (let x = 0; x <= lienzo.width; x += espaciado) {
        contexto.beginPath();
        contexto.moveTo(x, 0);
        contexto.lineTo(x, lienzo.height);
        contexto.stroke();
    }

    for (let y = (desplazamiento % espaciado); y <= lienzo.height; y += espaciado) {
        contexto.beginPath();
        contexto.moveTo(0, y);
        contexto.lineTo(lienzo.width, y);
        contexto.stroke();
    }

    desplazamiento -= 0.5;
    requestAnimationFrame(draw);
}

setup();
window.addEventListener('resize', setup);
draw();