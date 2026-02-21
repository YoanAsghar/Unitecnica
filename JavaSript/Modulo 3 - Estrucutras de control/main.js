const prompt = require('prompt-async');

//Ejercicio 1:
  //Solicitar un número y determinar si es positivo, negativo o cero.
let number1 = parseInt(prompt("Indique el numero que quiere revisar"));

if(number1 === 0 ){
    console.log("Su numero es 0");
};

if(number1 < 0){
    console.log("Su numero es negativo");
}

if(number1 > 0){
    console.log("Su numero es positivo");
}

//Ejercicio 2:
  //Mostrar los números del 1 al 20 usando un ciclo for.

  for(let i = 1; i <= 20; i++){
    console.log(i);
  }

//Ejercicio 3:
  //Mostrar la tabla de multiplicar de un número dado por el usuario.

  let number2 = parseInt(prompt("Ingresa el numero del que quiere ver la tabla"));

  for(let i = 1; i <= 10; i++){
    console.log(`${i}.Su numero multiplicado por ${i} es ${i * number2}`);
  }

//Ejercicio 4:
  //Contar cuántos números pares hay entre 1 y 50.

  let i = 1;
  while(i <= 50){
    
    if(i % 2 == 0){
        console.log(`${i} es par`);
    }
    else{
        console.log(`${i} es impar`);
    }
    i++
  }


//Ejercicio 5 (Reto):
  //Simular un sistema de login donde el usuario tiene 3 intentos para ingresar la contraseña correcta.

function Login(password){
    let cantidadDeIntentos = 0;

    while(cantidadDeIntentos < 3){

        let insertedPassword = prompt("Indique su contraseña");

        if(insertedPassword === password){
            console.log("Contraseña correcta");
            return;
        } else {
            console.log("Contraseña incorrecta");
            cantidadDeIntentos++;
        }
    }

    console.log("Superó la cantidad de intentos");
}

let userPassword = prompt("Indique la contraseña que va a crear");
Login(userPassword);
