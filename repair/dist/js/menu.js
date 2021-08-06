"use strict";

document.querySelector('.menu_btn').addEventListener('click', function(){
    let menu = document.querySelector('.menu');
    menu.classList.toggle('menu_mob');
});