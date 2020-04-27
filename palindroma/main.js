//Una funzione per capire se la parola è palindroma

//Chiedo all'utente di inserire una parola
var utentValue = prompt('La parola che inserisci è palindroma?');
console.log(utentValue);

// Creo una funzione che mi permetta di capire se la parola è palindroma
function invertWord(parola) {
    var wordToArray = parola.split('');
    var invertArray = wordToArray.reverse();
    var arrayToInvWord = invertArray.join('');
    return arrayToInvWord;
}
//Creo una funzione che verifichi se la parola è palindroma o meno
function parolaPalindroma(parola) {
    if (invertWord(parola) == parola) {
        //Se palindrome() è true allora la parola è palindroma
        return true;
    } else {
        //Se palidnrome() è false allora la parola non è palindroma
        return false
    }
}
//Creo un if per stampare il contenuto adatto in base all'esito della funzione
if (parolaPalindroma(utentValue)) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}
