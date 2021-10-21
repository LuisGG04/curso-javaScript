/*
Eventos
Los eventos son cualquier cosa que sucede en nuestro documento

Su sintáxis es la siguiente:

elemento.addEventListener("event", callback);

Eventos de ratón:
    click - cuando pulsamos el botón izquierdo del ratón
    dblclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón
    mouseenter - cuando entramos en la zona que tiene el evento
    mouseleave - cuando salimos de la zona que tiene el evento
    mousedown - cuando pulsamos el boton izquierdo del ratón
    mouseup - cuando soltamos el boton izquierdo del ratón
    mousemove - cuando movemos el ratón
Eventos de teclado:
    keydown - cuando pulsamos una tecla
    keyup - cuando soltamos una tecla
    keypress - cuando pulsamos una tecla y no la soltamos
*/

const button = document.getElementById("button");

// button.addEventListener("click", () => {
//     console.log("Click")
// });

// button.addEventListener("dblclick", () => {
//     console.log("Doble Click")
// });

const box = document.getElementById("box");

// box.addEventListener("mouseenter", () => {
//     box.classList.replace("return__color", "green")
// });

// box.addEventListener("mouseleave", () => {
//     box.classList.replace("green", "return__color")
// });

// box.addEventListener("mousedown", () => {
//     console.log("Has pulsado el click izquierdo")
// });

// box.addEventListener("mouseup", () => {
//     console.log("Has pulsado el click izquierdo sin soltarlo")
// });

// box.addEventListener("mousemove", ()=>{
//     console.log("Se está moviendo el ratón")
// });

const input = document.getElementById("input");

input.addEventListener("keydown", ()=> {
    console.log("Se pulsó una tecla")
});

input.addEventListener("keyup", ()=> {
    console.log("Se soltó una tecla")
});

input.addEventListener("keypress", ()=> {
    console.log("Estas pulsando una tecla")
});