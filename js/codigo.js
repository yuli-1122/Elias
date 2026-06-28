// Activar o pausar la música
const musica = document.getElementById('musica');
const botonMusica = document.getElementById('btnMusica');

botonMusica.addEventListener('click', () => {
    if (musica.paused) {
        musica.play().catch(() => {});
        botonMusica.textContent = "🔇 Pausar música";
    } else {
        musica.pause();
        botonMusica.textContent = "🎵 Activar música";
    }
});

// Generar lluvia de emojis
const contenedorEmojis = document.getElementById('emojis-container');
const emojis = ['❤️', '💖', '💘', '💕', '💓', '🥰', '✨'];

function crearEmoji() {
    const elemento = document.createElement('div');
    elemento.classList.add('emoji');
    elemento.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Posición y velocidad aleatoria
    elemento.style.left = Math.random() * 100 + 'vw';
    elemento.style.animationDuration = (Math.random() * 3 + 3) + 's';
    elemento.style.fontSize = (Math.random() * 1.5 + 1.5) + 'rem';

    contenedorEmojis.appendChild(elemento);

    // Eliminar después de que termine la animación
    setTimeout(() => elemento.remove(), 6000);
}

// Crear un nuevo emoji cada 250ms
setInterval(crearEmoji, 250);
