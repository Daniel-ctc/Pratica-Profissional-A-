// Sombra/blur no menu ao rolar
const menu = document.querySelector('.menu');
window.addEventListener('scroll', () => {
    menu.classList.toggle('scrolled', window.scrollY > 10);
});

// Animação de entrada nos elementos com .reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('reveal-visible');
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Parallax sutil no banner (leve para performance)
const hero = document.querySelector('.hero');
let ticking = false;
function parallax() {
    const y = window.scrollY * 0.25;
    if (hero) hero.style.backgroundPosition = `center calc(50% + ${y}px)`;
    ticking = false;
}
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(parallax);
        ticking = true;
    }
});
parallax();

// Foco visível para navegação por teclado (acessibilidade extra)
document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
    }
});
document.addEventListener('mousedown', function () {
    document.body.classList.remove('user-is-tabbing');
});

// Scroll suave para âncoras internas (se usar #links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});