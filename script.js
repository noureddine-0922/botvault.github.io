// قاعدة بيانات الأسئلة والأجوبة (الرد الآلي المخصص)
const botKnowledge = {
    "من انتم": "نحن BotVault، منصة رائدة في برمجة وتطوير البوتات الذكية لأتمتة المهام.",
    "ماذا تقدمون": "نقدم خدمات بناء بوتات الدردشة، بوتات التليجرام، وأنظمة الذكاء الاصطناعي المخصصة.",
    "رابط الموقع": "رابطنا الرسمي هو: noureddine-0922.github.io/botvault.github.io/",
    "كيف اتواصل": "يمكنك مراسلتنا قريباً عبر البريد الإلكتروني أو من خلال قسم التذاكر الذي نعمل عليه حالياً.",
    "موقعكم": "موقعنا مخصص لعرض مشاريع البوتات المفتوحة المصدر والمخصصة.",
    "سعر البوت": "الأسعار تعتمد على نوع البوت، يمكنك الاستفسار عند فتح قسم الطلبات قريباً.",
    "مرحباً": "أهلاً بك! كيف يمكن لمساعد BotVault أن يخدمك اليوم؟",
    "شكرا": "العفو! نحن دائماً هنا للمساعدة."
};

// إظهار وإخفاء صندوق الدردشة
function toggleChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.classList.toggle('hidden');
}

// وظيفة إرسال الرسالة ومعالجتها
function sendMessage() {
    const input = document.getElementById('user-input');
    const content = document.getElementById('chat-content');
    const text = input.value.trim();

    if (text === "") return;

    // إضافة رسالة المستخدم للواجهة
    const userMsg = `<div class="bg-blue-600 p-3 rounded-2xl rounded-tl-none self-end max-w-[80%] text-white">${text}</div>`;
    content.innerHTML += userMsg;
    
    // البحث عن رد مناسب
    let response = "عذراً، أنا مبرمج للرد على استفسارات BotVault فقط. يمكنك سؤالنا عن (من نحن، ماذا نقدم، رابط الموقع).";
    
    // فحص الكلمات المفتاحية في رسالة المستخدم
    for (let key in botKnowledge) {
        if (text.toLowerCase().includes(key.toLowerCase())) {
            response = botKnowledge[key];
            break;
        }
    }

    // إضافة رد البوت مع تأخير بسيط ليبدو طبيعياً
    setTimeout(() => {
        const botMsg = `<div class="bg-gray-800 p-3 rounded-2xl rounded-tr-none self-start max-w-[80%] border border-gray-700">${response}</div>`;
        content.innerHTML += botMsg;
        // النزول لآخر رسالة تلقائياً
        content.scrollTop = content.scrollHeight;
    }, 600);

    // تفريغ حقل الإدخال
    input.value = "";
}

// تشغيل الإرسال عند الضغط على مفتاح Enter
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
