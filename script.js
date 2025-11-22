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

const ham = document.getElementById("hamburger");
const nav = document.getElementById("nav-links");

ham.addEventListener("click", () => {
    ham.classList.toggle("active");
    nav.classList.toggle("open");
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


    // --- 4. Feature Tabs Logic (Customer/Vendor) ---
    const tabButtons = document.querySelectorAll('.tab-button');
    const featureContents = document.querySelectorAll('.feature-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' from all buttons and content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            featureContents.forEach(content => content.classList.remove('active'));

            // Add 'active' to the clicked button
            button.classList.add('active');

            // Show the corresponding content
            const targetTab = button.dataset.tab; // 'customers' or 'vendors'
            document.getElementById(`${targetTab}-content`).classList.add('active');

            // Re-observe elements for animation if new content is shown
            const newlyActiveCards = document.querySelectorAll(`#${targetTab}-content .scroll-animate`);
            newlyActiveCards.forEach(card => {
                card.classList.remove('is-visible'); // Reset animation state
                scrollObserver.observe(card);
            });
        });
    });

    // --- 5. Feature Card Icon 'Jump' on Click ---
    // This addresses your request for icons moving up on click (or tapping on mobile).
    const featureIcons = document.querySelectorAll('.feature-card .feature-icon');

    featureIcons.forEach(icon => {
        icon.addEventListener('mousedown', (e) => {
             // For desktop (mouse click)
             icon.style.transform = 'translateY(-10px) scale(1.1)'; 
        });
        icon.addEventListener('mouseup', (e) => {
             // Return to normal (using the CSS transition)
             icon.style.transform = 'translateY(0) scale(1)'; 
        });
         icon.addEventListener('mouseleave', (e) => {
             // Ensure it returns to normal if mouse leaves while pressed
             icon.style.transform = 'translateY(0) scale(1)'; 
        });

        // Add touch support for mobile taps
        icon.addEventListener('touchstart', (e) => {
             icon.style.transform = 'translateY(-10px) scale(1.1)'; 
        });
        icon.addEventListener('touchend', (e) => {
             // Use a short delay before returning to normal
             setTimeout(() => {
                icon.style.transform = 'translateY(0) scale(1)'; 
             }, 200);
        });
    });


    // --- 6. Scroll-Triggered Animations (IntersectionObserver) ---
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
                // Only unobserve if you want the animation to play once
                observer.unobserve(entry.target); 
            }
        });
    };

    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

    animateElements.forEach(element => {
        scrollObserver.observe(element);
    });

});
function scrollToDownload() {
    document.getElementById("download").scrollIntoView({
        behavior: "smooth"
    });
}
