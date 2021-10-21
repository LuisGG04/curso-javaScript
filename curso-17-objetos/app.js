/*
Los objetos son un cúmulo de información 

Se define por 

const " "= {
    valor: "",
    valor: "",
    valor: "",
}
*/

const person = {
    name: "Luis",
    age: 22,
    sons: ["Enrique", "Daniel"] 
}

// console.log(person.name);
// console.log(person.age);
// console.log(person.sons);

// for(const key in person){
//     console.log(key)
// }

for(const key in person){
    console.log (person[key])
}

console.log(`Hola ${person.name}, tienes ${person.age} años y tus hijos se llaman ${person.sons.join(", ")}`);