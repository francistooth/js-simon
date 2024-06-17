function arrayGenerator(min, max, l) {
   const array = [];

   for (let i = 0; array.length < l; i++) {
      let random = randomNumber(min, max);

      if (!array.includes(random)) {
         array.push(random);
      }
   }

   return array;
}

function randomNumber(min, max) {
   return random = Math.floor(Math.random() * max) + min;
}