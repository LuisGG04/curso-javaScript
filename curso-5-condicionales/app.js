// Condicional simple

// > Mayor que
// < Menor que

// let num = 0;

// if (num>0) {console.log(`${num} es mayor que cero`);}

// Condicionales compuestos

// if (num>0) {
//     console.log(`${num} es mayor que cero`);
// } else{
//     console.log(`${num} es menor que cero`);
// }

// Condicionales múltiples

// if (num>0) {
//     console.log(`${num} es mayor que cero`);
// } else if (num<0){
//     console.log(`${num} es menor que cero`);
// } else{
//     console.log(`${num} es igual que cero`)
// }

// Diferentes usos que tendría - Operadores lógicos

// && and / || o 

let num1 = 1;
let num2 = 0;

// if(num1>0 || num2>0){
//     console.log(`${num1} o ${num2} son mayores que 0`)
// };

// if (num1>0){
//     if (num2>0){
//         console.log(`${num1} y ${num2} son mayores que 0`)
//     }
// };

if (num1>0){
    if (num2>0){
        console.log(`${num1} y ${num2} son mayores que 0`);
    } else if (num2<0){
        console.log(`${num1} es mayor que 0 y ${num2} es menor que 0`);
    } else {
        console.log(`${num1} es mayor que 0 y ${num2} es igual que 0`);
    }
} else if (num1<0){
    if (num2>0){
        console.log(`${num1} no es mayor que 0 y ${num2} es mayor a 0`);
    } else if (num2<0){
        console.log(`${num1} y ${num2} son menores que 0`);
    } else {
        console.log(`${num1} es menor que 0 y ${num2} es igual que 0`);
    }
} else{
    if (num2>0){
        console.log(`${num1} es igual a 0 y ${num2} es mayor a 0`);
    } else if (num2<0){
        console.log(`${num1} es igual a 0 y ${num2} es menor que 0`);
    } else {
        console.log(`${num1} y ${num2} son iguales a 0`);
    }
}