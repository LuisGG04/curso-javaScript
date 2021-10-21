/*
Arrays - Métodos II
.from(iterable) - Convierte en array el elemento iterable
.sort([callback]) - Ordena los elementos de un array alfabéticamente(valor Unicode), si le pasamos un callback los ordena en función del algoritmo que le pasemos.
.forEach(callback(currentValue, [index])) - ejecuta la función indicada una vez por cada elemento del array.
.some(callback) - Comprueba si al menos un elemento del array cumple la condición
.every(callback) - Comprueba si todos los elementos del array cumplen la condición
.map(callback) - Transforma todos los elementos del array y devuelve un nuevo array
.filter(callback) - Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array
.reduce(callback) - Reduce todos los elementos del array a un único valor
*/

// let word = "Hola mundo"

// console.log(Array.from(word));
// console.log(word.split(""));

// const letter = ["g", "d", "r", "p"]

// console.log(letter.sort());

// const numbers = [2, 55, 1, 4, 30];

// console.log(numbers.sort((a,b) => a-b));

/*
function menorMayor(a, b) {
if (a-b < 0) return -1;
if (a-b > 0) return 1;
if(a == b) return 0;
}
function mayorMenor(a, b) {
if (b-a < 0) return -1;
if (b-a > 0) return 1;
if(b == a) return 0;
} 
*/

// forEach

// const numbers = [23, 345, 223, 1, 40];

// numbers.forEach((number) => console.log(number));

// numbers.forEach((number, index) => console.log(`El número ${number} está en la posición ${index}`));

// some y every

// const words = ["HTML", "CSS", "JS", "PHP"];

// console.log(words.every(word => words.length>4));

// map

// const numbers = [2, 3, 4, 5, 6];

// const numbers2 = numbers.map(number => number * 2);

// console.log(numbers2);

// filter

// const numbers2 = numbers.filter(number => number>=40);

// console.log(numbers2);

// reduce

// console.log(numbers.reduce((a,b)=> a+b));

// Ejemplo reduce

const user = [
    {
        name: "user1",
        online: true
    },
    {
        name: "user2",
        online: true
    },
    {
        name: "user3",
        online: true
    },
    {
        name: "user4",
        online: true
    },
    {
        name: "user5",
        online: true
    },
    {
        name: "user6",
        online: false
    },
]

const usersOnline = user.reduce((cont, user) => {
    if(user.online) cont++
    return cont
}, 0);

console.log(`Hay ${usersOnline} usuarios conectados de ${user.length} posibles`);