// وظيفة لإظهار تنبيه عند الضغط على زر التواصل
function showAlert() {
    alert("سيتم فتح نظام التذاكر قريباً! تابعنا للتحديثات.");
}

// تغيير الثيم (تجريبي)
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
    alert("جاري العمل على الوضع الليلي والنهاري المتقدم!");
});

// رسالة ترحيب في الكونسول (للمبرمجين)
console.log("Welcome to BotVault - Official Website");
