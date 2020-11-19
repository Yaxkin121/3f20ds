var arr = [3,1,4,2,3]
var answ = [];

const combination = (ia) => {
    const com = (ar, q = []) => {
        if (ar.length === 0) {
            answ.push(q);
        }
        else {
                for (let i = 0; i < ar.length; i++) {
                    let y = ar.slice();
                    let nxt = y.splice(i, 1);
                    com(y, q.concat(nxt));
            }
        }
    }
    com(ia);
    return answ;
}
console.log(combination(arr));
console.log("Complejidad Computacional: Cuadrática");