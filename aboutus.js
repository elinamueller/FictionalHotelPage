//moon button dark mode
const moonButton = document.getElementById("moonButton");

function darkMode() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("dark-mode");
}
moonButton.addEventListener("click", darkMode);