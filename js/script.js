let form = document.getElementById("form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let submit = document.getElementById("submit");


name.addEventListener("input", function () {
    if (name.value.length < 3) {
        name.style.border = "1px solid red";
    } else {
        name.style.border = "1px solid green";
    }
});

email.addEventListener("input", function () {
    if (email.value.length < 3) {
        email.style.border = "1px solid red";
    } else {
        email.style.border = "1px solid green";
    }
});

password.addEventListener("input", function () {
    if (password.value.length < 3) {
        password.style.border = "1px solid red";
    } else {
        password.style.border = "1px solid green";
    }
});

confirmPassword.addEventListener("input", function () {
    if (confirmPassword.value.length < 3) {
        confirmPassword.style.border = "1px solid red";
    } else {
        confirmPassword.style.border = "1px solid green";
    }
});

submit.addEventListener("click", function () {
    if (password.value !== confirmPassword.value) {
        confirmPassword.style.border = "1px solid red";
    } else {
        confirmPassword.style.border = "1px solid green";
    }
});



















