// 1. نظام العداد الذكي مع التخزين المحلي (Persistent Countdown)
function initCountdown() {
    let targetTime = localStorage.getItem('botVaultDeadline');

    // إذا لم يكن هناك تاريخ محفوظ، نحدد 100 يوم من الآن
    if (!targetTime) {
        targetTime = new Date().getTime() + (100 * 24 * 60 * 60 * 1000);
        localStorage.setItem('botVaultDeadline', targetTime);
    }

    setInterval(() => {
        const now = new Date().getTime();
        const diff = targetTime - now;

        if (diff <= 0) {
            document.getElementById('countdown').innerHTML = "<p class='text-blue-500 font-bold'>تم الإطلاق بنجاح!</p>";
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = d;
        document.getElementById('hours').innerText = h < 10 ? '0'+h : h;
        document.getElementById('minutes').innerText = m < 10 ? '0'+m : m;
        document.getElementById('seconds').innerText = s < 10 ? '0'+s : s;
    }, 1000);
}

// 2. حماية الكود من أدوات المطورين (Anti-DevTools)
setInterval(() => {
    // محاكاةdebugger لتعطيل أدوات المطورين وإخفاء الكود في f12
    const start = new Date();
    debugger;
    const end = new Date();
    if (end - start > 100) {
        window.location.reload(); // إعادة تشغيل الموقع إذا اكتشف فحص العنصر
    }
}, 1000);

// 3. خلفية الجزيئات (Particles)
particlesJS("particles-js", {
    particles: {
        number: { value: 40 },
        color: { value: "#3b82f6" },
        opacity: { value: 0.1 },
        size: { value: 1.5 },
        line_linked: { enable: true, distance: 150, color: "#3b82f6", opacity: 0.1 },
        move: { enable: true, speed: 1 }
    }
});

function toggleChat() { 
    document.getElementById('chat-box').classList.toggle('hidden'); 
}

// تشغيل العداد عند التحميل
initCountdown();
