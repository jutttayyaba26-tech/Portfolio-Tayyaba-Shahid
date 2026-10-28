// Form submission handler with alert message
function handleFormSubmit(event) {
    event.preventDefault(); // Page refresh hone se rokne ke liye
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        alert(Thank you, ${name}! Your message has been sent successfully.);
        document.getElementById('contactForm').reset(); // Form clear karne ke liye
    } else {
        alert('Please fill in all fields before submitting.');
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});