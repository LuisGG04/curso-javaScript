// Sintaxis simple

// switch (evaluacion){
//     case n:
//         //codigo 
//         break;
//     case 2:
//         // codigo
//         break;

//     default:
//         //codigo
// }

// Sintaxis múltiple

// switch(evaluacion){
//     case n1:
//     case n2:
//     case n3:
//     case n4:
//         //codigo
//         break;
//     case n5:
//     case n6:
//         //codigo
//         break;

//     default:
//         //codigo
// }

let num = 1;

switch (num){
    case 1: console.log(`${num} tiene el valor 1`)
    break;
    case 2: console.log(`${num} tiene el valor 2`)
    break;
    default: console.log(`${num} no vale ni 1 ni 2`);
}

switch(num){
    case 1:
    case 3:
    case 5:
        console.log(`${num} es un número impar`)
        break;

    case 2:
    case 4:
        console.log(`${num} es un número par`)
        break;
}