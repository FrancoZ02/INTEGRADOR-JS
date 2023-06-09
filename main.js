import { shoes } from "./secondary.js";
const btn = document.querySelector(".dropdown");
const mobileNav = document.querySelector(".nav__container");
const overlay = document.querySelector(".overlay");
const cart = document.querySelector(".cart");
const cartContainer = document.querySelector(".cart__container");
const btnCloseCart = document.querySelector('.close__cart')
const navLinks = document.querySelector(".list__item");
const CloseMenuBtn = document.querySelector(".close__menu");
const DOM = document;
const listElements = document.querySelectorAll(".list__button--click");

// ABRIR O CERRAR MENU DESPLEGABLE EN MOBILE
const OpensMenu = () => {
    mobileNav.classList.add("visible__nav");
    overlay.style.display = 'block';
    if (cartContainer.classList.contains('visible__cart')) {
        cartContainer.classList.remove("visible__cart");
    }
    return
}

const CloseMenu = () => {
    mobileNav.classList.remove("visible__nav");
    overlayOut();
}

//CERRAR MENU DESPLEGABLE CLICKEANDO EN LOS LINKS
const CloseOnClick = (e) => {
    if (e.target.classList.contains('.nav__link')) {
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

const overlayOut = () => {
    overlay.style.display= 'none';
}

const closeOverlay = () => {
    overlayOut();
    CloseMenu();
    CloseCart();
}

const OpenCart = () => {
    cartContainer.classList.add('visible__cart');
    overlay.style.display = 'block';
    if (mobileNav.classList.contains('visible__nav')) {
        mobileNav.classList.remove("visible__nav");
    }
    return
}

const CloseCart = () => {
    cartContainer.classList.remove('visible__cart');
    overlay.style.display = 'none';
}

const init = () => {
    btn.addEventListener('click', OpensMenu);
    overlay.addEventListener('click', closeOverlay)
    cart.addEventListener('click', OpenCart);
    btnCloseCart.addEventListener('click', CloseCart);
    CloseMenuBtn.addEventListener('click', CloseMenu);
    navLinks.addEventListener('click', CloseOnClick);
}

init()