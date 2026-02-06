import "./index.css";
import { renderHome } from "./pages/home.js";
import { renderMenu } from "./pages/menu.js";

renderHome();

const nav = document.querySelector("nav");

nav.addEventListener("click", e => {
    switch(e.target.id) {
        case "home":
            renderHome();
            break;
        case "menu":
            renderMenu();
            break;
    }
});