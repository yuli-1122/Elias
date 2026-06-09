document.addEventListener('DOMContentLoaded', function() {
    const musica = document.getElementById('musicaFondo');
    musica.volume = 0.5;

    const iniciarMusica = () => {
        musica.play().then(() => {
            console.log("Música iniciada correctamente");
            document.removeEventListener('click', iniciarMusica);
            document.removeEventListener('touchstart', iniciarMusica);
            document.removeEventListener('keydown', iniciarMusica);
        }).catch(err => {
            console.warn("El navegador bloqueó el audio. Esperando clic del usuario.");
        });
    };

    document.addEventListener('click', iniciarMusica);
    document.addEventListener('touchstart', iniciarMusica);
    document.addEventListener('keydown', iniciarMusica);

    musica.addEventListener('error', function() {
    console.error("No se pudo encontrar el archivo: musica/cancion.mp3"); // SIN TILDE
    alert("No se encontró el archivo de música.");

    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            console.error("Error: No se encontró la imagen en: " + this.src);
            this.style.backgroundColor = "#ff4d6d";
        });
    });

    const inputNombre = document.getElementById('input-nombre');
    const inputDuena = document.getElementById('input-duena');
    const inputFirma = document.getElementById('input-firma');
    
    const previewNombre = document.getElementById('preview-nombre');
    const previewDuena = document.getElementById('preview-duena');
    const previewFirma = document.getElementById('preview-firma');

    if(inputNombre) {
        inputNombre.addEventListener('input', function(e) {
            previewNombre.textContent = e.target.value;
        });
    }
    if(inputDuena) {
        inputDuena.addEventListener('input', function(e) {
            previewDuena.textContent = e.target.value;
        });
    }
    if(inputFirma) {
        inputFirma.addEventListener('input', function(e) {
            previewFirma.textContent = e.target.value;
        });
    }

    function crearElementoCaida() {
        const el = document.createElement('div');
        el.classList.add('corazon-caida');
        const iconos = ['💖', '💫', '✨', '🌸', '❤️'];
        el.innerHTML = iconos[Math.floor(Math.random() * iconos.length)];
        el.style.left = Math.random() * 100 + 'vw';
        el.style.animationDuration = Math.random() * 3 + 2 + 's';
        el.style.opacity = Math.random();
        el.style.fontSize = Math.random() * 20 + 15 + 'px';
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 5000);
    }

    setInterval(crearElementoCaida, 400);
});
