/* 
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
La destructuración es una expresión de JavaScript que hace posible la extracción de datos de arreglos u objetos
*/

const person = {
    name: "Luis",
    age: 22,
    email: "ctgg117@gmail.com"
}

/*
Destructuring
const {name, age, email} = person

console.log(`${name}, ${age}, ${email}`)

const {name : nombre, age : edad, email}

console.log(nombre, edad, email)
*/

// const numbers = [1, 2, 3, 4]

// const [a, b, terceraPosicion] = numbers

// console.log(terceraPosicion)

// const printPerson = ({name}) => {
//     console.log(name)
// }

// printPerson(person)

const getUsers = async() => {
    const {data:users} = await axios.get("https://jsonplaceholder.typicode.com/users")

    console.log(users)
}

getUsers()