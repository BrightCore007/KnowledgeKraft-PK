// Language Selection and Dynamic Translation
const translations = {
  en: {
    // Nav & Header
    nav_home: "Home",
    nav_about: "About",
    nav_courses: "Courses",
    nav_tutorials: "Tutorials",
    nav_news: "News & Events",
    nav_blogs: "Blogs",
    nav_download: "Download",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    login_btn: "Log In",
    signup_btn: "Sign Up",
    // Hero Section
    btn_start: "Get Started",
    btn_explore: "Explore Topics",
    // Hero Floating Cards
    card_course_completed: "Course Completed",
    card_python: "Python Basics",
    card_new_certificate: "New Certificate",
    card_web_dev: "Web Development",
  },
  ur: {
    nav_home: "ہوم پیج",
    nav_about: "ہمارے بارے میں",
    nav_courses: "کورسز",
    nav_tutorials: "سبق",
    nav_news: "خبریں اور واقعات",
    nav_blogs: "بلاگز",
    nav_download: "ڈاؤن لوڈ",
    nav_faq: "سوالات",
    nav_contact: "رابطہ",
    login_btn: "لاگ ان",
    signup_btn: "سائن اپ",
    btn_start: "شروع کریں",
    btn_explore: "موضوعات دریافت کریں",
    card_course_completed: "کورس مکمل",
    card_python: "پائتھون کی بنیادی باتیں",
    card_new_certificate: "نیا سرٹیفکیٹ",
    card_web_dev: "ویب ڈویلپمنٹ",
  },
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_courses: "الدورات",
    nav_tutorials: "الدروس",
    nav_news: "أخبار وأحداث",
    nav_blogs: "المدونات",
    nav_download: "تحميل",
    nav_faq: "الأسئلة الشائعة",
    nav_contact: "اتصل بنا",
    login_btn: "تسجيل الدخول",
    signup_btn: "اشتراك",
    btn_start: "ابدأ الآن",
    btn_explore: "استكشف المواضيع",
    card_course_completed: "اكتملت الدورة",
    card_python: "أساسيات بايثون",
    card_new_certificate: "شهادة جديدة",
    card_web_dev: "تطوير الويب",
  },
  zh: {
    nav_home: "首页",
    nav_about: "关于我们",
    nav_courses: "课程",
    nav_tutorials: "教程",
    nav_news: "新闻与活动",
    nav_blogs: "博客",
    nav_download: "下载",
    nav_faq: "常见问题",
    nav_contact: "联系我们",
    login_btn: "登录",
    signup_btn: "注册",
    btn_start: "开始",
    btn_explore: "探索主题",
    card_course_completed: "课程完成",
    card_python: "Python 基础",
    card_new_certificate: "新证书",
    card_web_dev: "Web 开发",
  },
  ru: {
    nav_home: "Главная",
    nav_about: "О нас",
    nav_courses: "Курсы",
    nav_tutorials: "Уроки",
    nav_news: "Новости",
    nav_blogs: "Блоги",
    nav_download: "Скачать",
    nav_faq: "FAQ",
    nav_contact: "Контакты",
    login_btn: "Войти",
    signup_btn: "Регистрация",
    btn_start: "Начать",
    btn_explore: "Изучить темы",
    card_course_completed: "Курс завершен",
    card_python: "Основы Python",
    card_new_certificate: "Новый сертификат",
    card_web_dev: "Веб-разработка",
  },
  es: {
    nav_home: "Inicio",
    nav_about: "Nosotros",
    nav_courses: "Cursos",
    nav_tutorials: "Tutoriales",
    nav_news: "Noticias",
    nav_blogs: "Blogs",
    nav_download: "Descargar",
    nav_faq: "FAQ",
    nav_contact: "Contacto",
    login_btn: "Iniciar sesión",
    signup_btn: "Registrarse",
    btn_start: "Empezar",
    btn_explore: "Explorar temas",
    card_course_completed: "Curso completado",
    card_python: "Conceptos básicos de Python",
    card_new_certificate: "Nuevo certificado",
    card_web_dev: "Desarrollo web",
  },
  tr: {
    nav_home: "Ana Sayfa",
    nav_about: "Hakkımızda",
    nav_courses: "Kurslar",
    nav_tutorials: "Dersler",
    nav_news: "Haberler",
    nav_blogs: "Bloglar",
    nav_download: "İndir",
    nav_faq: "SSS",
    nav_contact: "İletişim",
    login_btn: "Giriş Yap",
    signup_btn: "Kaydol",
    btn_start: "Başlayın",
    btn_explore: "Konuları Keşfet",
    card_course_completed: "Kurs Tamamlandı",
    card_python: "Python Temelleri",
    card_new_certificate: "Yeni Sertifika",
    card_web_dev: "Web Geliştirme",
  },
  fa: {
    nav_home: "خانه",
    nav_about: "درباره ما",
    nav_courses: "دوره ها",
    nav_tutorials: "آموزش ها",
    nav_news: "اخبار و رویدادها",
    nav_blogs: "بلاگ ها",
    nav_download: "دانلود",
    nav_faq: "سوالات متداول",
    nav_contact: "تماس",
    login_btn: "ورود",
    signup_btn: "ثبت نام",
    btn_start: "شروع کنید",
    btn_explore: "کاوش موضوعات",
    card_course_completed: "دوره تکمیل شد",
    card_python: "مقدمات پایتون",
    card_new_certificate: "گواهی جدید",
    card_web_dev: "توسعه وب",
  },
  hi: {
    nav_home: "होम",
    nav_about: "हमारे बारे में",
    nav_courses: "पाठ्यक्रम",
    nav_tutorials: "ट्यूटोरियल",
    nav_news: "समाचार और कार्यक्रम",
    nav_blogs: "ब्लॉग",
    nav_download: "डाउनलोड",
    nav_faq: "सामान्य प्रश्न",
    nav_contact: "संपर्क",
    login_btn: "लॉग इन",
    signup_btn: "साइन अप",
    btn_start: "शुरू करें",
    btn_explore: "विषय देखें",
    card_course_completed: "कोर्स पूरा हुआ",
    card_python: "पायथन बेसिक्स",
    card_new_certificate: "नया प्रमाण पत्र",
    card_web_dev: "वेब विकास",
  },
};
function toggleLangMenu() {
  const menu = document.getElementById("langMenu");
  const arrow = document.getElementById("langArrow");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
  arrow.style.transform = menu.classList.contains("hidden")
    ? "rotate(0deg)"
    : "rotate(180deg)";
}
function selectLanguage(langCode, label, isRTL = false) {
  document.getElementById("currentLangLabel").innerText =
    langCode.toUpperCase();
  toggleLangMenu();
  const t = translations[langCode] || translations["en"];
  // Update elements with data-translate attribute
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (t[key]) el.innerHTML = t[key];
  });
  // Handle RTL direction
  document.documentElement.dir = isRTL ? "rtl" : "ltr";
  document.documentElement.lang = langCode;
  // Font adjustment for specific scripts
  if (langCode === "ur" || langCode === "ar" || langCode === "fa") {
    // Basic system fonts for Arabic scripts usually suffice, but Noto Nastaliq Urdu is preferred for Urdu if available
    document.body.style.fontFamily =
      "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
  } else {
    document.body.style.fontFamily = ""; // Revert to default
  }
}
// Close menu when clicking outside
document.addEventListener("click", function (event) {
  const menu = document.getElementById("langMenu");
  const btn = document.getElementById("langBtn");
  if (
    menu &&
    !menu.contains(event.target) &&
    !btn.contains(event.target) &&
    !menu.classList.contains("hidden")
  ) {
    toggleLangMenu();
  }
});

//* Mobile toggle function *//
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("hidden");
  }
}

// Scroll Navigation Functionality
const scrollBtn = document.getElementById("smartScrollBtn");
const icon = scrollBtn.querySelector("i");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;

  if (scrollTop < docHeight / 2) {
    icon.className = "fa-solid fa-chevron-down";
    scrollBtn.onclick = () =>
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  } else {
    icon.className = "fa-solid fa-chevron-up";
    scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
