let MapNames = new Map();
let BaseNames = "nombre";
let num = 1;
while(MapNames.size<10) {
    let NComplete = (BaseNames + num).toString()
    MapNames.set(num, NComplete)
    num++
}
for(let nombre of MapNames.values()) {
    console.log(nombre)
}