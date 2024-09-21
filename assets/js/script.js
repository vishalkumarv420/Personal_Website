// Hamburger menu toggle logic
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Function to toggle the visibility of the navigation menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Popup and menu elements
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const navLinks = document.querySelectorAll('.nav-menu a'); // All navigation links

// Function to close the popup
function closePopup() {
    popup.classList.remove('active');
}

// Event listener to close the popup when clicking the close button
closeBtn.addEventListener('click', () => {
    closePopup();
});

// Event listener to close the popup when clicking anywhere outside of it
window.addEventListener('click', (e) => {
    if (!popup.contains(e.target) && !e.target.matches('.nav-toggle') && !e.target.matches('.nav-menu a')) {
        closePopup();
    }
});

// Event listener to close the popup and the mobile menu when any navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closePopup();
        navMenu.classList.remove('show'); // Close the mobile menu
    });
});

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Create a FormData object
    var formData = new FormData(this);

    // Send form data using fetch
    fetch('assets/php/send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.status === 'success') {
            // Show the success modal and overlay
            document.getElementById('success-modal').style.display = 'block';
            document.querySelector('.popup-overlay').classList.add('active');

            // Clear form fields after successful submission
            document.getElementById('contactForm').reset();
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was a problem with the submission. Please try again later.');
    });
});

// Close modal when the close button is clicked
document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('success-modal').style.display = 'none';
    document.querySelector('.popup-overlay').classList.remove('active');
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === document.querySelector('.popup-overlay')) {
        document.getElementById('success-modal').style.display = 'none';
        document.querySelector('.popup-overlay').classList.remove('active');
    }
});

