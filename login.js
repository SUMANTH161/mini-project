const loginForm = document.getElementById('loginForm');

const validateLogin = () => {
    const uname = document.getElementById('uname').value;
    const pass = document.getElementById('pass').value;

    if (!uname || !pass) {
        alert("Both fields must be filled out.");
        return false;
    }

    if (pass.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    alert("Login successful!");
    return true;
};

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateLogin()) {
        window.location.href = "online shopping.html"; 
    }
});
