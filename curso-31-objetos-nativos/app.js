const button = document.getElementById("button");

/*
Objeto window - Es el objeto global, de él descienden todos los objetos
    alert()
    prompt()
    confirm()
*/

// let firstName = prompt("Introduzca su nombre");

// console.log(firstName);

// if(confirm("¿Acepta los términos y condiciones?")){
//     console.log("El usuario a aceptado")
// }else{
//     console.log("El usuario no a aceptado")
// }

/* Objeto console - Es el objeto que contiene la consola del navegador
    https://developer.mozilla.org/es/docs/Web/API/Console
    console.log()
    console.dir()
    console.error()
    console.table()
*/

// console.dir(button);

const person = {
    name: "Luis",
    age: 30,
    email: "luis_unsc117@outlook.es"
}

// console.table(person);

/* Objeto location - Es el objeto que contiene la barra de direcciones
    https://developer.mozilla.org/es/docs/Web/API/Location
    location.href
    location.protocol
    location.host
    location.pathname
    location.hash
    location.reload()
*/

// console.log(location.href);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.hash);

/* Objeto history
    https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador
    back()
    forward()
    go(n|-n)
    length
*/

/* Objeto date
    https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date
    https://www.w3schools.com/jsref/jsref_obj_date.asp
*/

// const date = new Date()

// console.log(date.getDay());

/*
Timers
    Timeout: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

    setTimeout(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función despues de delay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)

    En caso de utilizar una función externa, no se debe agregar "() =>", solo la función y los milisegundos = setTimeout(saludar, 3000)

    Si se utiliza el código con las mismas lineas = setTimeout(()=> {
        console.log("Adios")
    }, 3000)

    Interval: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

    setInterval(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función cada delay milisegundos. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia)
*/

// button.addEventListener("click", () => {
//     // setTimeout(saludar, 3000)
//     setTimeout(()=> {
//         console.log("Adios")
//     }, 3000)
// });

// const timeOut = setTimeout(()=> {
//     console.log("Adios")
// }, 3000)

// button.addEventListener("click", () => {
//     clearTimeout(timeOut)
// });

const saludar = () => {
    console.log("Hola")
}

// const interval = setInterval(saludar,3000);

let cont = 0;

const interval = setInterval(()=>{
    console.log(cont++)
},3000)

button.addEventListener("click", () => {
        clearInterval(interval)
    });