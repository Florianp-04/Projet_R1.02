const button = document.querySelector("#headerMobButton");
const menu = document.querySelector("#headerNavulJS");

console.log("JS chargé");

button.addEventListener("click", () => {
    menu.classList.toggle("open");
});