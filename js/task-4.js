const form = document.querySelector(".login-form");
form.addEventListener("submit", evt => {
    evt.preventDefault();
    const { email, password } = form.elements;
    const user = {
        email: email.value.trim(),
        password: password.value.trim(),
    };
    if (user.email === "" || user.password === "") {
        alert("All form fields must be filled in");
        return;
    }
    console.log(user);
    form.reset();
});

