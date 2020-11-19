let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('¿Cuál pocisión de la sucesión armónica deseas saber?');
rl.question('', (nn) => {
        let x = 0;
        let n = parseInt(nn);

        for (let i = 1; i <= n; i++) {
            x += 1/i;
        }
            console.log(x);
        rl.close();
    })