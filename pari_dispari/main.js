// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha vinto.



//Chiedi all'utente se sceglie pari o dispari
var pari_dispari = prompt('Scegli pari o dispari');
console.log(pari_dispari);
//Chiedi all'utente di scegliere un numero tra  1 e 5
var numero1_5 = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log(numero1_5);
//Genera un numero random tra 1 e 5
var numero = Math.floor(Math.random() * 5 + 1)
console.log(numero);
//Vedi chi ha vinto tra i due
if (pari_dispari == 'pari' && (numero1_5 + numero) % 2 == 0) {
    console.log('Complimenti, hai vinto! Il numero è pari ed è: ' + (numero1_5 + numero));
} else if (pari_dispari == 'dispari' && (numero1_5 + numero) % 2 == 1) {
    console.log('Complimenti, hai vinto! il numero è dispari ed è: ' + (numero1_5 + numero));
} else if (pari_dispari == 'pari' && (numero1_5 + numero) % 2 == 1) {
    console.log('Hai perso! il numero è dispari ed è: ' + (numero1_5 + numero));
} else if (pari_dispari == 'dispari' && (numero1_5 + numero) % 2 == 0) {
    console.log('Hai perso! il numero è pari ed è: ' + (numero1_5 + numero));
} else {
    console.log('Qualcosa è andato storto, ritenta!');
}
