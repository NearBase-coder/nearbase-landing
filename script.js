document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Vanta.js Hero BG Initialization ---
    // Note: The Vanta.js and three.js scripts must be loaded in index.html for this to work.
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
            // Prevent scrolling when mobile menu is open
            document.body.classList.toggle('no-scroll'); 
        });

        // Close menu when a link is clicked (for smooth single-page navigation)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }


    // --- 3. FAQ Section Toggle (Collapsible Answers) ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            
            // Toggle active class on the question to change the '+' icon to 'X' (CSS handles this)
            question.classList.toggle('active');
            
            // Toggle the clicked answer (CSS handles max-height and padding)
            answer.classList.toggle('active');

            // Optional: Close other open answers (for an accordion effect)
            document.querySelectorAll('.faq-answer.active').forEach(openAnswer => {
                if (openAnswer !== answer) {
                    openAnswer.classList.remove('active');
                    openAnswer.previousElementSibling.classList.remove('active');
                }
            });
        });
    });


    // --- 4. Scroll-Triggered Animations (IntersectionObserver) ---
    const animateElements = document.querySelectorAll('.scroll-animate');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    };

    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

    animateElements.forEach(element => {
        scrollObserver.observe(element);
    });

});
