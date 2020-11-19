let hora = 10;
let i = 1;

for (i; i <= 16652; i++) {
    if(hora <= 24)
        hora += 1;
    else if (hora > 24)
        hora = 0;
}
console.log('En 16,652 hrs siendo las 10, serán las ' + hora + ' horas.');