let line = require('line');
let rl = line.createInterface({
    input: process.stdin,
    output: process.stdout
});
let ln = 0 
let y = 0
rl.question('Introduce x: ', (x) => {
rl.question('Introduce el número de iteraciones: ', (n) => {
for( let i = 1; i <= n; i++){
  y = (Math.pow(x, i)*Math.pow(-1,i+1))/i;
  ln = y;
  rl.close();
}
console.log(ln);
})
})