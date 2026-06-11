// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navList = document.querySelector('.nav-list');
navToggle?.addEventListener('click', () => {
  navList?.classList.toggle('is-open');
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
      navList?.classList.remove('is-open');
    }
  });
});

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form using mailto (no backend)
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
const CONTACT_EMAIL = 'ayehsadeghi9@gmail.com';

form?.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    statusEl.textContent = 'لطفاً همه فیلدها را تکمیل کنید.';
    return;
  }

  const subject = encodeURIComponent(`پیام جدید از ${name}`);
  const body = encodeURIComponent(`نام: ${name}\nایمیل: ${email}\n\n${message}`);
  const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

  statusEl.textContent = 'در حال باز کردن برنامه ایمیل شما...';
  window.location.href = mailtoUrl;
});
