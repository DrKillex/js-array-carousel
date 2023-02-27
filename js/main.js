'use strict';

const imgList = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];

const carousel = document.querySelector('.carousel');
const thumbnail = document.querySelector('.thumbnail');

let itemImg = '';
let actualImg = 0;

for (let i = 0; i < imgList.length; i++){
    itemImg += `<div class="item"><img src="img/${imgList[i]}" alt=""></div>`;   
};

carousel.innerHTML += itemImg;
thumbnail.innerHTML += itemImg;

document.querySelector('.carousel .item').classList.add('show');
document.querySelector('.thumbnail .item').classList.add('clear');
const arrowUp = document.querySelector('.arrow-up');
const arrowDown = document.querySelector('.arrow-down');
const divImg = document.querySelectorAll('.carousel .item');
const thumbImg = document.querySelectorAll('.thumbnail .item');

arrowDown.addEventListener ('click',
function() {
    if(actualImg < imgList.length -1){
        divImg[actualImg].classList.remove('show');
        thumbImg[actualImg].classList.remove('clear');
        actualImg++;
        divImg[actualImg].classList.add('show');
        thumbImg[actualImg].classList.add('clear');
    } else {
        divImg[actualImg].classList.remove('show');
        thumbImg[actualImg].classList.remove('clear');
        actualImg = 0;
        divImg[actualImg].classList.add('show');
        thumbImg[actualImg].classList.add('clear');
    }
});

arrowUp.addEventListener ('click',
function() {
    if(actualImg > 0){
        divImg[actualImg].classList.remove('show');
        thumbImg[actualImg].classList.remove('clear');
        actualImg--;
        divImg[actualImg].classList.add('show');
        thumbImg[actualImg].classList.add('clear');
    } else {
        divImg[actualImg].classList.remove('show');
        thumbImg[actualImg].classList.remove('clear');
        actualImg = imgList.length-1;
        divImg[actualImg].classList.add('show');
        thumbImg[actualImg].classList.add('clear');
    }
});