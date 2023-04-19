import { shoes } from "./secondary.js";
const btn = document.querySelector(".dropdown");
const mobileNav = document.querySelector(".nav__container");
const navLinks = document.querySelector(".items__nav");
const CloseMenuBtn = document.querySelector(".close__menu")
const DOM = document;
const listElements = document.querySelectorAll(".list__button--click");

// ABRIR O CERRAR MENU DESPLEGABLE EN MOBILE
const OpensMenu = () => {
    mobileNav.classList.add("visible__nav");
}

const CloseMenu = () => {
    mobileNav.classList.remove("visible__nav");
}

//CERRAR MENU DESPLEGABLE CLICKEANDO EN LOS LINKS
const CloseOnClick = (e) => {
    if (e.target.classList.contains('.nav__links')) {
        return;
    }
    mobileNav.classList.remove("visible__nav");
}

listElements.forEach(listElement => {
    listElement.addEventListener("click", () => {
        listElement.classList.toggle("arrow");

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;
    })
});

const init = () => {
    btn.addEventListener('click', OpensMenu);
    CloseMenuBtn.addEventListener('click', CloseMenu);
    navLinks.addEventListener('click', CloseOnClick);
    DOM.addEventListener('scroll', ScrollDom);
}

init()

hola()