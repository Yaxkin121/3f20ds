let readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log('¿Cuántos primos deseas calcular?');
rl.question('', (xx) => {
  let i = 2;
  let j = 0;
  let contador = 0;
  let x = parseInt(xx);

  while (i <= x + 1) {
    while (j < i) {
      if (i % j == 0 && j != 1) {
        contador = 1;
      }
      j++;
    }

    if (contador == 0) {
      console.log(j);
    } else {
      contador = 0;
      x = x + 1;
    }
    i++;
    j = 0;
  }

  rl.close();
});