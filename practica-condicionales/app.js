// Ordenar de mayor a menor 

// Permutaciones de 3 elementos

// Posibilidades 3! = 3*2*1

// abc = 321
// acb = 312
// bac = 231
// bca = 132
// cab = 213
// cba = 123


const numbers = document.getElementById("numbers");
const result = document.getElementById("result");

let a = prompt("Introduzca el primer número");
let b = prompt("Introduzca el segundo número");
let c = prompt("Introduzca el tercer número");

numbers.textContent = `Los números introducidos son ${a}, ${b} y ${c}`;

if (a>=b && a>=c){
    if (b>c){
        result.textContent = `El orden correcto es ${a}, ${b} y ${c}`;
    }else{
        result.textContent = `El orden correcto es ${a}, ${c} y ${b}`;
    }
}else if(b>=a && b>=c){
    if (a>c){
        result.textContent = `El orden correcto es ${b}, ${a} y ${c}`;
    }else{
        result.textContent = `El orden correcto es ${b}, ${c} y ${a}`;
    }
}else if(c>=a && c>=b){
    if (a>b){
        result.textContent = `El orden correcto es ${c}, ${a} y ${b}`;
    }else{
        result.textContent = `El orden correcto es ${c}, ${b} y ${a}`;
    }
}