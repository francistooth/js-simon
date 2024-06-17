// elementi in pagina

const element = document.getElementById('text');

// creazione array numeri casuali

const randomInts = arrayGenerator(0, 100, 5);

for (let i = 0; i < randomInts.length; i++) {
   console.log(randomInts[i]);
}

element.innerHTML = randomInts;

// prompts

const userChoices = [];

setTimeout(function() {
   element.innerHTML = "";
}, 2000);

setTimeout(function() {
   element.innerHTML = "";
   for (let i = 0; i < randomInts.length; i++) {
      userChoices[i] = parseInt(prompt(`inserisci il numero in posizione ${i + 1}` ));
   }
}, 1000);

for (let i = 0; i < randomInts.length; i++) {

}