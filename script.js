/* ===== Hamburger Toggle ===== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.classList.toggle('active');
});

/* ===== Scroll Animations ===== */
const scrollElements = document.querySelectorAll(".card, .feature-card, .about-text, .solution-images img");
const observerOptions = { threshold: 0.2 };
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);
scrollElements.forEach(el => scrollObserver.observe(el));

/* ===== FAQ Toggle ===== */
document.querySelectorAll(".faq-question").forEach(q => {
  q.addEventListener("click", () => {
    q.parentElement.classList.toggle("active");
  });
});

/* ===== VANTA HERO DOTS ===== */
VANTA.DOTS({
  el: "#home",
  mouseControls: true,
  touchControls: true,
  minHeight: 500.00,
  minWidth: 200.00,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xFF2B22,
  color2: 0x2563EB,
  backgroundColor: 0xFFFFFF,
  size: 4.0,
  spacing: 20.0,
  showLines: true
});
