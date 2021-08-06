"use strict";

document.querySelector('.repairs_pc_btn').addEventListener('click', function(){
    let list = document.querySelector('.repairs_pc_list');
    list.classList.toggle('visible');
    let btn = document.querySelector('.repairs_pc_btn');
    btn.classList.toggle('btn_hide');
    if (document.querySelector('.btn_hide')){
        document.querySelector('.repairs_pc_btn').innerHTML = "СВЕРНУТЬ";
    } else {
        document.querySelector('.repairs_pc_btn').innerHTML = "РАЗВЕРНУТЬ ДЕТАЛЬНЫЙ СПИСОК";
    };
});

document.querySelector('.repairs_wm_btn').addEventListener('click', function(){
    let list = document.querySelector('.repairs_wm_list');
    list.classList.toggle('visible');
    let btn = document.querySelector('.repairs_wm_btn');
    btn.classList.toggle('btn_hide');
    if (document.querySelector('.btn_hide')){
        document.querySelector('.repairs_wm_btn').innerHTML = "СВЕРНУТЬ";
    } else {
        document.querySelector('.repairs_wm_btn').innerHTML = "РАЗВЕРНУТЬ ДЕТАЛЬНЫЙ СПИСОК";
    };
});

document.querySelector('.repairs_vc_btn').addEventListener('click', function(){
    let list = document.querySelector('.repairs_vc_list');
    list.classList.toggle('visible');
    let btn = document.querySelector('.repairs_vc_btn');
    btn.classList.toggle('btn_hide');
    if (document.querySelector('.btn_hide')){
        document.querySelector('.repairs_vc_btn').innerHTML = "СВЕРНУТЬ";
    } else {
        document.querySelector('.repairs_vc_btn').innerHTML = "РАЗВЕРНУТЬ ДЕТАЛЬНЫЙ СПИСОК";
    };
});


