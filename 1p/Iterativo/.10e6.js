console.time('Tiempo tomado');
let numrandom;
for (let i = 0; i <= Number('10e6'); i++) {
  numrandom += Math.floor(Math.random() * (9999 - 1)) + 1 + '\n';
}
console.log(numrandom);
console.timeEnd("Tiempo tomado");