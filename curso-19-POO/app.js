/*
Programación Orientada a Objetos

Nombre de la clase con Mayúscula

Se hace de la siguiente manera:

class Nombre{
    constructor(dato1, dato2, dato3){
        this.dato1= dato
        this.dato2= dato
        this.dato3= dato
    }
}

Ejemplo:

class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
}

Los objetos pueden tener funciones asociadas a el. En este caso se le llaman Métodos. Tiene los mismos usos que una función

saludar(){
    console.log(`Hola, soy ${nombre} y tengo ${edad} años.`)
}

Para crear un objeto utilizando la clase o plantilla se hace con la palabra reservada "new" y el nombre de la clase que queremos utilizar

const Juan = new Persona ("Juan", "Perez", "22");

Para poder acceder a sus propiedades se puede realizar de dos formas:

juan.nombre || juan.apellido || juan.edad || juan.saludar()

o 

juan["nombre"] || juan["apellido"] || juan["edad"] || juan["saludar"]()
*/

class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad

        this.datos = `Me llamo ${nombre} ${apellido} y tengo ${edad} años.`
    }

    saludar(){
        return `Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`
    }
}

const luis = new Persona ("Luis", "Gaitan", "22");
const lidia = new Persona ("Lidia", "Jaramillo", "21");

console.log(luis);
console.log(luis.saludar());