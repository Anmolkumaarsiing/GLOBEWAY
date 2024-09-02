let container = document.getElementById('container');

// Toggle between Sign In and Sign Up forms
const toggle = () => {
    container.classList.toggle('sign-in');
    container.classList.toggle('sign-up');
};

// Show Sign In form by default
setTimeout(() => {
    container.classList.add('sign-in');
}, 200);

// Show Forgot Password form
const showForgotPassword = () => {
    hideAllForms();
    document.querySelector('.forgot-password-form').classList.add('active');
};

// Show Reset Password form
const showResetPassword = () => {
    hideAllForms();
    document.querySelector('.reset-password-form').classList.add('active');
};

// Hide all forms
const hideAllForms = () => {
    document.querySelectorAll('.forgot-password-form, .reset-password-form')
        .forEach(form => form.classList.remove('active'));
};

// Event listeners for showing/hiding forms
document.querySelector('.form.sign-in b').addEventListener('click', () => {
    hideAllForms();
    toggle();
});

document.querySelector('.form.sign-up b').addEventListener('click', () => {
    hideAllForms();
    toggle();
});

document.querySelector('.form .forgot-password-link').addEventListener('click', (event) => {
    event.preventDefault();
    showForgotPassword();
});

document.querySelector('.forgot-password-form button').addEventListener('click', (event) => {
    event.preventDefault();
    // Add your logic to handle sending the reset link here
    showResetPassword();
});

document.querySelector('.reset-password-form button').addEventListener('click', (event) => {
    event.preventDefault();
    // Add your logic to handle the reset password process here
    hideAllForms();
    container.classList.add('sign-in'); // Go back to sign-in form after reset
});
