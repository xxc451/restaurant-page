import "./menu.css";

import dragonPic from "../img/dragon.jpg";
import salmonPic from "../img/salmon.jpg";
import wagyuPic from "../img/wagyu.jpg";
import edamamePic from "../img/edamame.jpg";

function renderMenu() {
    const contentContainer = document.querySelector("#content");
    contentContainer.textContent = "";

    const items = [
        {
            name: "Signature Dragon Roll",
            desc: `A visually stunning masterpiece featuring crispy shrimp tempura and cucumber, topped with expertly layered avocado "scales" and a drizzle of sweet unagi eel sauce.`,
            price: "$18.50",
            image: dragonPic
        },
        {
            name: "Spicy Salmon Mango Roll",
            desc: "A refreshing fusion of flavors with spicy salmon and fresh mango wrapped in seaweed, topped with crunchy tempura flakes and a sweet chili glaze for the perfect balance of heat and sweetness.",
            price: "$16.00",
            image: salmonPic
        },
        {
            name: "Wagyu Truffle Nigiri",
            desc: "For an upscale touch, this dish features premium seared A5 Wagyu beef over hand-pressed rice, finished with a hint of truffle soy and delicate microgreens.",
            price: "$24.00",
            image: wagyuPic
        },
        {
            name: "Zesty Edamame",
            desc: "The essential Japanese appetizer, steamed green soybean pods tossed in a spicy Sriracha-soy glaze and finished with a pinch of sea salt.",
            price: "$8.50",
            image: edamamePic
        }
    ];

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const menuTitle = document.createElement("h2");
    menuTitle.textContent = "Signature Dishes";

    const cardGrid = document.createElement("div");
    cardGrid.classList.add("card-grid");

    items.forEach(item => {
        const card = document.createElement("div");

        const image = document.createElement("img");
        image.setAttribute("src", item.image);
        image.classList.add("menu-img");

        const cardInfo = document.createElement("div");
        cardInfo.classList.add("card-info");
        
        const cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header");

        const name = document.createElement("h3");
        name.textContent = item.name;

        const price = document.createElement("p");
        price.classList.add("price");
        price.textContent = item.price;

        const desc = document.createElement("p");
        desc.classList.add("menu-desc");
        desc.textContent = item.desc;

        cardHeader.append(name, price);
        card.append(image, cardHeader, desc);
        cardGrid.append(card);
    });

    menuContainer.append(menuTitle, cardGrid);
    contentContainer.append(menuContainer);
}

export {
    renderMenu,
}