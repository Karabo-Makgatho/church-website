// ====================================
// 1. NAVIGATION MENU TOGGLE
// ====================================

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('tabs-top');

// Check if elements exist before attaching listeners
if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        // Toggles the 'closed' class, which reveals or hides the menu
        nav.classList.toggle('closed');
        nav.classList.toggle('open'); // Toggle 'open' state for alternative CSS control
    });
}


// ====================================
// 2. HOMEPAGE SLIDESHOW LOGIC
// ====================================

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Only execute slideshow logic if there are slides present
if (slides.length > 0) {
    // Function to show the selected slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            // Ensures only the current slide has the 'active' class
            slide.classList.toggle('active', i === index);
        });
    }

    // Function to advance to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Initialize the first slide display immediately on load
    showSlide(currentSlide);

    // Set interval for automatic slide change (every 4 seconds)
    setInterval(nextSlide, 4000);
}
