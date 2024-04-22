
//Ejercicio 1
const ejercicio1 = document.querySelector(".eje1");
ejercicio1.addEventListener('click', () => {
  function suma() {
    let numero1 = parseInt(prompt("Ingresa el primer número:"));
    let numero2 = parseInt(prompt("Ingresa el segundo número:"));

    if (isNaN(numero1) || isNaN(numero2)) {
      alert("Uno o ambos valores ingresados no son números válidos.");
    } else {
      alert("La suma es: " + (numero1 + numero2));
    }
  }
  suma();
});
//Ejercicio 2
const ejercicio2 = document.querySelector(".eje2");
ejercicio2.addEventListener('click', () => {
  let base = parseInt(prompt("Ingresa el número a potenciar:"));
  let exponente = parseInt(prompt("Ingresa la potencia:"));

  // Verificar si los números son válidos.
  if (isNaN(base) || isNaN(exponente)) {
    alert("Uno o ambos valores ingresados no son números válidos.");
  } else {
    let resultado = Math.pow(base, exponente);
    alert("El resultado es: " + resultado);
  }
});
//Ejercicio 3
const ejercicio3 = document.querySelector(".eje3");
ejercicio3.addEventListener('click', () => {
  let numero1 = parseInt(prompt("Ingresa el primer número:"));
  let numero2 = parseInt(prompt("Ingresa el segundo número:"));
  let numero3 = parseInt(prompt("Ingresa el tercer número:"));

  if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    alert("Todos los valores deben ser números válidos.");
  } else {
    let suma = Math.pow(numero1, 3) + Math.pow(numero2, 3) + Math.pow(numero3, 3);
    alert("La suma de los cubos es: " + suma);
  }
});
//Ejercicio 4
const ejercicio4 = document.querySelector(".eje4");
ejercicio4.addEventListener('click', () => {
  let base = parseFloat(prompt("Ingresa la base del triángulo:"));
  let altura = parseFloat(prompt("Ingresa la altura del triángulo:"));

  // Verificar si los números son válidos
  if (isNaN(base) || isNaN(altura)) {
    alert("Por favor, ingresa valores numéricos válidos para la base y la altura.");
  } else {
    let area = (base * altura) / 2;
    alert("El área del triángulo es: " + area);
  }
});
// Ejercicio 5
const ejercicio5 = document.querySelector(".eje5");
ejercicio5.addEventListener('click', () => {
  alert("Selecciona la operación matemática que deseas realizar:\n" +
  "a. Suma\n" +
  "b. Resta\n" +
  "c. División\n" +
  "d. Multiplicación");

let operacion = prompt("Elige una letra (a, b, c, d):").toLowerCase();
let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

// Verificar si los números son válidos
if (isNaN(numero1) || isNaN(numero2)) {
alert("Por favor, ingresa valores numéricos válidos.");
return;
}

let resultado;

switch (operacion) {
case 'a': // Suma
resultado = numero1 + numero2;
break;
case 'b': // Resta
resultado = numero1 - numero2;
break;
case 'c': // División
if (numero2 === 0) {
  alert("No se puede dividir por cero.");
  return;
}
resultado = numero1 / numero2;
break;
case 'd': // Multiplicación
resultado = numero1 * numero2;
break;
default:
alert("No se reconoce la operación matemática seleccionada.");
return; // Termina la ejecución si la operación no es válida
}

alert(`El resultado es: ${resultado}`);
});

// Pregunta texto 1
/*En términos generales, una función es un "subprograma" que puede ser llamado por código 
externo (o interno en caso de recursión) a la función. Al igual que el programa en sí mismo, 
una función se compone de una secuencia de declaraciones, que conforman el llamado 
cuerpo de la función. Se pueden pasar valores a una función, y la función puede devolver un valor. */
// Pregunta texto 2
/*No hay límite de argumentos que puede tomar */

//Ejercicio 1- Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”

const ejercicioa = document.querySelector(".ejea");
ejercicioa.addEventListener('click', () => {
  let nombre = prompt("Ingresa tu nombre:");
  let apellido = prompt("Ingresa tu apellido:");
  let edad = prompt("Ingresa tu edad:");

  const saludo = (nombre, apellido, edad) => `Hola, mi nombre es ${nombre} ${apellido} y mi edad ${edad}`;

  alert(saludo(nombre, apellido, edad));
});

//Ejercicio 2- Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js
const sumaDeCubos = (...nums) => nums.reduce((valor, total) => valor + Math.pow(total, 3), 0);


console.log(sumaDeCubos(1, 5, 9));  //  855


//Ejercicio 3- Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js

const tipoDeValor = valor => typeof valor;

console.log(tipoDeValor(5));
console.log(tipoDeValor("Hola")); 
console.log(tipoDeValor(true));

//Ejercicio 4 - Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)

const suma = (...numeros) => numeros.reduce((valor, total) => valor + total, 0);
console.log(suma(1, 2, 3, 4, 5));

// Ejercicio 5 - Crear una función que reciba un array de valores y filtre los valores que no son string
const filtrarArray = arr => arr.filter(item => typeof item === 'string');

let prueba1 = [14234234, 'apple', 33234324, 'banana', 'cherry'];
console.log(filtrarArray(prueba1));  // Debería devolver ['apple', 'banana', 'cherry']

// Ejercicio 6 - Crear una función que reciba un array de valores y filtre los valores que no son string
const minMax = arr => [Math.min(...arr), Math.max(...arr)];
console.log(minMax([34324, 256, 3646, 634, 123]));

// Ejercicio 7 - Crear una función que reciba un array de valores y filtre los valores que no son string
const formatoNumero = numero => `(${numero.slice(0, 3).join('')}) ${numero.slice(3, 6).join('')}-${numero.slice(6).join('')}`;
console.log(formatoNumero([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

// Ejercicio 14 - Crear una función que reciba un array de valores y filtre los valores que no son string
const sumaCuadrados = n => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  return sum;
};

// Ejemplo de uso:
console.log(sumaCuadrados(3)); // ➞ 14
