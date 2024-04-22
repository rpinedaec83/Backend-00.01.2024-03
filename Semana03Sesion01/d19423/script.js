// let boton1 = document.getElementById("btnTercerBoton"); 
// boton1.addEventListener("click", function () { 
//     alert("Hola desde el tercer boton") 
// });


// var edad = 40;


// var edad = 55;

let edad = 40;
//let edad = 55;
{
    let edad = 55;
    console.log(edad);
}

console.log(edad);

const PI = 3.14159;

let SaludoDeMiMadre = "Hola hijitos";
let saludo_de_mi_padre = "Hola chicos";
//let saludo-de-mi-padre = "Hola chicos";

//PI=4.5;

// Tipos de datos numerico
let entero = 999999999;
let decimal = 22.99;
let notacionCientifica = 123e5; 

// let x = 10;
// let y = 20;
// let z = x + y;
// let x = 10;
// let y = "20";
// let z = x + y;

let x = 100 / "Apple";
console.log(isNaN(x));

let numeroOculto = 0xA;

// Tipos de datos de cadena de texto

let cadena = "Este es un string " + numeroOculto+" este es la continuacion"   ;
let cadena2 = 'Est es otro string';
let cadena3 = `Esta es una
cadena de caracteres que
soporta salto de linea`;
let cadena4 = `quiero insertar una variable aqui ${numeroOculto}`;

console.log("Hola");
console.log(cadena);
console.log(cadena.toUpperCase())
console.log(cadena.toLowerCase())

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)

text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part)

let str = "Apple, Banana, Kiwi";
part = str.substring(7, 13);
console.log(part)

let fechaNacimiento = "1983/08/28";
let año = fechaNacimiento.substring(0,4);

console.log(año)

let mes = fechaNacimiento.substring(5,7);
console.log(mes)

let dia = fechaNacimiento.substring(8,12);
console.log(dia)

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3)

text1 = "     Hello World!     ";
text2 = text1.trimStart();
console.log(text2)

text2 = text1.trimEnd();
console.log(text2)
text2 = text1.trim()
console.log(text2)

const d = new Date("October 13, 2014 11:13:00");
console.log(d)

console.log(d.getFullYear())
console.log(d.getMonth() + 1)

console.log(d.toISOString());


// Tipo de datos de fechas

// Tipos de datos booleanos
// OR  AND 

let number = 5;

console.log(number == "5")
console.log(number === "5")
let age = 2;
let voteable = (age < 18) ? "Too young":"Old enough";
console.log(voteable)


// ARRAY

let hobbies = ["gunpla","aeromodelismo","musica"];
let otroHobbie = [true, 33, 12.33, new Date(), "Hola", hobbies];

console.log(hobbies);
console.log(otroHobbie);

let objCarro = {
    color: "Blanco",
    marca: "BMW",
    combustible: "Gasolina",
    trasmision: true,
    nroPuertas: 5,
    cilindraje: 1899.9999
}

console.log(objCarro)


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);

console.log(fruits.toString());
console.log(fruits.join(" * "));

fruits.push("Manzana")

console.log(fruits.toString());

fruits.pop()

console.log(fruits.toString());

console.log(fruits.shift());

console.log(fruits.toString());

fruits.unshift("Lemon");

console.log(fruits.toString());



const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

for (let index = 0; index < myChildren.length; index++) {
    const element = myChildren[index];
    console.log(element)
}

myChildren.forEach(element => {
    console.log(element)
});

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}

console.log(numbers2)

for (const key in objCarro) {
    if (Object.hasOwnProperty.call(objCarro, key)) {
        const element = objCarro[key];
        console.log(element)
    }
}

console.log(objCarro.marca)

console.log(numbers1[3])

let hour = 20
let greeting ='';

if (hour < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }

console.log(greeting)
let day = "";
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

console.log(day)

let i = 0
while (i < 10) {
    let text  = '';
    text += "The number is " + i;
    console.log(text)
    i++;
  }
