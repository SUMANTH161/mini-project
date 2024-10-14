const contactForm = document.getElementById('contactForm');

const validateContactForm = () => {
    const fullName = document.getElementById('fullName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const query = document.getElementById('query').value;

    if (!fullName || !phoneNumber || !email || !query) {
        alert("All fields must be filled out.");
        return false;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert("Invalid email format.");
        return false;
    }

    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
        alert("Phone number must be 10 digits and numeric.");
        return false;
    }

    alert("Your message has been sent successfully!");
    return true;
};

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateContactForm()) {
        window.location.href = "online shopping.html"; 
    }
});
