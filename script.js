// 1. نظام الثيمات
function setTheme(color) {
    document.body.className = `bg-gray-950 text-white scroll-smooth select-none theme-${color} overflow-x-hidden`;
    localStorage.setItem('botVaultTheme', color);
}
setTheme(localStorage.getItem('botVaultTheme') || 'blue');

// 2. العداد التنازلي الثابت
function initCountdown() {
    let targetDate = localStorage.getItem('botVaultDeadline') || new Date().getTime() + (100 * 24 * 60 * 60 * 1000);
    localStorage.setItem('botVaultDeadline', targetDate);

    setInterval(() => {
        const diff = targetDate - new Date().getTime();
        if (diff < 0) return;
        document.getElementById('days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById('hours').innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById('minutes').innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('seconds').innerText = Math.floor((diff % (1000 * 60)) / 1000);
    }, 1000);
}

// 3. تأثير الظهور الناعم (Scroll Reveal)
ScrollReveal().reveal('.reveal', { 
    delay: 200, 
    distance: '30px', 
    origin: 'bottom', 
    duration: 800, 
    interval: 100 
});

// 4. التحكم في نافذة المعاينة
function openPreview() { document.getElementById('preview-modal').classList.remove('hidden'); }
function closePreview() { document.getElementById('preview-modal').classList.add('hidden'); }

// 5. قائمة الانتظار
function handleWaitlist(e) {
    e.preventDefault();
    document.getElementById('wait-msg').classList.remove('hidden');
    e.target.reset();
}

// 6. حماية F12
setInterval(() => { const s = new Date(); debugger; if (new Date() - s > 100) window.location.reload(); }, 1000);

// 7. جزيئات الخلفية
particlesJS("particles-js", {
    particles: {
        number: { value: 30 },
        color: { value: "#ffffff" },
        opacity: { value: 0.1 },
        size: { value: 1 },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.05 },
        move: { enable: true, speed: 0.5 }
    }
});

initCountdown();
