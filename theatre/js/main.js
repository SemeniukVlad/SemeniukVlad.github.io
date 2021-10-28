"use strict"

document.querySelector('.menu_btn').addEventListener('click', function(){
    let menu = document.querySelector('nav');
    menu.classList.toggle('menu_mob');
});

for (let item of document.querySelectorAll('nav a')){
    item.addEventListener('click', function(){
        let menu = document.querySelector('nav');
        menu.classList.toggle('menu_mob');
    });
}

document.querySelector('.close_btn').addEventListener('click', function(){
    let menu = document.querySelector('nav');
    menu.classList.toggle('menu_mob');
});
