/* ===== Hamburger Toggle ===== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.classList.toggle('active');
});

/* ===== Scroll Animation ===== */
const scrollElements = document.querySelectorAll(".card, .feature-card, .about-text, .solution-image");
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
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(q => {
  q.addEventListener("click", () => {
    const parent = q.parentElement;
    parent.classList.toggle("active");
  });
});

/* ===== Vanta Hero Background ===== */
VANTA.DOTS({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xff6b22,
  color2: 0x2563eb,
  backgroundColor: 0x111827,
  size: 4.0,
  spacing: 20.0,
  showLines: true
});
