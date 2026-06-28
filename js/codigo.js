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
                console.log("El navegador bloqueó la música:", error);
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


// --- Lógica de Escritura Interactiva Real en Pantalla ---
const inputYo = document.getElementById('inputYo');
const inputNovia = document.getElementById('inputNovia');
const inputFirma = document.getElementById('inputFirma');

const txtYo = document.getElementById('txtYo');
const txtNovia = document.getElementById('txtNovia');
const txtFirma = document.getElementById('txtFirma');

// Sincronización inmediata letra por letra
inputYo.addEventListener('input', () => {
    txtYo.textContent = "Yo: " + inputYo.value;
});

inputNovia.addEventListener('input', () => {
    txtNovia.textContent = "Mi novia: " + inputNovia.value;
});

inputFirma.addEventListener('input', () => {
    txtFirma.textContent = "Firma: " + inputFirma.value;
});
