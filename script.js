const btnNo = document.getElementById('btnNo');
const btnYes = document.getElementById('btnYes');
const modal = document.getElementById('successModal');

// Hacer que el botón "No" escape del mouse
btnNo.addEventListener('mouseover', () => {
    const padding = 50; // margen de seguridad

    const maxX = window.innerWidth - btnNo.offsetWidth - padding;
    const maxY = window.innerHeight - btnNo.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btnNo.style.position = 'fixed';
    btnNo.style.left = x + 'px';
    btnNo.style.top = y + 'px';
    btnNo.style.zIndex = '1000';

});


// Cuando hace clic en "SÍ"
btnYes.addEventListener('click', () => {
    modal.classList.remove('hidden');
    // Lanzar confeti de corazones
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10000 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
});