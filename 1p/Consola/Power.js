let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('Define un número');
rl.question('' , (xx) => {
    console.log('¿A qué potencia?');
    rl.question('', (nn) => {
        let x = parseInt(xx);
        let n = parseInt(nn);
        potencia = Math.pow(x, n);
        console.log(potencia);
        rl.close();
    })
})