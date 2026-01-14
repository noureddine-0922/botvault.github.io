// 1. نظام الثيمات المتقدم وحماية F12
function setTheme(color) {
    document.body.className = `bg-gray-950 text-white scroll-smooth select-none theme-${color} overflow-x-hidden`;
    localStorage.setItem('botVaultTheme', color);
}
setTheme(localStorage.getItem('botVaultTheme') || 'blue');

// منع الـ Debugger وأدوات المطورين
setInterval(() => {
    const start = new Date();
    debugger;
    if (new Date() - start > 100) {
        window.location.reload();
    }
}, 1000);

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

// 3. التحكم في المعاينة التفاعلية
function openPreview() { document.getElementById('preview-modal').classList.remove('hidden'); }
function closePreview() { document.getElementById('preview-modal').classList.add('hidden'); }

function previewAction(type) {
    const chatFlow = document.getElementById('chatFlow');
    let response = "";
    
    switch(type) {
        case 'scan': response = "🔎 نظام الفحص العالمي نشط.. أرسل الرابط المراد تحليله."; break;
        case 'vault': response = "🔐 نظام التشفير العسكري نشط. أدخل النص المراد حمايته."; break;
        case 'lang': response = "🌐 تم ضبط لغة الواجهة على: [العربية] بنجاح."; break;
        case 'sig': 
            response = `ℹ️ المطور المعتمد: @Nxr43 <br> 📦 الإصدار: V1.0 Stable <br> 🚀 السيرفر: BotVault.up`; 
            break;
    }

    const div = document.createElement('div');
    div.className = "bg-theme/20 p-2 rounded-lg ml-8 self-start text-white border border-theme/30 bubble-anim";
    div.innerHTML = response;
    
    chatFlow.appendChild(div);
    chatFlow.scrollTop = chatFlow.scrollHeight;

    // إظهار تنبيه التواصل للتجربة الكاملة
    showContactAlert();
}

function showContactAlert() {
    if(!document.getElementById('contact-alert')) {
        const alertDiv = document.createElement('div');
        alertDiv.id = 'contact-alert';
        alertDiv.className = "font-cairo text-[11px]";
        alertDiv.innerHTML = `
            <p class="mb-2 text-white">🚀 لتجربة البوت الحية، تواصل مع المطور:</p>
            <a href="https://t.me/Nxr43" target="_blank" class="bg-theme text-white px-4 py-2 rounded-xl block text-center font-bold shadow-theme">إرسال رسالة لـ @Nxr43</a>
        `;
        document.body.appendChild(alertDiv);
        setTimeout(() => { if(alertDiv) alertDiv.remove(); }, 7000);
    }
}

// 4. الأنظمة التكميلية (الجزيئات والظهور)
particlesJS("particles-js", {
    particles: {
        number: { value: 35 },
        color: { value: "#ffffff" },
        opacity: { value: 0.1 },
        size: { value: 1 },
        move: { enable: true, speed: 0.6 }
    }
});

ScrollReveal().reveal('.reveal', { 
    delay: 200, 
    distance: '20px', 
    origin: 'bottom', 
    duration: 800, 
    interval: 100 
});

function handleWaitlist(e) {
    e.preventDefault();
    document.getElementById('wait-msg').classList.remove('hidden');
    e.target.reset();
}

initCountdown();
