//Crea una función que retorne la suma de dos números.

const sumOfTwoNumbers = (num1, num2) => {
    const sum = num1 + num2;
    return sum
};
console.log(sumOfTwoNumbers(4, 5));

// Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.

const power = (base, exponente) => {
    const CalculatingThePower = Math.pow(base, exponente);
    return CalculatingThePower;

};
console.log(power(2, 3));

// Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855

const arguments = [1, 5, 9];
const sumOfCubes = (numeros) => {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += Math.pow(arguments[i], 3);
    }
    return sum;
};

console.log(sumOfCubes(1, 5, 9));

//Escribe una función que tome la base y la altura de un triángulo y devuelva su área.

const triArea = (base, altura) => {
    const multiplicationOfBaseAndHeight = base * altura;
    const area = multiplicationOfBaseAndHeight / 2;
    return area;
};

console.log(triArea(3, 2));

// Crea una función llamada calculator que recibe 3 parámetros, dos números y
// una operación matemática (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4

const calculator = (num, num2, mathOperation) => {

    if (mathOperation === '+') {
        const sum = num + num2;
        console.log('El parametro es correcto y es reconocido');
        return sum;

    } else {
        return console.log('El parámetro no es reconocido');

    }

};
console.log(calculator(2, 2, '+'));
console.log(calculator(2, 2, '-'));

// Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado 
// “Hola mi nombre es sebastián yabiku y mi edad 33”


const greeting = (nombre, apellido, edad) => {
    const concatenation = `Hola mi es ${nombre} ${apellido} y mi edad es  ${edad}`;
    return concatenation;
};

console.log(greeting('Ana', 'Gonzalez', 'López', '22'));

// Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js

const typeValue = (value) => {
    return typeof value;
};
console.log(typeValue(12345));
console.log(typeValue('hola'));
console.log(typeValue(false));
console.log(typeValue(null));

// Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
const sum1 = (a, b) => a + b;
const addingNumbers = (...numbers) => {

    const result = numbers.reduce(sum1, 0);
    return result;
};

console.log(addingNumbers(1, 2, 3));

//Crear una función que reciba un array de valores y filtre los valores que no son string

const filteringValues = (arr) => {
    return arr.filter(item => typeof item === 'string');
};
const arr = [1, 'hola', true, 4, 5];
console.log(filteringValues(arr));

// Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

const minMax = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return [min, max];
};
const arr1 = [1, 2, 3, 4, 5];
console.log(minMax(arr1));

/*Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.

*/
const formatPhoneNumber = (numbers) => {
    const areaCode = numbers.slice(0, 3).join('');
    const middlePart = numbers.slice(3, 6).join('');
    const lastPart = numbers.slice(6, 10).join('');
    return `(${areaCode}) ${middlePart}-${lastPart}`;
};
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(formatPhoneNumber(arr2));


/*
Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.

*/

const charIndex = (arr, index) => {
    const firstIndex = arr.indexOf(index);
    const lastIndex = arr.lastIndexOf(index);

    return [firstIndex, lastIndex];
};

console.log(charIndex("hello", "l"));

/*Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
*/

const toArray = (obj) => {
    return Object.entries(obj);
};
console.log(toArray({ a: 1, b: 2 }));

/*
Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

*/
const getBudgets = (people) => {

    const wingsPeopleBudget = people.reduce((totalBudget, person) => totalBudget + person.budget, 0);
    return wingsPeopleBudget;
};
const arr4 = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
];
console.log(getBudgets(arr4));

/*
Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.

*/

const getStudentNames = (students) => {
    const listStudents = students.map(student => student.name).sort();
    return listStudents;
};
const arr5 = [
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
];
console.log(getStudentNames(arr5));

/*
Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
*/

const squaresSum = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * i;
    }
    return sum;
};
console.log(squaresSum(3));

//Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada

const multiplyByLength = (arr) => {
    const value = arr.map(item => item * arr.length);
    return value;
};
const arr6 = [2, 3, 1, 0]
console.log(multiplyByLength(arr6));

//ree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.

const countdown = (start) => {
    let result = [];
    for (let i = start; i >= 0; i--) {
        result.push(i);
    }
    return result;
};
console.log(countdown(5));

//Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.

const filterList = (arr) => {
    return arr.filter(item => Number.isInteger(item));
};
const arr7 = [1, 2, 3, "x", "y", 10];
console.log(filterList(arr7));
/*
Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.

*/

String.prototype.vreplace = function (vowel) {
    return this.replace(/[aeiou]/gi, vowel);
};

// Cree una función que capitalice la última letra de cada palabra.

const capLast = (text) => {

    let words = text.split(' ');


    let transformedWords = words.map(word => {
        if (word.length > 0) {

            return word.slice(0, word.length - 1) + word[word.length - 1].toUpperCase();
        }
        return word;
    });


    return transformedWords.join(' ');
}
