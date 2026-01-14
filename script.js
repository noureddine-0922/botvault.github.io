// 1. نظام الثيمات المصلح
function setTheme(color) {
    document.body.className = `bg-gray-950 text-white scroll-smooth select-none theme-${color}`;
    localStorage.setItem('botVaultTheme', color);
}
setTheme(localStorage.getItem('botVaultTheme') || 'blue');

// 2. إحصائيات حقيقية (محاكاة تعتمد على الجلسة)
function initStats() {
    let total = localStorage.getItem('totalVisits') || 0;
    if(!sessionStorage.getItem('sessionActive')) {
        total++;
        localStorage.setItem('totalVisits', total);
        sessionStorage.setItem('sessionActive', 'true');
    }
    document.getElementById('total-visitors').innerText = total;
    
    // متواجدون الآن (رقم حقيقي عشوائي لغرض الشكل في البداية)
    setInterval(() => {
        let online = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
        document.getElementById('online-now').innerText = online;
    }, 5000);
}

// 3. العداد التنازلي
function initCountdown() {
    let targetTime = localStorage.getItem('botVaultDeadline') || new Date().getTime() + (100 * 24 * 60 * 60 * 1000);
    localStorage.setItem('botVaultDeadline', targetTime);
    setInterval(() => {
        const diff = targetTime - new Date().getTime();
        if (diff <= 0) return;
        document.getElementById('days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById('hours').innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById('minutes').innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('seconds').innerText = Math.floor((diff % (1000 * 60)) / 1000);
    }, 1000);
}

// 4. نظام FAQ
function toggleFaq(btn) {
    const parent = btn.parentElement;
    const content = btn.nextElementSibling;
    parent.classList.toggle('active');
    content.classList.toggle('hidden');
}

// 5. حماية F12
setInterval(() => { const s = new Date(); debugger; if (new Date() - s > 100) window.location.reload(); }, 1000);

// الخلفية
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

initStats();
initCountdown();
