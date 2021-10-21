let numeros = [1,2,3,4,5];

/* Arrays - propiedad
.length - devuelve el número de posiciones que contiene el array
*/

// console.log(numeros.length);

/* Arrays - Métodos
Array.isArray(Variable) - Devuelve true si la variable es un Array
*/

// let numero = 3;

// console.log(Array.isArray(numeros));

/*
Eliminar un elemento
.shift() - Elimina el primer elemento del Array y devuelve ese elemento
.pop() - Eminima el último elemento de un Array y devuelve ese elemento
*/

// console.log(numeros);
// numeros.shift();
// numeros.pop();
// console.log(numeros);

/*
Añadir un elemento
.push(elemento1, elemento2...) - Añade uno o más elementos al final del Array y devuelve la nueva longitud
.unshift(elemento1. elemento2...) - Añade uno o más elementos al comienzo del Array y devuelve la nueva longitud
*/

/*
console.log(numeros);
numeros.push(6,7);
console.log(numeros);


console.log(numeros);
let newLength = numeros.unshift(0);
console.log(numeros);
*/

/*
.indexOf() - Devuelve el primer índice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado
*/
// console.log(numeros);
// console.log(numeros.indexOf(1));

/*
.lastIndexOf() - Devuelve el último índice del elementpo que coincida con el valor especificado, o -1 si ninguno es encontrado
*/

// console.log(numeros);
// console.log(numeros.lastIndexOf(1));
/*
.reverse() - Invierte el orden de los elementos Array
*/

// console.log(numeros);
// numeros.reverse();
// console.log(numeros);

/*
.join("separador") - Devuelve un string con el separador que le indiquemos por defecto son comas
*/

// console.log(numeros);
// console.log(numeros.join());
// let arrayString = numeros.join(" ");
// console.log(arrayString);

/*
.splice(a,b,items) - Cambia el contenido de un Array eliminando los elementos existentes y/o agregando nuevos elementos
    a - Índice de inicio
    b - Número de elementos (opcional)
    items - Elementos a añadir en el caso que se añadan (opcional)
*/

// console.log(numeros);
// numeros.splice(3); - Elimina desde la posición 3 en adelante
// numeros.splice(3,2); - Elimina desde la posición 3 las posiciones que le indiquemos (se indicaron eliminar 2 posiciones)

// numeros.splice(3,1,2,2); - Si b es un valor distinto a 0, elimina el número de valores que le indiquemos en b y añade los valores de los items a partir de la posición de a
// Si b vale 0, añade los elementos a partir de la posición a y no elimina ningún elemento
// console.log(numeros);

/*
.slice - Extrae los elementos de un Array desde el índice a hasta el índice b. Si no existe b, lo hace desde a hasta el final. Si no existe ni a ni b, hace una copia del original 
*/

// let newNumeros = numeros.slice();

// console.log(newNumeros);
// console.log(numeros);

// let newNumeros = numeros.slice(2);

// console.log(newNumeros);
// console.log(numeros);

let newNumeros = numeros.slice(1,4);

console.log(newNumeros);
console.log(numeros);