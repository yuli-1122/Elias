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

// Forzar inicio con la primera interacción en la pantalla
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

// Crear emojis continuamente
setInterval(crearEmoji, 300);
