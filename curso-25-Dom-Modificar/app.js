/* 
Atributos
    element.getAttribute('attribute')
    element.setAttribute('attribute', value)
Clases
    element.classList.add('class','class',...)
    element.classList.remove('class','class',...)
    element.classList.contains('class')
    element.classList.replace('oldClass', newClass)
    
    element.classList.toggle('class'[,force])
atributos directos
    id
    value
*/

const title = document.getElementById("title");
const name = document.getElementById("name");

// console.log(name.getAttribute("class"));

// name.setAttribute("type", "date");

// title.classList.add("title__main");

// if (title.classList.contains("title")) console.log(`El elemento title tiene la clase ${title.getAttribute("id")}`)
// else console.log(`El elemento title no tiene la clase ${title.getAttribute("id")}`);

// title.classList.replace("title", "title__main");

console.log(title);
console.log(name);
console.log(name.value);