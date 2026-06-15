const contenedor = document.getElementById('emojis-container');
const corazones = ['❤️', '💖', '💘', '💕', '💓', '💝', '💞', '✨', '🌹', '🥰', '🫶'];

function crearEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');

    // Emoji aleatorio
    emoji.textContent = corazones[Math.floor(Math.random() * corazones.length)];

    // Posición horizontal aleatoria
    const posX = Math.random() * window.innerWidth;
    emoji.style.left = posX + 'px';

    // Duración de caída (entre 4 y 7 segundos)
    const duracion = 4 + Math.random() * 3;
    emoji.style.animationDuration = duracion + 's';

    // Tamaño aleatorio
    const tamano = 1.4 + Math.random() * 1.6;
    emoji.style.fontSize = tamano + 'rem';

    contenedor.appendChild(emoji);

    // Eliminar después de caer
    setTimeout(() => emoji.remove(), duracion * 1000);
}

// Crear nuevo emoji cada 250ms
setInterval(crearEmoji, 250);
