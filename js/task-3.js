const input = document.querySelector("#name-input");
const res = document.querySelector("#name-output");

input.addEventListener("input", () => {
    const trimInput = input.value.trim();
    if (trimInput === "") {
        res.textContent = "Anonymous";
    } else {
        res.textContent = trimInput;
    }
});



