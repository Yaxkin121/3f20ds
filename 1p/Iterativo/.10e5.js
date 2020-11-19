console.time('Tiempo tomado');
let random;
for (let i = 0; i <= Number('10e5'); i++) {
  random += Math.floor(Math.random() * (9999 - 1)) + 1 + '\n';
}
console.log(random);
console.timeEnd("Tiempo tomado");