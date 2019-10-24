// Fizz Buzz test:
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

var fizz = 3;
var buzz = 5;
var fizzBuzzResult;
var fizzBuzzPath = document.getElementById('fizzbuzz-results');

for (var i = 1; i <= 100; i++) {
  if (i % fizz === 0 && i % buzz === 0) { //controllo prima che il numero sia multiplo di entrambi
    console.log('FizzBuzz');
    fizzBuzzPath.innerHTML += '<li>' + 'FizzBuzz' + '</li>';
  } else if (i % fizz === 0) { //controllo se num iesimo è multiplo di 3
    console.log('Fizz');
    fizzBuzzPath.innerHTML += '<li>' + 'Fizz' + '</li>';
  } else if (i % buzz === 0) {  //controllo se num iesimo è multiplo di 5
    fizzBuzzPath.innerHTML += '<li>' + 'Buzz' + '</li>';
  } else {  //se nessuna condizione si verifica stampo il numero stesso
    console.log(i);
    fizzBuzzPath.innerHTML += '<li>' + i + '</li>';
  }
}
