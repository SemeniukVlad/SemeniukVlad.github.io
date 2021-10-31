"use strict"

document.querySelector('.menu_btn').addEventListener('click', function(){
    let menu = document.querySelector('nav');
    menu.classList.toggle('menu_mob');
    document.body.classList.toggle('scroll_prevention');
});

for (let item of document.querySelectorAll('.menu_mob a')){
    item.addEventListener('click', function(){
        let menu = document.querySelector('nav');
        menu.classList.toggle('menu_mob');
        document.body.classList.toggle('scroll_prevention');
    });
}

document.querySelector('.close_btn').addEventListener('click', function(){
    let menu = document.querySelector('nav');
    menu.classList.toggle('menu_mob');
    document.body.classList.toggle('scroll_prevention');
});

document.addEventListener('scroll', function(){
    if (window.pageYOffset>0){
        document.querySelector('header').classList.add('bg_darken');
    } else {
        document.querySelector('header').classList.remove('bg_darken');
    }
});

