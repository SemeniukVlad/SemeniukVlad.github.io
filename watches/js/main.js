"use strict"

let i = 1;

function main_screen(){
    switch(i){
        case 1:
            document.querySelector(`.main-screen-image${i}`).classList.toggle('invisible');
            document.querySelector(`.main-screen-image${i+1}`).classList.remove('invisible');
            document.querySelector(`.main-screen-image${i+1}`).classList.remove('behind');
    
            setTimeout(
                function (){
                    document.querySelector(`.main-screen-image${i}`).classList.toggle('behind');
                    i++; 
                    console.log(i);
                }, 500
            );
            console.log(i);
            break;
        case 2:
            document.querySelector(`.main-screen-image${i}`).classList.toggle('invisible');
            document.querySelector(`.main-screen-image${i-1}`).classList.remove('invisible');
            document.querySelector(`.main-screen-image${i-1}`).classList.remove('behind');
    
            setTimeout(
                function (){
                    document.querySelector(`.main-screen-image${i}`).classList.toggle('behind');
                    i--;
                    console.log(i);
                }, 500
            );
            console.log(i);
            break;
    }
}

setInterval(main_screen, 5000);