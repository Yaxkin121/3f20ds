

let random;
let x = 0;
  console.log(`El número aleatorio es: `);

for (x; x < 10; x++) {
  random = Math.floor(Math.random() * (10 - 1)) + 1;

  console.log(random);
}