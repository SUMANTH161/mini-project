const registerForm = document.getElementById('registerForm');

const validateForm = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const pass = document.getElementById('pass').value;
    const confirmPass = document.getElementById('confirmPass').value;

    if (!name || !email || !phone || !pass || !confirmPass) {
        alert("All fields must be filled out.");
        return false;
    }

    if (!email.includes('@')) {
        alert("Invalid email format.");
        return false;
    }

    if (phone.length !== 10) {
        alert("Phone number must be 10 digits.");
        return false;
    }

    if (pass !== confirmPass) {
        alert("Passwords do not match.");
        return false;
    }

    alert("Registration successful!");
    return true;
};

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        window.location.href = "login.html"; 
    }
});
