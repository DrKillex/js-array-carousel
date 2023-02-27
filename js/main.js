'use strict';

/* <div class="item d-none show"><img src="img/01.webp" alt=""></div> */

const imgList = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];

const carousel = document.querySelector('.carousel');


let itemImg = '';
let actualImg = 0;

for (let i = 0; i < imgList.length; i++){
    itemImg += `<div class="item"><img src="img/${imgList[i]}" alt=""></div>`;   
};
carousel.innerHTML += itemImg;

document.querySelector('.item').classList.add('show');
const arrowUp = document.querySelector('.arrow-up');
const arrowDown = document.querySelector('.arrow-down');
const divImg = document.querySelectorAll('.item');

arrowDown.addEventListener ('click',
function() {
    if(actualImg < imgList.length -1){
        divImg[actualImg].classList.remove('show');
        actualImg++
        divImg[actualImg].classList.add('show');
    } else {
        divImg[actualImg].classList.remove('show');
        actualImg = 0
        divImg[actualImg].classList.add('show');
    }
});

arrowUp.addEventListener ('click',
function() {
    if(actualImg > 0){
        divImg[actualImg].classList.remove('show');
        actualImg = actualImg-1
        divImg[actualImg].classList.add('show');
    } else {
        divImg[actualImg].classList.remove('show');
        actualImg = imgList.length-1
        divImg[actualImg].classList.add('show');
    }
});