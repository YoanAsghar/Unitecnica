const prompt = require("prompt-sync");

// Parte 1 – Declaración de variables (40 minutos)
// 1. Declara una variable con tu nombre
// 2. Declara una variable con tu edad
// 3. Declara una constante con tu país
// 4. Imprime todas en consola


let myName = prompt("Cual es tu nombre?");
let myAge = prompt("Cual es tu edad?");
const myCountry = prompt("De que pais eres");

console.log(`Mi nombre es ${myName}, tengo ${myAge} años y naci en ${myCountry}`);

// Parte 2 – Tipos de datos (50 minutos)
// Crea variables para:
// - Un número decimal
// - Un mensaje de texto
// - Un valor verdadero
// - Una variable sin valor
// - Un valor null

let float = 3.1416;
let varchar = "Hello world";
let bool = true;
let noValue;
let myNull = null;

// Parte 3 – Verificar tipos con typeof (40 minutos)
// Usa typeof para verificar:
// typeof edad
// typeof mensaje
// typeof activo
// typeof valor

console.log(typeof(myAge));
console.log(typeof(varchar));
console.log(typeof(float));
console.log(typeof(bool));
console.log(typeof(myNull));

// Parte 4 – Pequeños retos (40 minutos)
// 1. Guarda el precio de un producto
// 2. Guarda la cantidad comprada
// 3. Calcula el total
// 4. Muestra un mensaje como:
// "El total a pagar es: $___"

let amountOfProduct = prompt(`Cuantos productos vas a comprar? Cada uno cuesta ${priceOfProduct}`);
let priceOfProduct = 20;

console.log(`El total a pagar es : ${amountOfProduct * priceOfProduct}`);

// Parte 5 – Objeto básico (40 minutos)
// Crea un objeto persona con:
// nombre
// edad
// ciudad
// Imprime cada propiedad

let myObject = {
    objectName : myName,
    objectAge: myAge,
    objectCountry: myCountry
}

console.log(`Mi nombre es ${myObject.objectName}, tengo ${myObject.objectAge} y soy de ${myObject.objectCountry}`);

// Reto final (30 minutos)
// Crea un programa que guarde:
// nombre del estudiante
// nota1
// nota2
// nota3
// Calcula el promedio e imprime:
// "El estudiante ___ tiene promedio ___"

let nota1 = prompt("Cuanto sacaste en la primera nota?");
let nota2 = prompt("Cuanto sacaste en la segunda nota?");
let nota3 = prompt("Cuanto sacaste en la tercera nota?");

let notaFinal = (nota1 + nota2 + nota3) / 3;
console.log(notaFinal);
