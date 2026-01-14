// تفعيل العداد التنازلي
function startCountdown() {
    const targetDate = new Date().getTime() + (100 * 24 * 60 * 60 * 1000);
    setInterval(() => {
        const now = new Date().getTime();
        const diff = targetDate - now;
        document.getElementById('days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById('hours').innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById('minutes').innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('seconds').innerText = Math.floor((diff % (1000 * 60)) / 1000);
    }, 1000);
}

// تفعيل الجزيئات
particlesJS("particles-js", {
    particles: {
        number: { value: 60 },
        color: { value: "#3b82f6" },
        opacity: { value: 0.1 },
        size: { value: 2 },
        line_linked: { enable: true, distance: 150, color: "#3b82f6", opacity: 0.1 },
        move: { enable: true, speed: 1.5 }
    }
});

// البوت والدردشة
const botKnowledge = {
    "متى الافتتاح؟": "خلال 100 يوم من الآن، أنظمتنا قيد التجهيز.",
    "نوع الحماية": "تشفير كامل وحماية ضد الهجمات السيبرانية."
};

function askBot(q) { document.getElementById('user-input').value = q; sendMessage(); }

function sendMessage() {
    const input = document.getElementById('user-input');
    const content = document.getElementById('chat-content');
    const typing = document.getElementById('typing');
    const text = input.value.trim();
    if (!text) return;

    content.innerHTML += `<div class="bg-blue-600 p-2 rounded-xl self-end max-w-[80%]">${text}</div>`;
    input.value = "";
    typing.classList.remove('hidden');
    
    setTimeout(() => {
        typing.classList.add('hidden');
        let res = botKnowledge[text] || "سؤال جيد، سنرد عليك قريباً عند اكتمال الصيانة.";
        content.innerHTML += `<div class="bg-gray-800 p-2 rounded-xl self-start border border-gray-700">${res}</div>`;
        content.scrollTop = content.scrollHeight;
    }, 1200);
}

function toggleChat() { document.getElementById('chat-box').classList.toggle('hidden'); }
startCountdown();
