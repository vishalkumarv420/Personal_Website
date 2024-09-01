// Form validation for Gmail address
document.getElementById('contact-form').addEventListener('submit', function(event) {
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('email-error');
    var emailValue = emailInput.value;
    var isValidEmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i.test(emailValue);

    if (!isValidEmail) {
        emailError.textContent = 'Please enter a valid Gmail address.';
        event.preventDefault(); // Prevent form submission
    } else {
        emailError.textContent = ''; // Clear any previous error message
    }
});

// Typing animation effect

    
    type()document.addEventListener("DOMContentLoaded", function() {
    const typingText = document.querySelector(".typing-text");
    const text = "Hey I'm Vishal";
    
    typingText.style.width = text.length + "ch"; // Set the width based on the text length
    typingText.style.animation = typing 3s steps(${text.length}), blink .75s step-end infinite;
    
    let i = 0;
    function type() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(type, 150);
        }
    };
});document.querySelector('.nav-toggle').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('show');
});

document.querySelectorAll('.nav-menu a').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.remove('show');
    });
});