const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded','false');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e => {
  if (glow) {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }
});

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const msg =
`Hi DIGISHOWS,

I want a digital marketing consultation.

Name: ${data.get('name')}
Business: ${data.get('business')}
Phone: ${data.get('phone')}
Email: ${data.get('email') || 'Not provided'}
Service: ${data.get('service')}
Requirement: ${data.get('message') || 'Not provided'}`;

  window.open('https://wa.me/918882237618?text=' + encodeURIComponent(msg), '_blank');
});

const style = document.createElement('style');
style.textContent = `
@media(max-width:900px){
  .nav.open{
    display:flex;position:absolute;top:68px;left:15px;right:15px;
    flex-direction:column;gap:0;padding:10px;
    background:rgba(14,14,20,.97);border:1px solid rgba(255,255,255,.1);
    border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,.5);
  }
  .nav.open a{padding:13px 12px;border-bottom:1px solid rgba(255,255,255,.06)}
  .nav.open a:last-child{border-bottom:0}
}`;
document.head.appendChild(style);
