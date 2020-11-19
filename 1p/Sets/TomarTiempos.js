var SetsNames = new Set()
var BNames = "Name"
var times = 100000

console.time('Tiempo tomado');
while(SetsNames.size < times){
    var numero = (Math.floor(Math.random() * times)).toString()
    var nombreCompleto = BNames + numero
    SetsNames.add(nombreCompleto)
}
console.log(SetsNames);
console.timeEnd("Tiempo tomado");