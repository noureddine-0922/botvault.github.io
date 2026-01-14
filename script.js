// 1. نظام الثيمات
function setTheme(color) {
    document.body.className = `bg-gray-950 text-white scroll-smooth select-none theme-${color} overflow-x-hidden`;
    localStorage.setItem('botVaultTheme', color);
}
setTheme(localStorage.getItem('botVaultTheme') || 'blue');

// 2. الماوس المتوهج المخصص
const dot = document.getElementById('cursor-dot');
const outline = document.getElementById('cursor-outline');
window.addEventListener('mousemove', (e) => {
    dot.style.left = outline.style.left = `${e.clientX}px`;
    dot.style.top = outline.style.top = `${e.clientY}px`;
    dot.style.transform = outline.style.transform = `translate(-50%, -50%)`;
});

// 3. تأثير الظهور التدريجي (Scroll Reveal)
ScrollReveal().reveal('.reveal', { 
    delay: 200, 
    distance: '50px', 
    origin: 'bottom', 
    duration: 1000, 
    easing: 'cubic-bezier(0.5, 0, 0, 1)' 
});

// 4. زر العودة للأعلى
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop.classList.replace('opacity-0', 'opacity-100');
        backToTop.classList.replace('translate-y-10', 'translate-y-0');
    } else {
        backToTop.classList.replace('opacity-100', 'opacity-0');
        backToTop.classList.replace('translate-y-0', 'translate-y-10');
    }
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// 5. العداد التنازلي
let targetTime = localStorage.getItem('botVaultDeadline') || new Date().getTime() + (100 * 24 * 60 * 60 * 1000);
localStorage.setItem('botVaultDeadline', targetTime);
setInterval(() => {
    const diff = targetTime - new Date().getTime();
    document.getElementById('days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('hours').innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('minutes').innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('seconds').innerText = Math.floor((diff % (1000 * 60)) / 1000);
}, 1000);

// 6. حماية F12
setInterval(() => { const s = new Date(); debugger; if (new Date() - s > 100) window.location.reload(); }, 1000);

// الجزيئات
particlesJS("particles-js", {
    particles: {
        number: { value: 25 },
        color: { value: "#ffffff" },
        opacity: { value: 0.05 },
        size: { value: 1 },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.05 },
        move: { enable: true, speed: 0.5 }
    }
});
