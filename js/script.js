
console.log('JS OK!');

/*
Scrivi un programma che stampi in console i numeri da 1 a 100.
Per i multipli di 3 stampi "fizz al posto del numero e per i multipli di 5 "Buzz".
Per i numeri che sono sia multipli di 3 che di 5 stampi fizzbuzz
*/


for (let i = 1; i <=100; i++) {
       
    if (!(i % 3) && !(i % 5)) {
        console.log('fizzbuzz')
    } else if (!(i % 3)) {
        console.log('fizz');
    } else if (!(i % 5)) {
        console.log('buzz');    
    } else {
        console.log(i);
    }
}


