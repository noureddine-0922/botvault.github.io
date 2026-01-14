const botKnowledge = {
    "من انتم": "نحن BotVault، منصة متخصصة في ابتكار أرقى حلول الأتمتة.",
    "ماذا تقدمون": "نقدم خدمات بناء البوتات الذكية، الأنظمة التلقائية، ودعم المطورين.",
    "كيف اتواصل": "قريباً سنفتتح قسم التواصل المباشر. تابعنا!",
    "مرحباً": "أهلاً بك في عالم BotVault! يسعدني الرد على استفساراتك.",
    "شكرا": "في خدمتكم دائماً!"
};

function toggleChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.classList.toggle('hidden');
    chatBox.classList.add('animate-bounce-in');
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const content = document.getElementById('chat-content');
    const text = input.value.trim();

    if (text === "") return;

    content.innerHTML += `<div class="bg-blue-600 p-3 rounded-2xl rounded-tl-none self-end max-w-[85%]">${text}</div>`;
    
    let response = "أنا مساعد آلي مخصص للإجابة عن خدمات BotVault فقط.";
    
    for (let key in botKnowledge) {
        if (text.includes(key)) {
            response = botKnowledge[key];
            break;
        }
    }

    setTimeout(() => {
        content.innerHTML += `<div class="bg-gray-800 p-3 rounded-2xl rounded-tr-none self-start border border-gray-700">${response}</div>`;
        content.scrollTop = content.scrollHeight;
    }, 500);

    input.value = "";
}
