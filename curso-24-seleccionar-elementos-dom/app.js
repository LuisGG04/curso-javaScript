/* 
document.getElementById('id') - Acceder a un elemento a través de su id
document | element .querySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS
Siempre cuando se utilice elementos de CSS se debe agregar un "." antes de seleccionar el elemento

:nth-child() => sirve para elegir entre elementos CSS
document | element .querySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
*/

// const title = document.getElementById("title");

// title.textContent = "DOM - Accediendo a los nodos"

// const text = document.querySelector(".text:nth-child(3)");

// const span = text.querySelector("span");

// console.log(span.textContent);

const texts = document.querySelectorAll(".text");

const textsSpreed = [...document.querySelectorAll(".text")]
const textsArray = Array.from(document.querySelectorAll(".text"));

// textsSpreed.map(p=> p.style.color="green");

textsArray.map(p=> p.style.color="green");

console.log(texts);