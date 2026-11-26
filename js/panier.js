const valSalade = document.querySelector("#valSalade");
const buttonPlusSalade = document.querySelector("#buttonPlusSalade");
const buttonMinusSalade = document.querySelector("#buttonMinusSalade");
const valTomates = document.querySelector("#valTomates");
const buttonPlusTomates = document.querySelector("#buttonPlusTomates");
const buttonMinusTomates = document.querySelector("#buttonMinusTomates");
const valOignons = document.querySelector("#valOignons");
const buttonPlusOignons = document.querySelector("#buttonPlusOignons");
const buttonMinusOignons = document.querySelector("#buttonMinusOignons");


console.log("JS chargé");
// Bouton Salades
buttonPlusSalade.addEventListener("click", () => {
    if (Number(valSalade.value) < 999999) {
        valSalade.value = Number(valSalade.value) + 1;
    }
});


buttonMinusSalade.addEventListener("click", () => {
    if (Number(valSalade.value) > 0) {
        valSalade.value = Number(valSalade.value) - 1;
    }
});

// Bouton Tomates
buttonPlusTomates.addEventListener("click", () => {
    if (Number(valTomates.value) < 999999) {
        valTomates.value = Number(valTomates.value) + 1;
    }
});


buttonMinusTomates.addEventListener("click", () => {
    if (Number(valTomates.value) > 0) {
        valTomates.value = Number(valTomates.value) - 1;
    }
});

// Bouton Oignons
buttonPlusOignons.addEventListener("click", () => {
    if (Number(valOignons.value) < 999999) {
        valOignons.value = Number(valOignons.value) + 1;
    }
});


buttonMinusOignons.addEventListener("click", () => {
    if (Number(valOignons.value) > 0) {
        valOignons.value = Number(valOignons.value) - 1;
    }
});

const buttonSwitchPanier = document.querySelector("#buttonLightDarkPanier");

let actif = false;


buttonSwitchPanier.addEventListener("click", () => {
    actif = !actif;

    buttonSwitchPanier.textContent = actif ? "LIGHT" : "DARK";
    buttonSwitchPanier.setAttribute("aria-pressed", String(actif));

    if (actif) {
        document.querySelector("#panierCSS").href = "../css/dark_panier.css"
        
    } else {
        document.querySelector("#panierCSS").href = "../css/panier.css"
    }
});