import "./home.css";

function renderHome() {
    const contentContainer = document.querySelector("#content");
    contentContainer.textContent = "";

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");

    const textContainer = document.createElement("div");
    textContainer.classList.add("home");

    const name = document.createElement("h1");
    name.textContent = "Saffron Nori";

    const firstLine = document.createElement("p");
    firstLine.textContent = "Experience the essence of Japanese culinary tradition at Saffron Nori."
    firstLine.classList.add("home-desc");

    const secondLine = document.createElement("p");
    secondLine.textContent = "Our master chefs blend precision with passion to create an elegant dining journey through the rich flavors of the sea. Focused on simplicity and the purity of seasonal ingredients, we invite you to sit back, relax, and savor the art of fine sushi."
    secondLine.classList.add("home-desc");

    const thirdLine = document.createElement("p");
    thirdLine.textContent = "Where quality meets tradition."
    thirdLine.classList.add("home-desc", "highlight");

    textContainer.append(name, firstLine, secondLine, thirdLine);
    homeContainer.append(textContainer);
    contentContainer.append(homeContainer);
}

export {
    renderHome,
}
