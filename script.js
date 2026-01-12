// Adicionar efeito de clique nos botões
document.querySelectorAll('.link-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Criar efeito de ripple
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Animação de entrada dos elementos
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.link-btn, .promo-banner');
    elements.forEach((el, index) => {
        el.style.animation = `slideIn 0.6s ease ${0.1 * (index + 1)}s both`;
    });
});

// Adicionar som ao clicar (opcional)
function playClickSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

// Contador de visitas (localStorage)
function updateVisitCount() {
    let visits = localStorage.getItem('visitCount') || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem('visitCount', visits);
    console.log(`Visitas: ${visits}`);
}

updateVisitCount();

// Efeito parallax no scroll
window.addEventListener('scroll', () => {
    const particles = document.querySelector('.particles');
    if (particles) {
        particles.style.transform = `translateY(${window.scrollY * 0.5}px)`;
    }
});
