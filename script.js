const menuItems = document.querySelectorAll(".menu-item")
const mobileMenu = document.querySelector(".menu-button")
const mobileCloseMenu = document.querySelector(".close-menu-button")
const headerNav = document.querySelector(".header__nav")


menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const menu = item.closest('li').querySelector('.menu-revealed')
        if (menu.matches(".reveal")) {
            item.querySelector(".up").classList.add("hidden")
            item.querySelector(".down").classList.remove("hidden")
            menu.classList.remove("reveal")
        }
        else {

            item.querySelector(".up").classList.remove("hidden")
            item.querySelector(".down").classList.add("hidden")
            menu.classList.add("reveal")
        }
    })
})

mobileMenu.addEventListener("click", () => {
    headerNav.classList.add("reveal")
})

mobileCloseMenu.addEventListener("click", () => {
    headerNav.classList.remove("reveal")
})