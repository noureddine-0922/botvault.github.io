// 1. نظام الثيمات
function setTheme(color) {
    document.body.className = `bg-gray-950 text-white scroll-smooth select-none theme-${color} overflow-x-hidden`;
    localStorage.setItem('botVaultTheme', color);
}
setTheme(localStorage.getItem('botVaultTheme') || 'blue');

// 2. العداد التنازلي
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

// 3. التحكم في المعاينة
function openPreview() { document.getElementById('preview-modal').classList.remove('hidden'); }
function closePreview() { document.getElementById('preview-modal').classList.add('hidden'); }

// وظيفة ردود البوت في المعاينة
function previewAction(type) {
    const chatFlow = document.getElementById('chatFlow');
    let msg = "";
    if(type === 'scan') msg = "🔎 وضع فحص الروابط نشط.. يرجى تزويدي بالرابط.";
    if(type === 'vault') msg = "🔐 تم تفعيل التشفير العسكري. أدخل نصك لتأمينه.";
    if(type === 'lang') msg = "🌐 تم ضبط اللغة: العربية. (English soon)";
    if(type === 'sig') msg = "ℹ️ المطور: @Nxr43 | الإصدار: V1.0 | السيرفر: FPS.ms";

    const div = document.createElement('div');
    div.className = "bg-theme/20 p-2 rounded-lg ml-8 self-start text-white border border-theme/30 bubble-anim";
    div.innerHTML = msg;
    chatFlow.appendChild(div);
    chatFlow.scrollTop = chatFlow.scrollHeight;
}

// 4. الإعدادات الأخرى
ScrollReveal().reveal('.reveal', { delay: 200, distance: '30px', origin: 'bottom', duration: 800, interval: 100 });

function handleWaitlist(e) {
    e.preventDefault();
    document.getElementById('wait-msg').classList.remove('hidden');
    e.target.reset();
}

particlesJS("particles-js", {
    particles: { number: { value: 30 }, opacity: { value: 0.1 }, size: { value: 1 }, move: { speed: 0.5 } }
});

initCountdown();
