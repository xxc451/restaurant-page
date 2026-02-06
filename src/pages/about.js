import "./about.css";

function renderAbout() {
    const contentContainer = document.querySelector("#content");
    contentContainer.textContent = "";

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    const aboutGrid = document.createElement("div");
    aboutGrid.classList.add("about-grid");

    const aboutLeft = document.createElement("div");
    aboutLeft.classList.add("about-left");

    const leftTitle = document.createElement("h4");
    leftTitle.textContent = "A Decade of Training";
    const leftContent = document.createElement("div");
    leftContent.classList.add("about-content");
    leftContent.textContent = "Traditionally, an itamae (sushi chef) trained for up to 10 years before being allowed to work in a restaurant. We honor this dedication to craft in every slice.";

    const aboutRight = document.createElement("div");
    aboutRight.classList.add("about-right");
    const rightTitle = document.createElement("h4");
    rightTitle.textContent = "Opening Hours"
    const rightContent = document.createElement("ul");
    rightContent.classList.add("about-content");
    const list1 = document.createElement("li");
    list1.textContent = "Monday to Friday: 12:00 - 22:00";
    const list2 = document.createElement("li");
    list2.textContent = "Saturday: 12:00 - 23:00";
    const list3 = document.createElement("li");
    list3.textContent = "Sunday: 16:00 - 23:00";

    rightContent.append(list1, list2, list3);
    aboutRight.append(rightTitle, rightContent);
    aboutLeft.append(leftTitle, leftContent);
    aboutGrid.append(aboutLeft, aboutRight);
    aboutContainer.append(aboutGrid);
    contentContainer.append(aboutContainer);
}

export {
    renderAbout,
}