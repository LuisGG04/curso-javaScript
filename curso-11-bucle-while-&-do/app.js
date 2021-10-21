/*
Bucle while
Es un bucle indeterminado ya que no se sabe el número de vueltas que dará

Su sintáxis se compune de una única parte:
while(condición){
    código a ejecutar
}
*/
/*
Bucle do while
Es un bucle indeterminado ya que no sabemos el número de vueltas que dará durante su ejecución

Su sintáxis se compone de dos partes
Código a ejecutar
Condición de salida

do{
    código a ejecutar
} while (condición)
*/

let pass = "Hola";

// while (pass != "Hola"){
//     pass = prompt("Introduzca su contraseña")
// }

// console.log("Fin del bucle");

do{
    pass = prompt("Introduzca su contraseña")
}while(pass != "Hola");