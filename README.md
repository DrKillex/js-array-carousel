Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

//creo lista immagini
//trovo carosello
//trovo thumbnail
//inizializzo variabile contenuto
//creo variabile numero di immagine di partenza
//ciclo per creare i div con dentro le immagini
//creo un div con quello che mi serve
//inserisco div nel carosello
//inserisco div nella thumbnail
//trovo il primo div item di carosello e gli da classe show
//trovo il primo div item di thumbnail e gli da classe clear
//trovo arrow up
//trovo arrow down
//seleziono tutti i div item dentro il carosello
//seleziono tutti i div item dentro la thumbnail
//al click di arrow down
    //SE il numero dell immagine attuale è minore della lunghezza della lista delle immagini
        //all attuale immagine del carosello tolgo la classe show
        //all attuale immagine della thumbnail tolgo la classe clear
        //aumento contatore attuale immagine attuale di 1
        //all attuale immagine del carosello do la classe show
        //all attuale immagine della thumbnail do la classe clear
    //altrimenti
        //all attuale immagine del carosello tolgo la classe show
        //all attuale immagine della thumbnail tolgo la classe clear
        //resetto il contatore a 0
        //all attuale immagine del carosello do la classe show
        //all attuale immagine della thumbnail do la classe clear
//al click di arrow down
    //SE il numero dell immagine attuale è maggiore di 0
        //all attuale immagine del carosello tolgo la classe show
        //all attuale immagine della thumbnail tolgo la classe clear
        //diminuisco contatore attuale immagine attuale di 1
        //all attuale immagine del carosello do la classe show
        //all attuale immagine della thumbnail do la classe clear
    //altrimenti
        //all attuale immagine del carosello tolgo la classe show
        //all attuale immagine della thumbnail tolgo la classe clear
        //porto il contatore all ultima immagine
        //all attuale immagine del carosello do la classe show
        //all attuale immagine della
