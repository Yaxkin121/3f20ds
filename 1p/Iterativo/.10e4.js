console.time('Tiempo tomado');
let ran;
for (let i = 0; i <= Number('10e4'); i++) {
  ran += Math.floor(Math.random() * (9999 - 1)) + 1 + '\n';
}
console.log(ran);
console.timeEnd("Tiempo tomado");