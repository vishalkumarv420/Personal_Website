document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Prevent form from submitting if email is invalid
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