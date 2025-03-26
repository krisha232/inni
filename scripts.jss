// Smooth scroll effect for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Simple form validation (you can extend this)
document.querySelector('.register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('You have successfully registered!');
});
