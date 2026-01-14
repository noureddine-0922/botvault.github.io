// 1. نظام الثيمات المطور
function setTheme(color) {
    document.body.className = `bg-gray-950 text-white scroll-smooth select-none theme-${color}`;
    localStorage.setItem('botVaultTheme', color);
}
setTheme(localStorage.getItem('botVaultTheme') || 'blue');

// 2. كود العداد التنازلي المصلح
function initCountdown() {
    let targetDate = localStorage.getItem('botVaultDeadline');
    
    if (!targetDate) {
        // إذا لم يكن مخزن، نضع 100 يوم من الآن
        targetDate = new Date().getTime() + (100 * 24 * 60 * 60 * 1000);
        localStorage.setItem('botVaultDeadline', targetDate);
    }

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('countdown').innerHTML = "تم إطلاق النسخة التجريبية";
            return;
        }

        document.getElementById('days').innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.getElementById('hours').innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById('minutes').innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('seconds').innerText = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
}

// 3. حماية F12
setInterval(() => { const s = new Date(); debugger; if (new Date() - s > 100) window.location.reload(); }, 1000);

// 4. خلفية الجزيئات
particlesJS("particles-js", {
    particles: {
        number: { value: 40 },
        color: { value: "#ffffff" },
        opacity: { value: 0.1 },
        size: { value: 1.2 },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.05 },
        move: { enable: true, speed: 0.6 }
    }
});

initCountdown();
