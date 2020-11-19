let line = require('line');
let rl = line.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Valor de x: ' , (xx) => {
    rl.question('Valor de N: ', (nn) => {
        let x = parseInt(xx);
        let n = parseInt(nn);
        let sign = "-";
        let sentence="Ln(1+"+x+")=";
        let a = 0;
        let result = 0;
        for (let i = 1; i <= n; i++) {
            let e= Math.pow(x,i);
            let d= e/i;
            if (sign=="+") {
                sign="-";
            }else{
                sign="+";
            }
            sentence+=sign;
            sentence+=d;

            if(i===1){
                result=a=d
            }else if (i%2===0) {
                result= a-d
                a=result
            }else{
                result= a+d
                a=result
            }
        }
        console.log(sentence);
        console.log("Result: " + result);
        rl.close();
    })
})