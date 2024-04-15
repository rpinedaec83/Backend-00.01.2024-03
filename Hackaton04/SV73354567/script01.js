function mostrarReto1(){
    // Ocultar el contenido del reto anterior si existe
    document.getElementById("contenidoReto").innerHTML = "";

    // Ocultar Contendido Anterior"
    document.getElementById("btnReto1").style.display = "none";
    document.getElementById("btnReto2").style.display = "none";
    document.getElementById("titulo").style.display = "none";

    // Mostrar solo el texto de bienvenida como título después del botón de "Reto 1"
    var tituloBienvenida = document.createElement("h1");
    tituloBienvenida.textContent = "¡Bienvenido al Reto 1 - Desarrollo BackEnd!";
    tituloBienvenida.classList.add("TituloR1");
    document.getElementById("contenidoReto").appendChild(tituloBienvenida);

    // Agregar contenido personalizado por Html
    var contenidoPersonalizado = document.createElement("div");
    contenidoPersonalizado.innerHTML = `
    
        <div class="grid-container1">        

            <div class="column">
            <h1 class="Titulo">Ejercicios Funciones</h1>

            <div class="question-container1">
                <h2>Ejercicio 1</h2>
                <p>Crea una función que retorne la suma de dos números.</p>
                <button onclick="ejecutar(1)">Respuesta</button>
            </div>

            <div class="question-container1">
                <h2>Ejercicio 2</h2>
                <p>Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.</p>
                <button onclick="ejecutar(2)">Respuesta</button>
            </div>

            <div class="question-container1">
                <h2>Ejercicio 3</h2>
                <p>Crea una función que tome números y devuelva la suma de sus cubos.</p> 
                <p>sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855</p>
                <button onclick="ejecutar(3)">Respuesta</button>
            </div>

            <div class="question-container1">
                <h2>Ejercicio 4</h2>
                <p>Escribe una función que tome la base y la altura de un triángulo y devuelva su área.</p>
                <p>triArea(3, 2) ➞ 3</p>
                <button onclick="ejecutar(4)">Respuesta</button>
            </div>

            <div class="question-container1">
                <h2>Ejercicio 5</h2>
                <p>Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido”</p> 
                <p>calculator(2,"+", 2) ➞ 4</p>
                <button onclick="ejecutar(5)">Respuesta</button>
            </div>
            </div>

            <div class="column">
            <h1 class="Titulo">Teoría Preguntas</h1>

            <div class="question-container1">
                <h2>Pregunta1: ¿Cómo defines una función?</h2>
                <p>Una función en JavaScript es un bloque de código reutilizable que realiza una tarea específica, esta se define utilizando la siguiente estructura:</p>
                <p>function nombreFuncion(parametro1, parametro2)</p>
                <p>{</p>
                <p>    // Cuerpo de la función</p>
                <p>    // Puede contener cualquier cantidad de declaraciones y expresiones</p>
                <p>    return resultado; // Opcional, para devolver un valor</p>
                <p>}</p>
                <p>Donde:</p>
                <p>NombreFuncion es el nombre que se da a la función</p>
                <p>Parametro1 y Parametro2 son los parámetros que puede recibir (pueden ser opcionales)</p>
                <p>Resultado es el valor opcional que la función puede devolver.</p>
                <p>Un dato curioso es que las funciones en JavaScript son de primera clase,lo que significa que pueden asignarse a variables, 
                pasarse como argumentos y devolverse como valores de otras funciones.</p>
            </div>

            <div class="question-container1">
                <h2>Pregunta2: ¿Hasta cuantos argumentos puedes declarar en una función?</h2>
                <p>En JavaScript, no hay un límite específico en la cantidad de argumentos que puedes declarar en una función.</p>
                <p>Adicional a ello, En JavaScript, no es posible enviar una cantidad infinita de parámetros de forma literal en una función. Sin embargo, se puede utilizar la característica de parámetros restantes (...args) 
                para manejar un número variable de argumentos.</p>  
            </div>
            

            <div>
            <div class="thanks-text">
            <a href="index.html"><p>Regresar a la página principal</p></a> 
            </div>          
            </div>      
            </div> 
           
    `;
    document.getElementById("contenidoReto").appendChild(contenidoPersonalizado);

    // Agregar clase al contenedor del contenido del reto 1 para aplicar estilos específicos
    document.getElementById("contenidoReto").classList.add("reto1-content");
}

// Función para ejecutar las soluciónes de los ejercicios
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
function sumar(n1, n2)
{
    let resultado;
    resultado = n1 + n2;
    return resultado;
}
alert("Se esta realizando la suma de 17+19, el cual el Resultado es: "+ sumar(17, 19) );
console.log("Ejercicio1")
}


function ejercicio2() {
function potencia(n1, n2)
{
    let resultado;
    resultado = Math.pow(n1,n2);
    return resultado;
}
alert("Se esta realizando la potencia de 5 a la 4ta, el cual el Resultado es: "+ potencia(5, 4));
console.log("Ejercicio2")
}


function ejercicio3(){
function sumcub(n1, n2, n3) {
    let resultado;
    resultado = Math.pow(n1, 3) + Math.pow(n2, 3) + Math.pow(n3, 3);
    return resultado;
}
alert("Se esta realizando la Suma de cubos de 3, 2, 10, el cual el Resultado es: " + sumcub(3, 2, 10));
console.log("Ejercicio3")
}


function ejercicio4(){
function triArea(base,altura){
    let area;
    area=(base*altura)/2;
    return area;
}
alert("El area del triangulo (15,9) es: "+ triArea(15,9) );
console.log("Ejercicio4")
}


function ejercicio5(){
function calculator(num1, num2, operacion) {
    let resultado;    
    if (isNaN(num1) || isNaN(num2)) {
        return "Error: Debes ingresar números válidos.";
    }
    switch (operacion) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '%':
            resultado = num1 % num2;
            break;
        default:
            return "El parámetro no es reconocido";
    }
    return resultado;
}
//Ingreso de datos por Prompt
var num1 = parseInt(prompt("Ingresa el primer número:"));
var num2 = parseInt(prompt("Ingresa el segundo número:"));
var operacion = prompt("Ingresa la operación matemática (+, -, /, *,%):");

//Imprimir resultado
alert(calculator(num1, num2, operacion));
console.log("Ejercicio5")
}