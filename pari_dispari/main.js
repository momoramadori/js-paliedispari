// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha vinto.



//Chiedi all'utente se sceglie pari o dispari
var pari_dispari = prompt('Scegli pari o dispari');
console.log(pari_dispari);

//Chiedi all'utente di scegliere un numero tra  1 e 5
var numero1_5 = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log(numero1_5);

//Uso una funzione per generare un numero random tra 1 e 5
function randomNumber(min,max) {
    var numero = Math.floor(Math.random() * (max - min + 1 ) + min)
    return numero
}
var numeroRandom = randomNumber(1,5);
console.log(numeroRandom);

//Uso una funzione per vedere se la somma è pari o dispari
var sommaNumeri = numeroRandom + numero1_5;
function checkPari(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
var isPari = checkPari(sommaNumeri);
console.log(isPari);

//Vedi chi ha vinto tra i due
if (pari_dispari == 'pari' && isPari == true) {
    console.log('Complimenti, hai vinto! Il numero è pari ed è: ' + sommaNumeri);
} else if (pari_dispari == 'dispari' && isPari == false) {
    console.log('Complimenti, hai vinto! il numero è dispari ed è: ' + sommaNumeri);
} else if (pari_dispari == 'pari' && isPari == false) {
    console.log('Hai perso! il numero è dispari ed è: ' + sommaNumeri);
} else if (pari_dispari == 'dispari' && isPari == true) {
    console.log('Hai perso! il numero è pari ed è: ' + sommaNumeri);
} else {
    console.log('Qualcosa è andato storto, ritenta!');
}
