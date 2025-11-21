let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;
  
  // إضافة صنف نشط للرابط بناءً على القسم المرئي
  let current = '';
  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    if (top >= offset && top < offset + height) {
      current = id;
    }
  });
  
  navlinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
  
  // إذا كان المستخدم في أعلى الصفحة، اجعل قسم "الرئيسية" نشط
  if (top < 100) {
    navlinks.forEach(link => link.classList.remove('active'));
    let homeLink = document.querySelector('header nav a[href="#home"]');
    if (homeLink) homeLink.classList.add('active');
  }
  
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
  
  // إغلاق القائمة عند التمرير (للهواتف)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// تهيئة ScrollReveal
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

// تهيئة Typed.js
if (typeof Typed !== 'undefined') {
  const typed = new Typed('.multiple-text', {
    strings: ['\u200Fمصمم ويب', '\u200Fمطور ويب', '\u200Fمصمم UI/UX', '\u200Fخبير تجارة إلكترونية'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
}
