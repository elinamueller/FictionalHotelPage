//moon button dark mode
const moonButton = document.getElementById("moonButton");

function darkMode() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("dark-mode");
}
moonButton.addEventListener("click", darkMode);


//footer bar
/*let footerBar = document.getElementById("footerBar");

function footerVisible() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("visibility");
}
footerBar.addEventListener("click", footerVisible);


//button move to the top 
let buttonUp = document.getElementById("buttonUp");

function moveToTop() {
    document.documentElement.scrollTop({top:0, behavior:"smooth"});
}
buttonUp.addEventListener("click",toTop)*/