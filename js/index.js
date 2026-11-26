const buttonSwitchIndex = document.querySelector("#buttonLightDarkIndex");

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