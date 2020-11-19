let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log(`¿Cuántos números aleatorios quieres? `);
rl.question('', (xx) => {
  x = parseInt(xx);
  let random;
  
  for (let i = 0; i <= x; i++) {
    random = Math.floor(Math.random() * (10 - 1)) + 1;
    console.log(random);
  }
  rl.close();
})