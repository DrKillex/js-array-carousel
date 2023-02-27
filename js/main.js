'use strict';

const imgList = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];                //lista immagini

const carousel = document.querySelector('.carousel');                                   //trova carosello
const thumbnail = document.querySelector('.thumbnail');                                 //trova thumbnail

let itemImg = '';                                                                       //inizializza variabile contenuto
let actualImg = 0;                                                                      //variabile numero di immagine di partenza

for (let i = 0; i < imgList.length; i++){                                               //ciclo per creare i div con dentro le immagini
    itemImg += `<div class="item"><img src="img/${imgList[i]}" alt=""></div>`;          //creo un div con quello che mi serve
};

carousel.innerHTML += itemImg;                                                          //inserisco div nel carosello
thumbnail.innerHTML += itemImg;                                                         //inserisco div nella thumbnail

document.querySelector('.carousel .item').classList.add('show');                        //trova il primo div item di carosello e gli da classe show
document.querySelector('.thumbnail .item').classList.add('clear');                      //trova il primo div item di thumbnail e gli da classe clear
const arrowUp = document.querySelector('.arrow-up');                                    //trova arrow up
const arrowDown = document.querySelector('.arrow-down');                                //trova arrow down
const divImg = document.querySelectorAll('.carousel .item');                            //seleziona tutti i div item dentro il carosello
const thumbImg = document.querySelectorAll('.thumbnail .item');                         //seleziona tutti i div item dentro la thumbnail

arrowDown.addEventListener ('click',                                                    //al click di arrow down
function() {
    if(actualImg < imgList.length -1){                                                  //SE il numero dell immagine attuale è minore della lunghezza della lista delle immagini
        divImg[actualImg].classList.remove('show');                                     //all attuale immagine del carosello tolgo la classe show
        thumbImg[actualImg].classList.remove('clear');                                  //all attuale immagine della thumbnail tolgo la classe clear
        actualImg++;                                                                    //aumento contatore attuale immagine attuale di 1
        divImg[actualImg].classList.add('show');                                        //all attuale immagine del carosello do la classe show
        thumbImg[actualImg].classList.add('clear');                                     //all attuale immagine della thumbnail do la classe clear
    } else {                                                                            //altrimenti
        divImg[actualImg].classList.remove('show');                                     //all attuale immagine del carosello tolgo la classe show
        thumbImg[actualImg].classList.remove('clear');                                  //all attuale immagine della thumbnail tolgo la classe clear
        actualImg = 0;                                                                  //resetto il contatore a 0
        divImg[actualImg].classList.add('show');                                        //all attuale immagine del carosello do la classe show
        thumbImg[actualImg].classList.add('clear');                                     //all attuale immagine della thumbnail do la classe clear
    }
});

arrowUp.addEventListener ('click',                                                      //al click di arrow down
function() {
    if(actualImg > 0){                                                                  //SE il numero dell immagine attuale è maggiore di 0
        divImg[actualImg].classList.remove('show');                                     //all attuale immagine del carosello tolgo la classe show
        thumbImg[actualImg].classList.remove('clear');                                  //all attuale immagine della thumbnail tolgo la classe clear
        actualImg--;                                                                    //diminuisco contatore attuale immagine attuale di 1
        divImg[actualImg].classList.add('show');                                        //all attuale immagine del carosello do la classe show
        thumbImg[actualImg].classList.add('clear');                                     //all attuale immagine della thumbnail do la classe clear
    } else {                                                                            //altrimenti
        divImg[actualImg].classList.remove('show');                                     //all attuale immagine del carosello tolgo la classe show
        thumbImg[actualImg].classList.remove('clear');                                  //all attuale immagine della thumbnail tolgo la classe clear
        actualImg = imgList.length-1;                                                   //porto il contatore all ultima immagine
        divImg[actualImg].classList.add('show');                                        //all attuale immagine del carosello do la classe show
        thumbImg[actualImg].classList.add('clear');                                     //all attuale immagine della thumbnail do la classe clear
    }
});