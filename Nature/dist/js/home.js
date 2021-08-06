'use strict'

let i = 5;
function change_bg(){
    if (i == 0){
        document.querySelector(`.home-bg-5`).classList.toggle('invisible');
        setTimeout(function change_back(){
            document.querySelector(`.home-bg-1`).classList.toggle('invisible');
            document.querySelector(`.home-bg-2`).classList.toggle('invisible');
            document.querySelector(`.home-bg-3`).classList.toggle('invisible');
            document.querySelector(`.home-bg-4`).classList.toggle('invisible');
        },1500)
        i = 5;
    } else {
        document.querySelector(`.home-bg-${i}`).classList.toggle('invisible');
        i--;
    }
}
setInterval(change_bg, 5000);