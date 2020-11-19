//El objeto Set te deja almacenar y mantener objectos debilmente en una colección a la vez que es iterable.

// Podemos crear un Array con elementos repetidos dentro.
var arr = [10, 9, 9, 3, 4, 4]

// Luego creamos un Set con los elementos del Array.
var MySet = new Set(arr)

//A la hora de imprimir en consola, solamente nos imprimirá los elementos sin repertirlos.
console.log(MySet);

//Es posible añadir más elementos con .add() y se cumplirá si no se repite.
MySet.add(11)
MySet.add(6)
console.log(MySet)

//Entonces, debido a que los sets son iterables se puede imaginar que los Weaksets no lo son.
