/*
Bucles for of / for in

Simplifica el bucle tradicional for sin tener que darle un número de vueltas ni realizar un incremento

let names = ['Paco', 'Murieta', 'Rosa', 'Alex']

for (let name of names){
    console.log(name)
}

1 - Paco
2 - Murieta
3 - Rosa
4 - Alex

for (let name in names){
    console.log(name)
}

1 - 0
2 - 1
3 - 2
4 - 3

Palabras reservadas 
break - Rompe el bucle
continue - Salta la(s) posicion(es) que se indiquen y continua
*/

let names = ['Paco', 'Murieta', 'Rosa', 'Alex']

for(let name of names){
    console.log(name)
};

for(let index in names){
    console.log(index)
};