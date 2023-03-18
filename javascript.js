const information = document.querySelectorAll(".information");
information.forEach((item) => {
    item.addEventListener("input", () => {
        if (!item.valid && item.value !== "") {
            item.classList.add("invalid");
        } else {
            item.classList.remove("invalid");
        }
    });
});

const passwords = document.querySelectorAll(".password");
passwords.forEach((item) => {
    item.addEventListener("input", () => {
        if (passwords[0].value !== passwords[1].value) {
            passwords[0].classList.add("invalid");
            passwords[1].classList.add("invalid");
        } else {
            passwords[0].classList.remove("invalid");
            passwords[1].classList.remove("invalid");
        }
    });
});