function ejecutar(nroEjercicio) {
    switch (nroEjercicio) {
        case 1:
            ejercicio1();
            break;
        case 2:
            ejercicio2();
            break;
        case 3:
            ejercicio3();
            break;
        case 4:
            ejercicio4();
            break;
        case 5:
            ejercicio5();
            break;
        default:
            break;
    }

}

function ejercicio1() {
    // Pedir al usuario que ingrese el primer número y guardarlo en una variable
 const num1 = parseFloat(prompt("Ingresa el primer número:"));

 // Pedir al usuario que ingrese el segundo número y guardarlo en una variable
 const num2 = parseFloat(prompt("Ingresa el segundo número:"));

 // Calcular la suma de los dos números
 const suma = num1 + num2;

 // Mostrar el resultado de la suma
 alert("La suma de los dos números es: " + suma);

}
    
//function ejercicio2() {
  //  console.log("Ejercicio 2")
//}
// Función que determina si un número termina en 4
function ejercicio2() {
    // Pedir al usuario que ingrese el número a elevar
 const base = parseFloat(prompt("Ingresa el número a elevar:"));

 // Pedir al usuario que ingrese la potencia
 const exponente = parseFloat(prompt("Ingresa la potencia a la que quieres elevar el número:"));

 // Calcular la potencia del número
 const resultado = Math.pow(base, exponente);

 // Mostrar el resultado
 alert("El resultado de elevar " + base + " a la potencia " + exponente + " es: " + resultado);

}

// Llamada a la función
//ejercicio2();


// Función que determina si un número entero es negativo
function ejercicio3() {
    function sumOfCubes(num1, num2, num3) {
        return Math.pow(num1, 3) + Math.pow(num2, 3) + Math.pow(num3, 3);
    }
    
    // Solicitar al usuario que ingrese tres números
    const numero1 = parseFloat(prompt("Ingresa el primer número:"));
    const numero2 = parseFloat(prompt("Ingresa el segundo número:"));
    const numero3 = parseFloat(prompt("Ingresa el tercer número:"));
    
    // Calcular la suma de los cubos de los números ingresados
    const resultado = sumOfCubes(numero1, numero2, numero3);
    
    // Mostrar el resultado
    alert("La suma de los cubos de los números ingresados es: " + resultado);
    
}

// Proceso Numero_Menor_A_Mayor

function ejercicio4() {

    function calcularAreaTriangulo(base, altura) {
        return (base * altura) / 2;
    }
    
    // Solicitar al usuario que ingrese la base y la altura del triángulo
    const base = parseFloat(prompt("Ingresa la base del triángulo:"));
    const altura = parseFloat(prompt("Ingresa la altura del triángulo:"));
    
    // Calcular el área del triángulo
    const area = calcularAreaTriangulo(base, altura);
    
    // Mostrar el resultado
    alert("El área del triángulo es: " + area);
    
}

function ejercicio5() {
    function calculador() {
        // Solicitar al usuario que ingrese los dos números
        const num1 = parseFloat(prompt("Ingresa el primer número:"));
        const num2 = parseFloat(prompt("Ingresa el segundo número:"));
    
        // Solicitar al usuario que ingrese la operación matemática
        const operacion = prompt("Ingresa la operación matemática (+, -, /, x, %):");
    
        // Realizar la operación según la operación ingresada
        switch (operacion) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '/':
                return num1 / num2;
            case 'x':
                return num1 * num2;
            case '%':
                return num1 % num2;
            default:
                return "El parámetro no es reconocido";
        }
    }
    
    // Ejemplo de uso:
    const resultado = calculador();
    alert(resultado); // Imprimirá el resultado de la operación o un mensaje de error si la operación no es reconocida
    
}


 // Una función en JavaScript es similar a un procedimiento ,un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento
 //califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida
 //Una definición de función (también denominada declaración de función o expresión de función) consta de la palabra clave function, seguida de:

 //El nombre de la función.
 //Una lista de parámetros de la función, entre paréntesis y separados por comas.
 //Las declaraciones de JavaScript que definen la función, encerradas entre llaves, { ... }.

