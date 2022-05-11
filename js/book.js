//moon button dark mode
const moonButton = document.getElementById("moonButton");

function darkMode() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("dark-mode");
}
moonButton.addEventListener("click", darkMode);

//booking form
let inputBook = document.getElementById("inputBook");
let buttonBook = document.getElementById("buttonBook");
let outputBook = document.getElementById("outputBook");

function bookRoom() {
    let fullName = outputBook.innerHTML = inputBook.value
    alert("Congrats! Your Room is booked, " + fullName + ". :)")
}
buttonBook.addEventListener("click", bookRoom);
