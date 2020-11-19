let sinx;
let sin = 0;
let x = Math.PI/2;
let n = 10;
let f = 1;
function factorial(){
    for (let k=1; k<n; k++){
        f = f * k;
        return f;
    }
}
for (let i = 1; i <= n; i++){
    sinx = Math.pow(-1, i)*(Math.pow(x,2*i+1)/factorial(2*i+1));
    sin += sinx;
    console.log(sin);
}