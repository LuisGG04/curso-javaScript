
/* 
7 - Crea 3 arrays. El primero tendrá 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola:
    -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
    -el array de pares e impares
*/

const numbers = [5,8,11,17,3];
let par = [];
let impar = [];

for(const number of numbers){
    let random = Math.round (Math.random() * 10 + 1)
    const result = number * random

    console.log(`La múltiplicación ${number} * ${random} da el resultado de ${result}`)

    if(result % 2 ==0){
        par.push(result)
    }else{
        impar.push(result)
    }
}

console.log(par);
console.log(impar);