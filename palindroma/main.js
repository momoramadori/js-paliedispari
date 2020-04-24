//Una funzione per capire se la parola è palindroma

//Chiedo all'utente di inserire una parola
var utentValue = prompt('La parola che inserisci è palindroma?');
console.log(utentValue);

// Creo una funzione che mi permetta di capire se la parola è palindroma
function palindrome() {
    var wordToArray = utentValue.split('');
    var invertArray = wordToArray.reverse();
    var arrayToInvWord = invertArray.join('');
    console.log(arrayToInvWord);
    if (arrayToInvWord == utentValue) {
        //Se la parola inserita e il suo inverso sono uguali restituisco vero
        return true;
    } else {
        //Se la parola inserita e il suo inverso sono diverse restituisco falso
        return false;
    }
}

if (palindrome(utentValue) == true) {
    //Se palindrome() è true allora la parola è palindroma
    console.log('la parola è palindroma');
} else {
    //Se palidnrome() è false allora la parola non è palindroma
    console.log('la parola non è palindroma');
}
