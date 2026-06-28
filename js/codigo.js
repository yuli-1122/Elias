// --- Lógica de la música ---
const musica = document.getElementById('musica');
const btnMusica = document.getElementById('btnMusica');
let reproduciendo = false;

btnMusica.addEventListener('click', () => {
    if (!reproduciendo) {
        musica.play()
            .then(() => {
                reproduciendo = true;
                btnMusica.textContent = '🔇 Pausar música';
            })
            .catch(error => {
                console.log("El navegador bloqueó la reproducción:", error);
            });
    } else {
        musica.pause();
        reproduciendo = false;
        btnMusica.textContent = '🎵 Activar música';
    }
});

document.addEventListener('click', () => {
    if (!reproduciendo) {
        musica.play().then(() => {
            reproduciendo = true;
            btnMusica.textContent = '🔇 Pausar música';
        }).catch(() => {});
    }
}, { once: true });


// --- Lógica de la lluvia de emojis ---
const contenedorEmojis = document.getElementById('emojis-container');
const listaEmojis = ['❤️', '💖', '💗', '💓', '💞', '💕', '💝', '🥰', '😍', '🌹', '✨', '💫'];

function crearEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.textContent = listaEmojis[Math.floor(Math.random() * listaEmojis.length)];

    const posicionX = Math.random() * 100;
    emoji.style.left = `${posicionX}vw`;

    const tamaño = Math.random() * 1.5 + 1.2;
    emoji.style.fontSize = `${tamaño}rem`;

    const duracion = Math.random() * 3 + 4;
    emoji.style.animationDuration = `${duracion}s`;

    contenedorEmojis.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, duracion * 1000);
}
setInterval(crearEmoji, 300);


// --- Lógica Dinámica de la Licencia en Canvas ---
const canvas = document.getElementById('canvasLicencia');
const ctx = canvas.getContext('2d');

const imgLicencia = new Image();
imgLicencia.src = 'img/Licencia_h.png'; // Ruta de tu imagen base

const inputYo = document.getElementById('inputYo');
const inputNovia = document.getElementById('inputNovia');
const inputFirma = document.getElementById('inputFirma');

// Redibujar el Canvas con los textos actuales
function dibujarLicencia() {
    // Definir tamaño nativo del canvas basado en la imagen
    canvas.width = imgLicencia.naturalWidth || 800;
    canvas.height = imgLicencia.naturalHeight || 600;

    // Dibujar la imagen de fondo
    ctx.drawImage(imgLicencia, 0, 0, canvas.width, canvas.height);

    // Ajustes de texto
    ctx.textBaseline = 'middle';

    // 1. Escribir "Yo" (Letra negra)
    ctx.font = 'bold 24px "Poppins", sans-serif';
    ctx.fillStyle = '#000000';
    ctx.fillText("Yo: " + inputYo.value, canvas.width * 0.15, canvas.height * 0.35);

    // 2. Escribir "Mi novia" (Letra negra)
    ctx.fillText("Mi novia: " + inputNovia.value, canvas.width * 0.15, canvas.height * 0.48);

    // 3. Escribir "Firma" (Letra roja y estilo cursivo elegante)
    ctx.font = 'bold 32px "Dancing Script", cursive';
    ctx.fillStyle = '#d62839';
    ctx.fillText("Firma: " + inputFirma.value, canvas.width * 0.15, canvas.height * 0.65);
}

// Escuchar cuando la imagen cargue por primera vez
imgLicencia.onload = () => {
    dibujarLicencia();
};

// Actualizar en tiempo real cuando el usuario escribe en los inputs
inputYo.addEventListener('input', dibujarLicencia);
inputNovia.addEventListener('input', dibujarLicencia);
inputFirma.addEventListener('input', dibujarLicencia);
