// 1. نظام العداد التنازلي (100 يوم)
function startCountdown() {
    const targetDate = new Date().getTime() + (100 * 24 * 60 * 60 * 1000);
    
    setInterval(() => {
        const now = new Date().getTime();
        const diff = targetDate - now;

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

// 2. تفعيل الجزيئات المتحركة (Particles)
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        color: { value: "#3b82f6" },
        shape: { type: "circle" },
        opacity: { value: 0.2 },
        size: { value: 2 },
        line_linked: { enable: true, distance: 150, color: "#3b82f6", opacity: 0.1, width: 1 },
        move: { enable: true, speed: 2 }
    }
});

// 3. البوت المطور مع "جاري الكتابة"
const botKnowledge = {
    "متى الافتتاح؟": "الافتتاح الرسمي بعد 100 يوم من الآن. نحن نضع اللمسات الأخيرة!",
    "نوع الحماية": "نستخدم تشفير AES-256 مع أنظمة حماية ضد الـ DDoS لضمان استقرار بوتاتك.",
    "شكرا": "العفو! نحن هنا لحمايتك."
};

function askBot(question) {
    document.getElementById('user-input').value = question;
    sendMessage();
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const content = document.getElementById('chat-content');
    const typing = document.getElementById('typing');
    const text = input.value.trim();

    if (!text) return;

    content.innerHTML += `<div class="bg-blue-600 p-3 rounded-2xl rounded-tl-none self-end max-w-[85%] text-xs">${text}</div>`;
    input.value = "";
    content.scrollTop = content.scrollHeight;

    // محاكاة التفكير
    typing.classList.remove('hidden');
    
    setTimeout(() => {
        typing.classList.add('hidden');
        let response = botKnowledge[text] || "سؤال رائع! حالياً جميع أنظمتنا تحت الصيانة وسأكون قادراً على إجابتك بشكل أدق عند الافتتاح.";
        
        content.innerHTML += `<div class="bg-gray-800 p-3 rounded-2xl rounded-tr-none self-start border border-gray-700 text-xs">${response}</div>`;
        content.scrollTop = content.scrollHeight;
    }, 1500);
}

function toggleChat() {
    document.getElementById('chat-box').classList.toggle('hidden');
}

startCountdown();
