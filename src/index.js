import "./index.css";
import { renderHome } from "./pages/home.js"

renderHome();

const nav = document.querySelector("nav");

nav.addEventListener("click", e => {
    switch(e.target.id) {
        case "home":
            renderHome();
            break;
    }
});