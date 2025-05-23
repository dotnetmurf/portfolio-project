/**
 * This JavaScript file handles two main features for a portfolio website:
 * 1. Responsive Navigation Menu: Implements a hamburger menu toggle for mobile navigation by adding/removing the 'active' class on the navigation menu when the hamburger icon is clicked.
 * 2. Contact Form Validation: Provides real-time and on-submit validation for a contact form. It checks that the name, email, and message fields are filled, and that the email is in a valid format. Error messages are displayed next to invalid fields, and form submission is prevented if validation fails.
 */

document.addEventListener("DOMContentLoaded", function () {
    // Grab the hamburger and nav menu elements for menu toggle
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    // Grab the contact form elements for validation
    const form = document.querySelector('section#contact form');
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const messageInput = form.querySelector('#message');

    // Listen for click events on the hamburger and toggle the 'active' class on the nav menu
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Helper to show error
    function showError(input, message) {
        let error = input.nextElementSibling;
        if (!error || !error.classList.contains('form-error')) {
            error = document.createElement('span');
            error.className = 'form-error';
            input.parentNode.insertBefore(error, input.nextSibling);
        }
        error.textContent = message;
        input.classList.add('input-error');
    }

    // Helper to clear error
    function clearError(input) {
        let error = input.nextElementSibling;
        if (error && error.classList.contains('form-error')) {
            error.textContent = '';
        }
        input.classList.remove('input-error');
    }

    // Email validation regex
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Real-time validation
    nameInput.addEventListener('input', function () {
        if (!nameInput.value.trim()) {
            showError(nameInput, 'Name is required.');
        } else {
            clearError(nameInput);
        }
    });

    emailInput.addEventListener('input', function () {
        if (!emailInput.value.trim()) {
            showError(emailInput, 'Email is required.');
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, 'Please enter a valid email.');
        } else {
            clearError(emailInput);
        }
    });

    messageInput.addEventListener('input', function () {
        if (!messageInput.value.trim()) {
            showError(messageInput, 'Message is required.');
        } else {
            clearError(messageInput);
        }
    });

    // On submit
    form.addEventListener('submit', function (e) {
        let valid = true;

        if (!nameInput.value.trim()) {
            showError(nameInput, 'Name is required.');
            valid = false;
        }
        if (!emailInput.value.trim()) {
            showError(emailInput, 'Email is required.');
            valid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, 'Please enter a valid email.');
            valid = false;
        }
        if (!messageInput.value.trim()) {
            showError(messageInput, 'Message is required.');
            valid = false;
        }

        if (!valid) {
            e.preventDefault();
        }
    });
});





// // Form validation for contact form
// document.addEventListener("DOMContentLoaded", function () {
//     // ...existing hamburger menu code...

//     const form = document.querySelector('section#contact form');
//     const nameInput = form.querySelector('#name');
//     const emailInput = form.querySelector('#email');
//     const messageInput = form.querySelector('#message');

//     // Helper to show error
//     function showError(input, message) {
//         let error = input.nextElementSibling;
//         if (!error || !error.classList.contains('form-error')) {
//             error = document.createElement('span');
//             error.className = 'form-error';
//             input.parentNode.insertBefore(error, input.nextSibling);
//         }
//         error.textContent = message;
//         input.classList.add('input-error');
//     }

//     // Helper to clear error
//     function clearError(input) {
//         let error = input.nextElementSibling;
//         if (error && error.classList.contains('form-error')) {
//             error.textContent = '';
//         }
//         input.classList.remove('input-error');
//     }

//     // Email validation regex
//     function isValidEmail(email) {
//         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     }

//     // Real-time validation
//     nameInput.addEventListener('input', function () {
//         if (!nameInput.value.trim()) {
//             showError(nameInput, 'Name is required.');
//         } else {
//             clearError(nameInput);
//         }
//     });

//     emailInput.addEventListener('input', function () {
//         if (!emailInput.value.trim()) {
//             showError(emailInput, 'Email is required.');
//         } else if (!isValidEmail(emailInput.value.trim())) {
//             showError(emailInput, 'Please enter a valid email.');
//         } else {
//             clearError(emailInput);
//         }
//     });

//     messageInput.addEventListener('input', function () {
//         if (!messageInput.value.trim()) {
//             showError(messageInput, 'Message is required.');
//         } else {
//             clearError(messageInput);
//         }
//     });

//     // On submit
//     form.addEventListener('submit', function (e) {
//         let valid = true;

//         if (!nameInput.value.trim()) {
//             showError(nameInput, 'Name is required.');
//             valid = false;
//         }
//         if (!emailInput.value.trim()) {
//             showError(emailInput, 'Email is required.');
//             valid = false;
//         } else if (!isValidEmail(emailInput.value.trim())) {
//             showError(emailInput, 'Please enter a valid email.');
//             valid = false;
//         }
//         if (!messageInput.value.trim()) {
//             showError(messageInput, 'Message is required.');
//             valid = false;
//         }

//         if (!valid) {
//             e.preventDefault();
//         }
//     });
// });