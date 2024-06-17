// elementi in pagina

const element = document.getElementById('text');

// creazione array numeri casuali

const randomInts = arrayGenerator(0, 100, 5);

for (let i = 0; i < randomInts.length; i++) {
   console.log(randomInts[i]);
}

element.innerHTML = randomInts;

// faccio scomparire i numeri dalla pagina

setTimeout(function() {
   element.innerHTML = "";
}, 28000);

// prompts

const userChoices = [];

setTimeout(function() {
   for (let i = 0; i < randomInts.length; i++) {
      userChoices[i] = parseInt(prompt(`inserisci il numero in posizione ${i + 1}` ));
   }

   const incorrect = [];

   let cnt = 0;

   for (let i = 0; i < randomInts.length; i++) {
      if (userChoices[i] === randomInts[i]) {
         console.log(`numero in posizione ${i + 1} corretto`);
         cnt++;
      } else {
         console.log(`numero in posizione ${i + 1} sbagliato`);
         incorrect.push(`hai sbagliato in posizione ${i + 1}`);
      }
   }

   if (cnt === randomInts.length) {
      console.log("tutti corretti!");
   } else {
      console.log(incorrect);
   }
}, 30000);