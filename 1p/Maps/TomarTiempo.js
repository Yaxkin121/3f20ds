var MapNames = new Map();
var BaseNames = "Name";
var tiempo = new Date().getTime();
var n = 100000;

console.time('Tiempo tomado');
while(MapNames.size < n) {
    var num = (Math.floor(Math.random() * n)).toString();
    var names = BaseNames + num;
    MapNames.set(num, names);
    num++;
}
for(let nombre of MapNames.values()) {
    console.log(nombre);
}
console.timeEnd("Tiempo tomado");