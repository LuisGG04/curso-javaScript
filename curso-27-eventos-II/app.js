/*
Eventos de objetos
*/

const form = document.getElementById("form");
const input = document.getElementById("text");
const button = document.getElementById("button");
const link = document.getElementById("link")

// input.addEventListener("keyup", (e) =>{
//     console.log(e)
// })

// button.addEventListener("click", (e)=>{
//     console.log(e.target)
// });

// const gallery = document.getElementById("gallery");

// gallery.addEventListener("click", (e) =>{
//     e.target.classList.add("dark")
// });

link.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log(`El link te ha redireccionado a ${link.textContent}`)
})

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log("El formulario se ha enviado")
});