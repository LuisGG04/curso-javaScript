/*
Bucle for
Es un bucle determinado ya que se debe especificar cuantas vueltas dará su ejecución

Su sintáxis se compone de 3 partes

Iniciación de variable
Número de vueltas que dará
Incremento o decremento

for (let i=0; i<=10;i++){
    código a ejecutar
};

Durante su ejecución la variable i aumentará en cada vuelta

for (let i=0; i<=3; i++){
    console.log(i)
}

1era vuelta : i=0 - ¿i<=3? - 0 - i++
*/

// for(let i=0; i<=10; i++){
//         console.log(i)
// };

let numbers = [20,21,23,31,45,56];

for(let i=0;i<numbers.length;i++){
    console.log(`i vale ${i} y el valor de esa posición en el Array es ${numbers[i]}`);
}