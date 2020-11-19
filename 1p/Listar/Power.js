let arr = [3,1,4,2,3];
    function potencia(x) {
        return x.reduce((y, z) => 
            y.concat(y.map(d => [z].concat(d))), [[]]);
    }
console.log(potencia(arr));
console.log("Complejidad computacional: función exponencial");