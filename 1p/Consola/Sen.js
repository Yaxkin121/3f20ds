var line = require('line');
var rl = line.createInterface({
    input: process.stdin,
    output: process.stdout
});
var sinx;
var sin = 0;
var y = Math.PI/2;
var m = 1;
var t;
rl.question('Valor de sen ', (t) => {
function factorial(){
    for (let k = 1; k < t; k++){
        m = m * k;
        return m;
    }
}
for (let i = 1; i <= t; i++){
    sinx = Math.pow(-1,i)*(Math.pow(y,2*i+1)/factorial(2*i+1));
    sin += sinx;
    rl.close(i);
}
console.log(sin);
})