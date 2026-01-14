// 1. نظام الثيمات المتقدم وحماية F12
function setTheme(color) {
    document.body.className = `bg-gray-950 text-white scroll-smooth select-none theme-${color} overflow-x-hidden`;
    localStorage.setItem('botVaultTheme', color);
}
setTheme(localStorage.getItem('botVaultTheme') || 'blue');

// منع أدوات المطورين
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
function openPreview() { 
    const modal = document.getElementById('preview-modal');
    modal.classList.remove('hidden'); 
    modal.firstElementChild.classList.remove('scale-95', 'opacity-0');
    modal.firstElementChild.classList.add('scale-100', 'opacity-100');
}

function closePreview() { 
    document.getElementById('preview-modal').classList.add('hidden'); 
}

function previewAction(type) {
    const chatFlow = document.getElementById('chatFlow');
    let response = "";
    
    switch(type) {
        case 'scan': response = "🔎 جاري الاتصال بخوادم الفحص... أرسل الرابط."; break;
        case 'vault': response = "🔐 التشفير العسكري (AES-256) جاهز. أدخل البيانات."; break;
        case 'lang': response = "🌐 System Language set to: [Arabic - العربية]."; break;
        case 'sig': 
            response = `ℹ️ Dev Info:<br>User: @Nxr43 <br>Ver: 1.0 <br>Host: BotVault.up (Online)`; 
            break;
    }

    const div = document.createElement('div');
    div.className = "bg-theme/20 p-2 rounded-lg rounded-tl-none ml-8 self-start text-white border-l-2 border-theme bubble-anim";
    div.innerHTML = response;
    
    chatFlow.appendChild(div);
    chatFlow.scrollTop = chatFlow.scrollHeight;

    // إظهار تنبيه التواصل
    showContactAlert();
}

function showContactAlert() {
    if(!document.getElementById('contact-alert')) {
        const alertDiv = document.createElement('div');
        alertDiv.id = 'contact-alert';
        alertDiv.className = "font-cairo text-[11px]";
        alertDiv.innerHTML = `
            <div class="flex items-center gap-2 mb-2">
                <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <p class="text-white font-bold">المطور متصل الآن</p>
            </div>
            <a href="https://t.me/Nxr43" target="_blank" class="bg-theme/90 hover:bg-theme text-white px-4 py-2 rounded-xl block text-center font-bold shadow-theme transition-all">تواصل مع @Nxr43 💬</a>
        `;
        document.body.appendChild(alertDiv);
        setTimeout(() => { if(alertDiv) alertDiv.remove(); }, 7000);
    }
}

// 4. الإعدادات الأخرى
particlesJS("particles-js", {
    particles: {
        number: { value: 40 },
        color: { value: "#ffffff" },
        opacity: { value: 0.1 },
        size: { value: 1.5 },
        move: { enable: true, speed: 0.4 }
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
