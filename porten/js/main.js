"use strict"

document.querySelector('.mobile_btn_wrap').addEventListener('click', function(){
    let menu = document.querySelector('.header_wrap');
    menu.classList.toggle('menu_mob');
    document.body.classList.toggle('scroll_prevention');
});

for (let item of document.querySelectorAll('.nav_wrap a')){
    item.addEventListener('click', function(){
        let menu = document.querySelector('.header_wrap');
        menu.classList.toggle('menu_mob');
        document.body.classList.toggle('scroll_prevention');
    });
}

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    },
  });