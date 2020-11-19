let horam = 10;
let i = 1;

for (i; i <= 2500; i++) {
    if(horam >= 0)
        horam -= 1;
    else if (horam <= 0)
        horam = 24;
}
console.log('Hace 2,500 hrs siendo las 10, fueron las ' + horam + ' horas.');