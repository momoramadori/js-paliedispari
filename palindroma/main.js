//Una funzione per capire se la parola è palindroma

//Chiedo all'utente di inserire una parola
var utentValue = prompt('La parola che inserisci è palindroma?');
console.log(utentValue);

// Creo una funzione che mi permetta di capire se la parola è palindroma
function palindrome(parola) {
    var wordToArray = parola.split('');
    var invertArray = wordToArray.reverse();
    var arrayToInvWord = invertArray.join('');
    return arrayToInvWord;
    console.log(arrayToInvWord);
}

var parola_palindroma = palindrome(utentValue);

if (parola_palindroma == utentValue) {
    //Se palindrome() è true allora la parola è palindroma
    console.log('la parola è palindroma');
} else {
    //Se palidnrome() è false allora la parola non è palindroma
    console.log('la parola non è palindroma');
}
