const btn = document.querySelector(".Dropdown")
const mobileNav = document.querySelector(".nav__container")
const line1__bars = document.querySelector(".line1__bars-menu");
const line2__bars = document.querySelector(".line2__bars-menu");
const line3__bars = document.querySelector(".line3__bars-menu");
const navLinks = document.querySelector(".items__nav");
const DOM = document;

// ABRIR O CERRAR MENU DESPLEGABLE EN MOBILE
const OpensMenu = () => {
    mobileNav.classList.toggle("mobile__nav");
    btn.classList.toggle("Dropdown__open");
    animateBars();
}

// CERRAR MENU DESPLEGABLE AL HACER SCROLL
const ScrollDom = () => {
    if (mobileNav.classList.contains("mobile__nav")) {
        mobileNav.classList.toggle("mobile__nav");
        btn.classList.toggle("Dropdown__open");
        animateBars();
    }else {
        return
    }
}

// ANIMACION DEL BOTON DEL MENU DESPLEGABLE
function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
}

//CERRAR MENU DESPLEGABLE CLICKEANDO EN LOS LINKS
const CloseOnClick = (e) => {
    if (e.target.classList.contains('.nav__links')) {
        return;
    }
    mobileNav.classList.remove("mobile__nav");
    btn.classList.remove("Dropdown__open");
    animateBars();
}

const init = () => {
    btn.addEventListener('click', OpensMenu);
    navLinks.addEventListener('click', CloseOnClick);
    DOM.addEventListener('scroll', ScrollDom);
}

init()