// --- Lógica de la música ---
const musica = document.getElementById('musica');
const btnMusica = document.getElementById('btnMusica');
let reproduciendo = false;

// Al hacer clic en el botón
btnMusica.addEventListener('click', () => {
    if (!reproduciendo) {
        musica.play()
            .then(() => {
                reproduciendo = true;
                btnMusica.textContent = '🔇 Pausar música';
            })
            .catch(error => {
                console.log("El navegador bloqueó la reproducción automática:", error);
            });
    } else {
        musica.pause();
        reproduciendo = false;
        btnMusica.textContent = '🎵 Activar música';
    }
});

// También activar música al primer clic en cualquier parte de la página
document.addEventListener('click', () => {
    if (!reproduciendo) {
        musica.play().catch(() => {});
    }
}, { once: true });


// --- Lógica de la lluvia de emojis ---
const contenedorEmojis = document.getElementById('emojis-container');
const listaEmojis = ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💖', '💗', '💓', '💞', '💕', '💝', '🥰', '😍', '🌹', '✨', '💫'];

function crearEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');

    // Emoji aleatorio
    emoji.textContent = listaEmojis[Math.floor(Math.random() * listaEmojis.length)];

    // Posición horizontal aleatoria
    const posicionX = Math.random() * 100;
    emoji.style.left = `${posicionX}vw`;

    // Tamaño aleatorio
    const tamaño = Math.random() * 1.5 + 1.2;
    emoji.style.fontSize = `${tamaño}rem`;

    // Duración de caída aleatoria
    const duracion = Math.random() * 3 + 4;
    emoji.style.animationDuration = `${duracion}s`;

    contenedorEmojis.appendChild(emoji);

    // Eliminar el emoji después de que termine la animación
    setTimeout(() => {
        emoji.remove();
    }, duracion * 1000);
}

// Crear emojis cada 300ms
setInterval(crearEmoji, 300);
