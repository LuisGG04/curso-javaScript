// Strings

let cadena = "Hola mundo";

// console.log(cadena.length);

// length = significa la longitud de la cadena

// console.log(cadena.toUpperCase());

// toUpperCase() = devuelve la cadena en mayúsculas

// console.log(cadena.toLowerCase());

// toLowerCase() = Devuelve la cadena en minúsculas

// console.log(cadena.indexOf("m"));

// indexOf = Devuelve la posición en la que se encuentra el string

console.log(cadena.replace("mundo","youtube"));

// replece = Reemplaza el fragmento que le digamos, por el nuevo valor indicado

console.log(cadena.substring(3,8));

// Substring = Extrae los carácteres de un string desde un inicio y si se marca un final

console.log(cadena.slice(-3));

// slice = igual que un substring pero admite valores negativos, si ponemos valores negativos empezará desde atrás

let cadena2 = "     Esto es un ejercicio del curso de JavaScript        ";

console.log(cadena2.trim());

// trim = Elimina los espacios al inicio y al final de una cadena

console.log(cadena.startsWith("m",5));

// startsWith = Sirve para saber si una cadena empieza con ese valor. Devuelve un true o false

console.log(cadena.endsWith("o"));

// endsWith = Hace exactamente lo mismo, pero evalua si la cadena termina con el valor que indicamos

console.log(cadena.includes("m"));

// includes = igual de indexof pero devuelve el valor true o false

console.log(cadena.repeat(2));

// repeat = repite el numero de veces el string que le indiquemos

// template strings

let nombre = "Luis";

let apellido = "Gaitan";

let edad = 20;

console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`);

// altGr ``