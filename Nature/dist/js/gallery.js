'use strict'

for (let item of document.querySelectorAll('.gallery_item > img')){
    item.addEventListener('click', function (){
        let path = item.getAttribute('src');
        let bg = document.querySelector('.dark_bg');
        bg.classList.toggle('bg_show');
        bg.innerHTML = `<img src = "${path}" class = "large_img"><img class="close" src="/dist/img/x.png">`;
        let close_button = document.querySelector('.close');
        close_button.addEventListener('click', function (){
            bg.classList.toggle('bg_show');
        });
    });
}

