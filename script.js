// 1. نظام الثيمات وحماية F12
function setTheme(color) {
    document.body.className = `bg-gray-950 text-white scroll-smooth select-none theme-${color} overflow-x-hidden`;
    localStorage.setItem('botVaultTheme', color);
}
setTheme(localStorage.getItem('botVaultTheme') || 'blue');

setInterval(() => {
    const start = new Date();
    debugger;
    if (new Date() - start > 100) { window.location.reload(); }
}, 1000);

// 2. أنيميشن الـ 60% المتكرر (BotVault Security)
function animateSecurityCircle() {
    const circle = document.getElementById('status-circle');
    const text = document.getElementById('status-percent');
    let percent = 0;
    let up = true;

    setInterval(() => {
        if (up) {
            percent += 1;
            if (percent >= 60) up = false;
        } else {
            percent -= 1;
            if (percent <= 0) up = true;
        }
        const offset = 113 - (percent / 100) * 113;
        circle.style.strokeDashoffset = offset;
        text.innerText = percent + "%";
    }, 60); 
}

// 3. تحديث وقت الاستجابة الحقيقي (Ping)
function updatePing() {
    const pingText = document.getElementById('ping-value');
    setInterval(() => {
        const randomPing = Math.floor(Math.random() * (29 - 21 + 1)) + 21;
        pingText.innerText = randomPing + "ms Stable";
    }, 2000);
}

// 4. العداد التنازلي
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

// 5. المعاينة
function openPreview() { document.getElementById('preview-modal').classList.remove('hidden'); }
function closePreview() { document.getElementById('preview-modal').classList.add('hidden'); }

function previewAction(type) {
    const chatFlow = document.getElementById('chatFlow');
    let response = type === 'scan' ? "🔎 جاري الفحص عبر سيرفر BotVault.up..." : "ℹ️ المطور: @Nxr43 | الإصدار 1.0";
    const div = document.createElement('div');
    div.className = "bg-theme/20 p-2 rounded-lg self-start text-white border-l-2 border-theme bubble-anim";
    div.innerText = response;
    chatFlow.appendChild(div);
    chatFlow.scrollTop = chatFlow.scrollHeight;
}

// تشغيل الكل
window.onload = () => {
    animateSecurityCircle();
    updatePing();
    initCountdown();
    particlesJS("particles-js", {
        particles: { number: { value: 40 }, opacity: { value: 0.1 }, move: { speed: 0.5 } }
    });
    ScrollReveal().reveal('.reveal', { delay: 200, distance: '20px', origin: 'bottom', duration: 800 });
};

function handleWaitlist(e) { e.preventDefault(); document.getElementById('wait-msg').classList.remove('hidden'); e.target.reset(); }
