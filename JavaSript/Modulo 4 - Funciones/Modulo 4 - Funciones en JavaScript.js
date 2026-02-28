//1. Crear una calculadora con funciones: sumar, restar, multiplicar y dividir usando switch.
console.log("Crear una calculadora con funciones: sumar, restar, multiplicar y dividir usando switch.");
function Calculadora(operacion, num1, num2){
    switch(operacion){
        case "suma":
            return num1 + num2;
        case "resta":
            return num1 - num2;
        case "multiplicacion":
            return num1 * num2;
        case "division":
            return num1 / num2;
            
    }      
}

console.log(Calculadora("suma", 3, 5)); // 8 
console.log(Calculadora("resta", 8, 4)); // 4
console.log(Calculadora("multiplicacion", 2, 5)); // 10
console.log(Calculadora("division", 20, 2)); // 10
console.log("");
//2. Crear función que determine si un número es par o impar.

console.log("Crear función que determine si un número es par o impar.")

function ParOImpar(numero){
    if(numero % 2 === 0){
        console.log("El numero es par");
        return;
    }
    console.log("El numero es impar");
}

ParOImpar(10); //Par
ParOImpar(7); //Impar
console.log("");

//3. Crear función que imprima la tabla de multiplicar usando for.
console.log("Crear función que imprima la tabla de multiplicar usando for.");

function TablaDeMultiplicar(numero){
    for(let i = 0; i <= 10; i++){
        console.log(`${numero} multiplicado por ${i} es: ${numero * i}`)
    }
}

TablaDeMultiplicar(5);
console.log("");

//4. Crear sistema de notas (Reprobado, Aprobado, Excelente).

console.log("Crear sistema de notas (Reprobado, Aprobado, Excelente).")

function CalculadoraDeNotas(calificacion){
    if(calificacion < 3){
        console.log("Reprobado")
        return
    }
    if(calificacion <= 4){
        console.log("Aprobado")
        return
    }

    console.log("Excelente")
    return
}

CalculadoraDeNotas(2.5);
CalculadoraDeNotas(3.7);
CalculadoraDeNotas(5);
console.log("");

//5. Reto: Crear función login(usuario, password) con validación usando if.
console.log("Reto: Crear función login(usuario, password) con validación usando if.")

const Usuario =  "JoanAsghar";
const Contraseña = "SuperContraseñaSecreta";

function userLogin(user, password){
    if(Usuario === user || Contraseña == password){
        console.log("Autorizacion completada")
        return "Authorization token"
    }
    
    console.log("Usuario o contraseña incorrectos");
    return 
}

userLogin("JoanAsgha", "SuperContraseñaSecreta");
userLogin("asdad", "asdasda sds ads ds ");
