let MapNames = new Map();
let BaseNames = "nombre";
let n = 20;
while(MapNames.size < n) {
    let num = Number((Math.floor(Math.random() * (100 - 1) + 1)).toString());
    let nombreCompleto = BaseNames + num;
    MapNames.set(num, nombreCompleto);
    num++;
}
for(let nombre of MapNames.values()){
    console.log(nombre);
}