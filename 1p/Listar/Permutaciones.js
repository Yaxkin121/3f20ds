var arr = [32,1,4,2,31]
var answ = [];

function p0(n){
    let p0 = (a, p = []) =>{
        if (!a.length) {
            answ.push(p);
    return;
        }
        for(let i in a) {
            let y = a.slice();
            let nxt = y.splice(i,1);
            p0(y, p.concat(nxt));
        }
    }
    p0(n);
    return answ;
}
console.log(p0(arr));
console.log("Complejidad Computacional: Cuadrática");