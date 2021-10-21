/*
Spread operator (Operador de expanción)

Su sintáxis es: ...
*/

// console.log(...numbers);

// Se puede usar para enviar elementos de un Array a una función

// const addNumbers = (a,b,c) => {
//     console.log(a+b+c)
// }

// let numbersToAdd = [1,2,4];

// addNumbers(...numbersToAdd);

// Se pueden añadir un Arrays dentro de un Array

// let users = ['javier', 'david', 'rosa', 'juan', 'mercedes']
// let newUsers = ['marta', 'jaime', 'laura']

// users.push(...newUsers);

// console.log(users);

// Copiar un Array

/*

let arr1 = [3,54,2,1];
let arr2 = [...arr1];
*/

// console.log(arr2);

// Concatenar Array

// let arr1 = [3,54,2,1];
// let arr2 = [4,2,1];

// let arrConta = [...arr1, ...arr2];

// console.log(arrConta);

// Enviar un número indefinido de argumentos a una función (parametros REST)

// const restParam = (...numbers) => {
//     console.log(numbers)
// }

// restParam(3,1,4,5,3,2);

// Como utilizar la libreria Math

const numbers = [12, 12, 117, 45, -24];

// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

// Como eliminar elementos duplicados de un Array

console.log([...new Set(numbers)]);