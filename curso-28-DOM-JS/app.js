/*
Crear e insertar elementos con DOM en JavaScript

Crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = código HTML
Añadir un elemento al DOM: parent.appendChild(element)
Fragmentos de código: document.createDocumentFragment()
*/

// title.innerHTML = ("Capítulo 28 - <span>Crear e insertar elementos I</span>")

const days = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

const title = document.getElementById("title");
const dayList = document.getElementById("dayList");
const daySelect = document.getElementById("daySelect");

// dayList.appendChild(itemList);

// console.log(itemList);

const fragment = document.createDocumentFragment()

for(const day of days){
    const itemList = document.createElement("li");
    itemList.textContent = day;
    fragment.appendChild(itemList)
}

dayList.appendChild(fragment);

// console.log(fragment);

const fragmentSelect = document.createDocumentFragment()

for (const day of days){
    const itemOption = document.createElement("option")
    itemOption.setAttribute("value", day.toLocaleLowerCase())
    itemOption.textContent = day
    fragmentSelect.appendChild(itemOption)
}

daySelect.appendChild(fragmentSelect);