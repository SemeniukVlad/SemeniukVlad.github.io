"use strict"

document.querySelector('.menu_btn').addEventListener('click', function(){
    let menu = document.querySelector('nav');
    menu.classList.toggle('menu_mob');
    document.body.classList.toggle('scroll_prevention');
});

for ( let item of document.querySelectorAll('nav a')){
  item.addEventListener('click', function(){
    let menu = document.querySelector('nav');
    menu.classList.remove('menu_mob');
    document.body.classList.remove('scroll_prevention');
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

const swiper = new Swiper('.pages', {
    direction: 'horizontal',
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 30,
});

const swiper2 = new Swiper('.staging_swiper', {
    slidesPerView: 'auto',
    spaceBetween: 0,
});

  

const swiper3 = new Swiper(".partners_swiper", {
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    slidesPerView: 1,
    freeMode: true,
    grid: {
      fill: 'row',
      rows: 2,
    },
    spaceBetween: 50,
    breakpoints: {
      576: {
        slidesPerView: 2,
        grid: {
          fill: 'row',
          rows: 2,
        },
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 3,
        grid: {
          fill: 'row',
          rows: 2,
        },
        spaceBetween: 50,
      },
      1366: {
        slidesPerView: 4,
        grid: {
          fill: 'row',
          rows: 2,
        },
        spaceBetween: 50,
      },
    }
});