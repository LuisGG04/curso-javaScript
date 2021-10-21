/*
Ejercicio 1
1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años" Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings
*/

let nombre = prompt("Introduzca su nombre completo");

let age = prompt("Introduzca su edad");

console.log(`Hola ${nombre}, tienes ${age} años y el año que viene tendrás ${++age} años`);