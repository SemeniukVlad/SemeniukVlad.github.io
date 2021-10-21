"use strict"

document.querySelector('.mobile_btn_wrap').addEventListener('click', function(){
    let menu = document.querySelector('.nav_wrap div:last-child');
    menu.classList.toggle('menu_mob');
});

for (let item of document.querySelectorAll('.nav_wrap a')){
    item.addEventListener('click', function(){
        let menu = document.querySelector('.nav_wrap div:last-child');
        menu.classList.toggle('menu_mob');
    });
}
