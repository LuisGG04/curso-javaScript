/* 
10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
*/

const colors = ["azul", "amarillo", "rojo", "verde", "rosa"];

const color = prompt("Introduzca un color").toLocaleLowerCase();

if (colors.indexOf(color) !== -1){
    console.log(`El color ${color} si se encuentra registrado`);
}else console.log(`El color ${color} no se encuentra registrado`);