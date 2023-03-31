const btn = document.querySelector(".Dropdown")
const mobileNav = document.querySelector(".nav__container")

btn.addEventListener("click", () => {
    mobileNav.classList.toggle("mobile__nav")
})