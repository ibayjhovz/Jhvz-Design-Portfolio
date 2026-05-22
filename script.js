// Document DOM Targets
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

// Toggle Mobile Dropdown Drawer
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Switch between hamburger and 'X' close icon
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close Mobile Dropdown upon clicking any Link Item
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });
});

// Structural Navbar Background Alpha Shift on Scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(11, 11, 13, 0.98)';
        navbar.style.padding = '15px 8%';
    } else {
        navbar.style.backgroundColor = 'rgba(11, 11, 13, 0.95)';
        navbar.style.padding = '20px 8%';
    }
});
