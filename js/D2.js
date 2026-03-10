const start = "Inizio Esercizio n.";
const end = "Fine Esercizio n.";
const space = "";
/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(start + "1");

let firstNumber = 10;
let secondNumber = 5;

if (firstNumber > secondNumber) {
  // il primo numero è maggiore
  console.log("La costante firstNumber ha il valore maggiore: ", firstNumber);
} else if (firstNumber === secondNumber) {
  // sono lo stesso numero
  console.log("Le due variabili contengono lo stesso numero");
} else {
  // il secondo numero è maggiore
  console.log("La costante secondNumber ha il valore maggiore: ", secondNumber);
}

console.log(end + "1");
console.log(space);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(start + "2");

firstNumber = 2;

if (firstNumber !== 5) {
  // è diverso
  console.log("not equal");
} else {
  // è uguale
  console.log("equal");
}

console.log(end + "2");
console.log(space);

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(start + "3");

firstNumber = 10;

if (firstNumber % 5 === 0) {
  // divisibile per 5
  console.log("divisibile per 5");
} else {
  // non divisibile per 5
  console.log("non divisibile per 5");
}

console.log(end + "3");
console.log(space);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(start + "4");

let sum = firstNumber + secondNumber;
let sub = firstNumber - secondNumber;
if (firstNumber === 8 || secondNumber === 8 || sum === 8 || sub === 8) {
  // risultato positivo
  console.log(
    "O uno dei due numeri è 8 o la somma tra i due numeri fa 8 o la differenza tra i due numeri fa 8",
  );
} else {
  // risultato negativo
  console.log(
    "Nessuno dei due numeri è 8 e nè la loro somma nè la loro differenza fa 8",
  );
}

console.log(end + "4");
console.log(space);

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(start + "5");

let totalShoppingCart = 45;
let shippingCost = 10;
let finalAmount;

if (totalShoppingCart >= 50) {
  finalAmount = totalShoppingCart;
  console.log("Spedizione gratuita! Totale:", finalAmount);
} else {
  finalAmount = totalShoppingCart + shippingCost;
  console.log("Costo spedizione 10€. Totale:", finalAmount);
}

console.log(end + "5");
console.log(space);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(start + "6");

let total = 60;
let isBlackFriday = true;
shippingCost = 10;

// applicazione dello sconto solo sulla merce
if (isBlackFriday) {
  total = total * 0.8;
}

// calcolo spedizione
let finalCheckout;
if (total >= 50) {
  finalCheckout = total;
  console.log("Sconto applicato e spedizione gratuita. Totale:", finalCheckout);
} else {
  finalCheckout = total + shippingCost;
  console.log(
    "Sconto applicato, ma paghi la spedizione. Totale:",
    finalCheckout,
  );
}

console.log(end + "6");
console.log(space);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(start + "7");

firstNumber = 35;
secondNumber = 80;
let thirdNumber = 30;

// ordinamento numeri

if (
  firstNumber > secondNumber &&
  firstNumber > thirdNumber &&
  secondNumber > thirdNumber
) {
  console.log("Ordine:", firstNumber, secondNumber, thirdNumber);
} else if (
  firstNumber > thirdNumber &&
  firstNumber > secondNumber &&
  thirdNumber > secondNumber
) {
  console.log("Ordine:", firstNumber, thirdNumber, secondNumber);
} else if (
  secondNumber > firstNumber &&
  secondNumber > thirdNumber &&
  firstNumber > thirdNumber
) {
  console.log("Ordine:", secondNumber, firstNumber, thirdNumber);
} else if (
  secondNumber > thirdNumber &&
  secondNumber > firstNumber &&
  thirdNumber > firstNumber
) {
  console.log("Ordine:", secondNumber, thirdNumber, firstNumber);
} else if (
  thirdNumber > firstNumber &&
  thirdNumber > secondNumber &&
  firstNumber > secondNumber
) {
  console.log("Ordine:", thirdNumber, firstNumber, secondNumber);
} else if (
  thirdNumber > secondNumber &&
  thirdNumber > firstNumber &&
  secondNumber > firstNumber
) {
  console.log("Ordine:", thirdNumber, secondNumber, firstNumber);
}

console.log(end + "7");
console.log(space);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(start + "8");

// controllo se il risultato di typeOf sia un numero o meno
let type = typeof firstNumber;
if (type === "number") {
  // è un numero
  console.log("Il tipo della variabile è un numero: ", firstNumber, ",", type);
} else {
  // non è un numero
  console.log(
    "Il tipo della variabile non è un numero: ",
    firstNumber,
    ",",
    type,
  );
}

console.log(end + "8");
console.log(space);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(start + "9");

if (firstNumber % 2 === 0) {
  // è pari
  console.log("Il numero è pari:", firstNumber);
} else {
  // è dispari
  console.log("Il numero è dispari:", firstNumber);
}

console.log(end + "9");
console.log(space);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA
 */
console.log(start + "10");

let val = 7;
// controlli che avvengono gradualmente, dal valore più piccolo
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("10 o maggiore");
}

console.log(end + "10");
console.log(space);

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(start + "11");

// aggiungo una proprietà
me.city = "Toronto";
console.log(me);

console.log(end + "11");
console.log(space);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(start + "12");

// elimino una proprietà
delete me.lastName;
console.log(me);

console.log(end + "12");
console.log(space);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(start + "13");

// elimino l'ultimo elemento dell'array
me.skills.pop();
console.log(me);

console.log(end + "13");
console.log(space);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(start + "14");

// creo un array e poi lo riempio;
const numeri = [];
numeri.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(numeri);

console.log(end + "14");
console.log(space);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(start + "15");

// rimuovo l'ultimo elemento e lo sostituisco con 100
// 9,1 vuol dire: dopo la nona posizione, elimina un elemento
numeri.splice(9, 1, 100);
console.log(numeri);

console.log(end + "15");
console.log(space);
