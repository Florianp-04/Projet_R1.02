const button = document.querySelector("#headerMobButton");
const menu = document.querySelector("#headerNavulJS");

console.log("JS chargé");

button.addEventListener("click", () => {
    menu.classList.toggle("open");
});



/**const buttonSwitchIndex = document.querySelector("#buttonLightDarkIndex");
const buttonSwitchMagasin = document.querySelector("#buttonLightDarkMagasin");
const buttonSwitchPanier = document.querySelector("#buttonLightDarkPanier");

let actif = false;

buttonSwitchIndex.addEventListener("click", () => {
    actif = !actif;

    buttonSwitchIndex.textContent = actif ? "LIGHT" : "DARK";
    buttonSwitchIndex.setAttribute("aria-pressed", String(actif));

    if (actif) {
        document.querySelector("#indexCSS").href = "css/dark_index.css"
        
    } else {
        document.querySelector("#indexCSS").href = "css/index.css"
    }
});

buttonSwitchMagasin.addEventListener("click", () => {
    actif = !actif;

    buttonSwitchMagasin.textContent = actif ? "LIGHT" : "DARK";
    buttonSwitchMagasin.setAttribute("aria-pressed", String(actif));

    if (actif) {
        document.querySelector("#magasinCSS").href = "../css/dark_magasin.css"
        
    } else {
        document.querySelector("#magasinCSS").href = "../css/magasin.css"
    }
});

buttonSwitchPanier.addEventListener("click", () => {
    actif = !actif;

    buttonSwitchPanier.textContent = actif ? "LIGHT" : "DARK";
    buttonSwitchPanier.setAttribute("aria-pressed", String(actif));

    if (actif) {
        document.querySelector("#panierCSS").href = "../css/dark_panier.css"
        
    } else {
        document.querySelector("#panierCSS").href = "../css/panier.css"
    }
});**/

