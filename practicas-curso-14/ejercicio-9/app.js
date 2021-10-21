/* 
9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
*/

const palabra = prompt("Introduzca una palabra").toLocaleLowerCase();

let consonantes = 0;
let vocales = 0;

for (const letra of palabra){
    if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") vocales++
    else consonantes++
}

console.log(`La palabra ${palabra} tiene el total de ${consonantes} consonantes y ${vocales} vocales. Además la palabra tiene una longitud de ${palabra.length} letras.`)