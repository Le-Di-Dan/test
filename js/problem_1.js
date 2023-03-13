const menuToggler = document.querySelector("header.page-header > .menu-toggler")
const menu = document.querySelector("header.page-header > .menu")
const menuList = menu.querySelector(".list")
let toggleState = false

function toggle() {
    toggleState = !toggleState
    menu.setAttribute("data-toggle", toggleState)
}

menuList.onclick = (e) => {
    e.stopPropagation()
}

menu.onclick = toggle
menuToggler.onclick = toggle