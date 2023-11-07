//Esercizio 0

//Scrivi un programma che dato un numero intero compreso tra 1 a 7
// visualizzi il corrispondente giorno della settimana. Sapendo che:
//   1 = lunedì
//   2 = martedì
//   3 = mercoledì
//   ...
//   7 = domenica
// Esempi:
//   Input: numero = 6
//   Output: "Sabato"
//   Input: numero = 10
//   Output: “Errore! Giorno della settimana non valido!"

let num = 8;

switch (num) {
    case 1:
        console.log(`Lunedi`);
         break;
    case 2:
        console.log(`Martedi`);
        break;
    case 3:
        console.log(`mercoledi`);
        break;
    case 4:
        console.log(`Giovedi`);
        break;
    case 5:
        console.log(`Venerdi`);
        break;
    case 6:
        console.log(`Sabato`);
        break;
    case 7:
        console.log(`Domenica`);
        break;
    default:
        console.log(`Errore! Giorno della settimana non valido`);
        break;
}

//ESERCIZIO 1

//   Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.
//   Esempio
//     Input: a = 1, b = 2, c = 3,  = 4, e = 5
//     “La somma e’  X e la media e Y”
//     Output: somma = 15, media = 3;

let a=1;
let b=2;
let c=3;
let d=4;
let e=5;
function calcolaLaSomma(a,b,c,d,e) {
    return a+b+c+d+e;
}


function calcolaLaMedia(a,b,c,d,e){
    return(a,b,c,d,e) / 5;
}

let somma = calcolaLaSomma(a,b,c,d,e);
let media= calcolaLaMedia(a,b,c,d,e);

console.log(`La somma è ${somma} e la media è ${media}`);

//ESERCIZIO 2

//Provare a rifare il seguente esercizio, con le funzioni
// Scrivi un programma che dato un numero intero compreso tra 1 a 7
// visualizzi il corrispondente giorno della settimana. Sapendo che:
//   1 = lunedì
//   2 = martedì
//   3 = mercoledì
//   ...
//   7 = domenica
// Esempi:
//   Input: numero = 6
//   Output: "Sabato"
//   Input: numero = 10
//   Output: “Errore! Giorno della settimana non valido!"

function giotnoSettimana(number) {
    
switch (number) {
    case 1:
        console.log(`Lunedi`);
         break;
    case 2:
        console.log(`Martedi`);
        break;
    case 3:
        console.log(`mercoledi`);
        break;
    case 4:
        console.log(`Giovedi`);
        break;
    case 5:
        console.log(`Venerdi`);
        break;
    case 6:
        console.log(`Sabato`);
        break;
    case 7:
        console.log(`Domenica`);
        break;
    default:
        console.log(`Errore! Giorno della settimana non valido`);
        break;
}

    
}

let number=5;
let resulte= giotnoSettimana(number);

console.log(resulte);

//ESERCIZIO 3

// Scrivi un programma che, dato il numero dei tiri da effettuare per ciascun giocatore (N),
// simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizzato più punti,
// supponendo che ogni dado abbia al massimo 6 facce, ogni giocatore tirerà il dado N volte, ciò  significa che verrà generato un numero casuale ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.

let p1 = 0;
let p2 = 0;
let max = 6;
let min = 1;

function sfidaAiDadi(nTiri){

    for(let i = 1; i <= nTiri; i++){
        p1 += Math.floor(Math.random() * (max - min + 1) + min);
        p2 += Math.floor(Math.random() * (max - min + 1) + min);
    }

    if(p1 > p2){

        return `Il vincitore della sfida con ${nTiri} tiri, è il primo giocatore che ha totalizzato un punteggio di ${p1} punti.`;

    } else if(p2 > p1){

        return `Il vincitore della sfida con ${nTiri} tiri, è il secondo giocatore che ha totalizzato un punteggio di ${p2} punti.`;

    } else {

        return `I giocatori della sfida con ${nTiri} tiri, hanno pareggiato, totalizzando un punteggio di ${p1} punti.`

    }

}

let sfidaCinqueDadi = sfidaAiDadi(5);
console.log(sfidaCinqueDadi);

let sfidaDieciDadi = sfidaAiDadi(10);
console.log(sfidaDieciDadi);

let sfidaDado = sfidaAiDadi(1);
console.log(sfidaDado);

//ESERCIZIO 4

//Provare a rifare il seguente esercizio, con le funzioni
// Scrivi un programma che dato un numero stampi la tabellina corrispondente.

function tabellina(numero) {
    for (let i = 1; i <= 10; i++) {
        let risultato = numero * i;
        console.log(`${numero} x ${i} = ${risultato}`);
    }
}

let print = 7;

tabellina(print);

//ESERCIZIO 5

//Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,   FALSE altrimenti.
//   Esempi:
//     Input: n = 2, m = 3
//     Output: FALSE
//     Input: n = 2, m = '2'
//     Output: FALSE
//     Input: n = 2, m = 2
//     Output: TRUE

function uguaglianza(argomento1 , argomento2) {
    return argomento1===argomento2;
    
}

console.log(uguaglianza(2,3));
console.log(uguaglianza(2,'3'));
console.log(uguaglianza(2,2));

//ESERCIZIO 6

//Scrivi una funzione che dato un numero intero (esempio: 9999) conti da quante cifre è formato.
//Esempi:

    //Input : 9
   // Output :  1 cifra

    //Input : 99
    //Output :  2 cifre 

//(Consiglione metodo .toString( )

function contatore(numero) {
    let num = numero.toString();
    let lunghezza=num.length;

    return lunghezza
    
}

console.log(`Input: 8- Output ${contatore(8)} cifra`);
console.log(`Input: 75- Output ${contatore(75)} cifre`);
console.log(`Input: 1570- Output ${contatore(1570)} cifre`);
