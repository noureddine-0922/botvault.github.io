// 1. نظام الثيمات (تغيير الألوان وحفظها)
function setTheme(color) {
    document.body.className = `bg-gray-950 text-white scroll-smooth select-none theme-${color}`;
    localStorage.setItem('botVaultTheme', color);
}

// تحميل الثيم عند فتح الموقع
const savedTheme = localStorage.getItem('botVaultTheme') || 'blue';
setTheme(savedTheme);

// 2. العداد التنازلي الثابت (LocalStorage)
function initCountdown() {
    let targetTime = localStorage.getItem('botVaultDeadline');
    if (!targetTime) {
        targetTime = new Date().getTime() + (100 * 24 * 60 * 60 * 1000);
        localStorage.setItem('botVaultDeadline', targetTime);
    }

    setInterval(() => {
        const diff = targetTime - new Date().getTime();
        if (diff <= 0) {
            document.getElementById('countdown').innerHTML = "<p class='text-theme font-bold'>تم الإطلاق!</p>";
            return;
        }
        document.getElementById('days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById('hours').innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById('minutes').innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('seconds').innerText = Math.floor((diff % (1000 * 60)) / 1000);
    }, 1000);
}

// 3. حماية الكود (Anti-F12)
setInterval(() => {
    const start = new Date();
    debugger;
    if (new Date() - start > 100) window.location.reload();
}, 1000);

// 4. معالجة نموذج البريد
function handlePreRegister(e) {
    e.preventDefault();
    document.getElementById('reg-msg').classList.remove('hidden');
    e.target.reset();
}

// 5. الخلفية المتحركة
particlesJS("particles-js", {
    particles: {
        number: { value: 40 },
        color: { value: "#ffffff" },
        opacity: { value: 0.1 },
        size: { value: 1 },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.05 },
        move: { enable: true, speed: 1 }
    }
});

function toggleChat() { document.getElementById('chat-box').classList.toggle('hidden'); }

initCountdown();
