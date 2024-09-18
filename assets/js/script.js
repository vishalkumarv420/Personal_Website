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