"use strict"

document.querySelector(".mobMenuButton").addEventListener("click", showMenu);
function showMenu(){
    document.querySelector(".leftNav").classList.toggle("showMenu");
}

$('.slider').slick({
    accessibility: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplayspeed: 3000
});