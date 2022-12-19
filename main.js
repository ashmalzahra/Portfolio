const menuBtn = document.querySelector(".menu")
const closeBtn = document.querySelector(".close")
const mobileMenu = document.querySelector(".mobile-menu")
const mobileMenuItem = document.querySelectorAll(".mobile-menu-item")


function showMenu(e){
    e.preventDefault();
    mobileMenu.style.display = "block";
}

function hideMenu(){
    mobileMenu.style.display = "none";
}

menuBtn.addEventListener("click", showMenu)
closeBtn.addEventListener("click", hideMenu)
mobileMenuItem.addEventListener("click", hideMenu)