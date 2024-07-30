// JavaScript for the hamburger menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const sideMenu = document.querySelector('.side-menu');
    const closeBtn = document.querySelector('.side-menu .close-btn');

    // Toggle side menu
    hamburger.addEventListener('click', () => {
        sideMenu.classList.toggle('active');
    });

    // Close side menu
    closeBtn.addEventListener('click', () => {
        sideMenu.classList.remove('active');
    });

    // Typing effect
    const typingText = document.getElementById('typing-text');
    const text = "Know More About Me !";
    let index = 0;

    function type() {
        if (index < text.length) {
            typingText.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    type();

    // Smooth scrolling
    const links = document.querySelectorAll('.navbar a');
    for (const link of links) {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    }
});
