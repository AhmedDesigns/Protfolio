//==================== toggle icon navbar ====================//
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

//==================== scroll sections active link ====================//
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;
    
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) activeLink.classList.add('active');
            });
        }
    });
    
    //==================== sticky navbar ====================//
    let header = document.querySelector('header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
    }
    
    //==================== remove toggle icon and navbar when click navbar link (scroll) ====================//
    if (menuIcon && navbar) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};

//==================== scroll reveal ====================//
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-container, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
}

//==================== typed js ====================//
function initializeTyped() {
    if (typeof Typed === 'undefined') {
        console.log('Typed.js not loaded yet');
        return;
    }
    
    const typedElement = document.querySelector('.multiple-text');
    if (!typedElement) {
        console.log('Typed element not found');
        return;
    }
    
    // تدمير أي نسخة سابقة من Typed
    if (window.typedInstance) {
        window.typedInstance.destroy();
        window.typedInstance = null;
    }
    
    // تنظيف العنصر أولاً
    typedElement.innerHTML = '';
    
    // التحقق من اللغة بدقة
    const isArabic = document.documentElement.lang === 'ar' || 
                    document.documentElement.dir === 'rtl' ||
                    document.querySelector('html[lang="ar"]') !== null ||
                    window.location.href.includes('index-ar') ||
                    window.location.href.includes('arabic');
    
    console.log('Current page language:', isArabic ? 'Arabic' : 'English');
    
    // النصوص بناءً على اللغة
    const arabicTexts = ['مصمم ويب', 'مطور ويب', 'مصمم UI/UX', 'خبير تجارة إلكترونية'];
    const englishTexts = ['Web Designer', 'Web Developer', 'UI/UX Designer', 'E-commerce Expert'];
    
    const stringsToUse = isArabic ? arabicTexts : englishTexts;
    
    // تهيئة Typed.js
    window.typedInstance = new Typed('.multiple-text', {
        strings: stringsToUse,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        onBegin: function(self) {
            console.log('Typed.js started with strings:', self.strings);
        }
    });
}

// تشغيل Typed بعد تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function() {
    // الانتظار قليلاً لضمان تحميل جميع المكتبات
    setTimeout(initializeTyped, 500);
});

// أيضاً تشغيل عند اكتمال تحميل الصفحة
window.addEventListener('load', function() {
    setTimeout(initializeTyped, 300);
});

// حل إضافي للصفحات التي يتم تحميلها ديناميكياً
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTyped);
} else {
    setTimeout(initializeTyped, 100);
}
