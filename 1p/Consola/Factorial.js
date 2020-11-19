let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log('¿De qué número deseas sabes su factorial?');
rl.question('', (xx) => {
  x = parseInt(xx);

  let temp = 1;
  for (let i = 1; i <= x; i++) {
    temp = temp * i;
  }
  console.log('Resultado: ' + temp);
  rl.close();
})