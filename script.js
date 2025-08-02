// This script adds smooth scrolling to anchor links and other interactive functionalities.

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump behavior

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll smoothly to the target element
                // Adjusted offset to prevent content from being hidden under a potential fixed header
                window.scrollTo({
                    top: targetElement.offsetTop - 20, // You can adjust this value as needed
                    behavior: 'smooth'
                });
            }
        });
    });

    // Example: Add a simple console log when the page loads
    console.log('Portfolio page loaded and enhanced!');
});
