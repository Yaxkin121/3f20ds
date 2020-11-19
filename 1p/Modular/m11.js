let inicio = 0;
let i = 1;
let días = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for (i; i <= 11; i++) {
    if(inicio > 0)
        inicio -= 1;
    else if (inicio <= 0){
        inicio = 6;    
    }
}
console.log('Hace 11 días fue ' + días[inicio]);