/* 
6 - Escribe un programa que permita ir introduciendo una serie indeterminada de números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido
*/

let suma = 0;
let cons = 0;

while(suma<50){
    suma += parseInt(prompt("Introduzca un número para la suma"))
    cons++
}

console.log(`La suma total de los números introducidos es igual a ${suma}`);
console.log(`El total de elementos introducidos para la suma es de ${cons}`);