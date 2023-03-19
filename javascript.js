const information = document.querySelectorAll(".information");
information.forEach((item) => {
    item.addEventListener("input", () => {
        if (!item.checkValidity() && item.value !== "") {
            item.classList.remove("valid");
            item.classList.add("invalid");
        } else if (item.value === "") {
            item.classList.remove("valid");
            item.classList.add("invalid");
        } else {
            item.classList.remove("invalid");
            item.classList.add("valid")
        }
    })
});

const passwords = document.querySelectorAll(".password");
passwords.forEach((item) => item.addEventListener("input", addPasswordValidation));

function addPasswordValidation() {
    const passwords = document.querySelectorAll(".password");
    if (passwords[0].value !== passwords[1].value) {
        passwords[0].setCustomValidity("The passwords doesn't match");
        passwords[1].setCustomValidity("The passwords doesn't match");
        passwords[0].classList.remove("valid");
        passwords[1].classList.remove("valid");
        passwords[0].classList.add("invalid");
        passwords[1].classList.add("invalid");
    } else {
        passwords[0].setCustomValidity("");
        passwords[1].setCustomValidity("");
        passwords[0].classList.remove("invalid");
        passwords[1].classList.remove("invalid");
        passwords[0].classList.add("valid");
        passwords[1].classList.add("valid");
    }
}