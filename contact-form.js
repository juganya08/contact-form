
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var nameInput = document.getElementById("name").value;
    var addressInput = document.getElementById("address").value;
    var phoneInput = document.getElementById("phone").value;
    var emailInput = document.getElementById("email").value;
    var messageInput = document.getElementById("message").value;

    var phoneRegex = /^\+94\d{9}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var isValid = true;

    document.getElementById("nameError").textContent = "";
    document.getElementById("addressError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    if (nameInput.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }

    if (addressInput.trim() === "") {
        document.getElementById("addressError").textContent = "Address is required.";
        isValid = false;
    }

    if (!phoneRegex.test(phoneInput)) {

        document.getElementById("phoneError").textContent = "Phone number must start with +94 and be followed by exactly 9 digits.";
        isValid = false;
    }

    if (!emailRegex.test(emailInput)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (messageInput.length < 10) {
        document.getElementById("messageError").textContent = "Message must be at least 10 characters long.";
        isValid = false;
    }

    if (isValid) {
        var contactData = {
            name: nameInput,
            address: addressInput,
            phone: phoneInput,
            email: emailInput,
            message: messageInput
        };
        localStorage.setItem('contactData', JSON.stringify(contactData));

        alert("Form submitted successfully!");

        // $('#contactModal').modal('hide');
        document.getElementById("hiddenSubmitButton").click();

        document.getElementById("contactForm").reset();
    }
});


