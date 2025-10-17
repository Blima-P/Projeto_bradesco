// 1. SCROLL SUAVE PARA NAVEGAÇÃO
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 2. EFEITO DE HOVER SUTIL NOS CARTÕES (Apple-like elevation)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-2px)';
        card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        // Usa a variável CSS para reverter o box-shadow
        card.style.boxShadow = 'var(--shadow-light)'; 
    });
});

// 3. ANIMAÇÃO DE ELEMENTOS AO ROLAR (Seções aparecendo suavemente)
// Esta função faz com que os elementos com a classe 'fade-in-up' apareçam com um pequeno atraso e movimento ao entrar na tela.
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1; // Garante que a opacidade seja 1 após a animação
            entry.target.classList.add('fade-in-up-visible'); 
            observer.unobserve(entry.target); // Para de observar após animar uma vez
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(element => {
    observer.observe(element);
});