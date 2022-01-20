"use strict"

document.querySelector(".mobMenuButton").addEventListener("click", ()=>
    document.querySelector(".leftNav").classList.toggle("showMenu")
);
document.querySelector(".lang").addEventListener("click", ()=>
    document.querySelector(".langOptions").classList.toggle("optionsShow")
);

for(let item of document.querySelectorAll(".langOption")){
    item.addEventListener("click", ()=>
    document.querySelector(".lang>p").innerHTML = item.innerHTML
);
}


$('.slider').slick({
    accessibility: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplayspeed: 3000
});