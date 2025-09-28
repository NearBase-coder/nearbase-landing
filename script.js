// (KEEP THIS FILE THE SAME AS THE PREVIOUS VERSION)
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Vanta.js Hero BG Initialization ---
    try {
        VANTA.DOTS({
            el: "#hero-bg", 
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x2563EB, // Electric Blue
            backgroundColor: 0xFF2B22, // Fire Orange
            size: 3.5,
            spacing: 30.0
        });
    } catch (error) {
        console.warn("Vanta.js initialization failed. Check script links in HTML.");
    }


    // --- 2. Hamburger Menu Toggle ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('no-scroll'); 
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }


    // --- 3. FAQ Section Toggle ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            
            question.classList.toggle('active');
            answer.classList.toggle('active');

            document.querySelectorAll('.faq-answer.active').forEach(openAnswer => {
                if (openAnswer !== answer) {
                    openAnswer.classList.remove('active');
                    openAnswer.previousElementSibling.classList.remove('active');
                }
            });
        });
    });


    // --- 4. Feature Tabs Logic (Customer/Vendor) ---
    const tabButtons = document.querySelectorAll('.tab-button');
    const featureContents = document.querySelectorAll('.feature-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            featureContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');

            const targetTab = button.dataset.tab;
            document.getElementById(`${targetTab}-content`).classList.add('active');

            const newlyActiveCards = document.querySelectorAll(`#${targetTab}-content .scroll-animate`);
            newlyActiveCards.forEach(card => {
                card.classList.remove('is-visible');
                scrollObserver.observe(card);
            });
        });
    });


    // --- 5. Scroll-Triggered Animations (IntersectionObserver) ---
    const animateElements = document.querySelectorAll('.scroll-animate');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

    animateElements.forEach(element => {
        scrollObserver.observe(element);
    });

});
