const btn = document.querySelector(".Dropdown")
const mobileNav = document.querySelector(".nav__container")
const line1__bars = document.querySelector(".line1__bars-menu");
const line2__bars = document.querySelector(".line2__bars-menu");
const line3__bars = document.querySelector(".line3__bars-menu");
const navLinks = document.querySelector(".items__nav");

const OpensMenu = () => {
    mobileNav.classList.toggle("mobile__nav");
    btn.classList.toggle("Dropdown__open");
    animateBars();
}

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
}

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
}

init()