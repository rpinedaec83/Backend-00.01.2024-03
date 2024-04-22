const $num2 = document.getElementById('number-2')
const $num1 = document.getElementById('number-1')

const $btn1 = document.getElementById('btn-1')

const $num3 = document.getElementById('number-3')
const $num4 = document.getElementById('number-4')
const $btn2 = document.getElementById('btn-2')

const $num5 = document.getElementById('number-5')
const $btn3 = document.getElementById('btn-3')

const $num6 = document.getElementById('number-6')
const $num7 = document.getElementById('number-7')

const $btn4 = document.getElementById('btn-4')

const $num8 = document.getElementById('number-8')
const $num9 = document.getElementById('number-9')
const $num10 = document.getElementById('number-10')

const $btn5 = document.getElementById('btn-5')

// PARTE 2

const btn = document.getElementById("btnFlecha")

const $num5b = document.getElementById('number-5b')
const $btn3b = document.getElementById('btn-3b')

const $btn3a = document.getElementById('btn-3a')

const $btn4b = document.getElementById('btn-4b')
//const $number4a = document.getElementById('number-4a')

const $btn5a = document.getElementById('btn-5a')


const $btn9 = document.getElementById('btn-9')
const $number9b = document.getElementById('number-9b')
const $number9a = document.getElementById('number-9a')
const $reemplazar9 = document.getElementById('reemplazar9')

const $btn10 = document.getElementById('btn-10')

const $btn11 = document.getElementById('btn-11')

const $btn12 = document.getElementById('btn-12')

const $btn21 = document.getElementById('btn-21')

const sumOfTwoNumbers = ($num1, $num2) => {
  const sum = $num1 + $num2;
  return sum
};

$btn1.addEventListener('click', () => {

  if ($num1.value == null || $num1.value == undefined && $num2.value == null || $num2.value == undefined) {
    return alert('Ingrese numeros a calcular')
  }

  const suma = sumOfTwoNumbers(parseInt($num1.value), parseInt($num2.value))
  alert(`La suma es: ${suma}`)
})

// !     EJERCICIO-2

const power = (base, exponente) => {
  const CalculatingThePower = Math.pow(base, exponente);
  return CalculatingThePower;
};

$btn2.addEventListener('click', () => {
  if ($num3.value == null || $num3.value == undefined && $num4.value == null || $num4.value == undefined) {
    return alert('Ingrese numeros a calcular')
  }

  const num = power(parseInt($num3.value), parseInt($num4.value))

  alert(`El calculo es: ${num}`)
})

// !     EJERCICIO-3

// const arguments = [1, 5, 9];
const sumOfCubes = (listaNumbers) => {
  let sum = 0;
  console.log(listaNumbers.length)
  for (let i = 0; i <= listaNumbers.length - 1; i++) {
    sum += Math.pow(listaNumbers[i], 3);
    console.log(sum)
  }
  return sum;
};

// console.log(sumOfCubes(1, 5, 9));

$btn3.addEventListener('click', () => {
  if ($num5.value == null || $num5.value == undefined) {
    return alert('Ingrese numeros a calcular')
  }
  alert(`La suma de cubos es: ${sumOfCubes($num5.value.split(',').map(Number))}`)
})

// !     EJERCICIO-4

const triArea = (base, altura) => {
  const multiplicationOfBaseAndHeight = base * altura;
  const area = multiplicationOfBaseAndHeight / 2;
  return area;
};

$btn4.addEventListener('click', () => {
  if ($num6.value == null || $num6.value == undefined && $num7.value == null || $num7.value == undefined) {
    return alert('Ingrese numeros a calcular')
  }

  alert(`El area del triangulo es: ${triArea(parseInt($num6.value), parseInt($num7.value))}`)

})


// !     EJERCICIO-5


$btn5.addEventListener('click', () => {
  if ($num8.value == null || $num8.value == undefined && $num9.value == null || $num9.value == undefined && $num10.value == null || $num10.value == undefined) {
    return alert('Ingrese numeros a calcular')
  }

  var resultado;

  switch ($num9.value) {
    case 'suma':
    case '+':
      resultado = (parseInt($num8.value) + parseInt($num10.value))
      break;
    case 'resta':
    case '-':
      resultado = (parseInt($num8.value) - parseInt($num10.value))
      break;
    case 'multiplicacion':
    case '*':
      resultado = (parseInt($num8.value) * parseInt($num10.value))
      break;
    case 'division':
    case '/':
      resultado = (parseInt($num8.value) / parseInt($num10.value))
      break;
    default:
      return alert('Operacion no valida')
  }

  alert(`${$num8.value} ${$num9.value} ${$num10.value} = ${resultado}`)
})



// !     EJERCICIO 1 - RETO 2

const datos = (nombre, apellido, edad) => {
  return alert(`Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`)
}

btn.addEventListener('click', () => {
  datos("Antony", "Castro", 32)

})

// result1.textContent = `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`
//! EJERCICIO 2 - RETO 2

const sumOfCubes2 = (listaNumbers) => {
  let sum = 0;
  console.log(listaNumbers.length)
  for (let i = 0; i <= listaNumbers.length - 1; i++) {
    sum += Math.pow(listaNumbers[i], 3);
    console.log(sum)
  }
  return sum;
};
// console.log(sumOfCubes(1, 5, 9));

$btn3b.addEventListener('click', () => {
  if ($num5b.value == null || $num5b.value == undefined) {
    return alert('Ingrese numeros a calcular')
  }
  alert(`La suma de cubos es: ${sumOfCubes2($num5b.value.split(',').map(Number))}`)
})

//! EJERCICIO 3 - RETO 2

const retornarTipo = (datoTipo) => {
  return alert(typeof datoTipo)
}
$btn3a.addEventListener('click', () => {
  retornarTipo({ name: "Steven", age: 32 })
})

//! EJERCICIO 4 - RETO 2
//4.- Crear una función que reciba n cantidad de argumentos y los sume (utilizar parametros rest)    
function sumAll(...theArgs) {
  sum4 = 0;
  for (const $number4a of theArgs)
    sum4 = sum4 + $number4a;
  return sum4;
}
//sumAll([1,5,9]);
//console.log($number4a)

//alert(`la suma de la cantidad de argumentos es: ${sumAll(1,5,9,20)}`)  
//console.log(sumAll(1,5))
console.log(sumAll(1,5,9))
//$btn4b.addEventListener('click', () => {
  //if ($number4a == null || $number4a == undefined) {
  // return alert('Ingrese numeros a calcular')
  // } else {//return alert(`sumAll(${sum4+$number4a})`)  
  //console.log(sumAll(1,5,9))
  //alert(`la suma de la cantidad de argumentos es: ${sumAll($number4a.value.split(',').map(Number))}`)  

//  return alert(`la suma de a cantidad de argumentos es:`, $sum4)
  // }

//! EJERCICIO 5 - RETO 2

const array5 = [1, 2, 3, 'lunes', 'martes', 'miercoles']
const arrayFiltrada = array5.filter(Element => typeof Element !== 'string')

$btn5a.addEventListener('click', () => {
  return alert(`La nueva lista es: ${arrayFiltrada}`)

})
//console.log(arrayFiltrada)


//! EJERCICIO 6 - RETO 2

const lista6 = [1, 2, 3, 4, 5];

function MaxMin(){
let maxLista6 = Math.max(...lista6)
let minLista = Math.min(...lista6)
if (maxLista6>0 && minLista>0){
return alert(`El maximo numero de la lista es: ${maxLista6} y el minimo es ${minLista}`)
}
}
// console.log(maxLista6)





//! EJERCICIO 7 - RETO 2
//! EJERCICIO 8 - RETO 2




//! EJERCICIO 9 - RETO 2

const handlerIndex = (palabra, caracter) => {
  const indices = []


  for (let i = 0; i <= palabra.length; i++) {
    if (palabra[i] === caracter) {
      indices.push(i)
    }
  }
  return indices
}

$btn9.addEventListener('click', () => {
  if ($number9b.value == null || $number9b.value == undefined && $number9a.value == null || $number9a.value == undefined) {
    return alert('Ingrese numeros a calcular')
  }

  const palabra = $number9b.value;
  const caracter = $number9a.value;

  const indices = handlerIndex(palabra, caracter)

  $reemplazar9.innerHTML = palabra.split('').map((letra, indice) => {
    if (indices.includes(indice)) {
      return `<span class="selected">${letra}</span>`
    } else {
      return letra
    }
  }).join('');
})
//console.log(handlerIndex)

//! EJERCICIO 10
//10-.Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
//toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
const object10 = { a: 1, b: 2 };
//console.log(typeof(object10))
const array10 = Object.entries(object10)
//Se inserto las propiedades del objeto dentro una matriz

$btn10.addEventListener('click', () => {
  return alert(`La nueva matriz es ${array10}`)
})
//console.log(array10)

//! EJERCICIO 11
// Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

const presupuesto = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 }
]
const hallarPresupuesto = (lista) => {
  return lista.reduce((total, persona) => total + persona.budget, 0)
  //reduce es una caracteristica que permite 
}
const total = hallarPresupuesto(presupuesto)

$btn11.addEventListener('click', () => {
  return alert(`la suma de los presupuestos es ${total}`)
})

//! EJERCICIO 12 - RETO 2 (item: representa el elemento y indice la posicion)
//! names12.map((item) --> recorre todos lo)s elementos de la matrix o array
//! => item.name --> señala que deseamos retirar de la matriz y dejaria una nueva matriz [nombres12]
const names12 = [
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
]
const nombres12 = names12.map((item) => item.name)

$btn12.addEventListener('click', () => {
  return alert(`La nueva matriz es ${nombres12}`)
})

//! EJERCICIO 13

function newLista13(){
const objectToArray= {likes: 2, dislikes: 3, followers: 10};
const newLista13 = Object.entries(objectToArray)
alert(`La nueva matriz es: ${newLista13}`)
}
//console.log(newLista)

//! EJERCICIO 14

  let number14 = parseInt(prompt('Ingrese el valor de n'))
  let suma14=0;
  let matriz14 = []

  for (let i=0; i<=number14; i++)
  suma14 += Math.pow(i,2)
  matriz14.push(suma14)

console.log(suma14)
console.log(matriz14)

//! EJERCICIO 15

function ejercicio15(){
const numberArrays = [2, 3, 1, 0]
const newArrays = numberArrays.map((item) => item * numberArrays.length)
alert(`La nueva lista es: ${newArrays}`)
}
//console.log(newArrays)

//! EJERCICIO 16

//! EJERCICIO 17

const hallarDiferencia = (lista) => {
return Math.max(...lista) - Math.min(...lista)
}
const listaNumeros = [10, 4, 1, 4, -10, -50, 32, 21];
console.log(hallarDiferencia(listaNumeros))

//! EJERCICIO 18

//! EJERCICIO 19


//! EJERCICIO 20
String.prototype.vreplace = function (vocal) {
  return this.replace(/[aeiou]/g,vocal)
}
const cadena20 = 'esta es una nueva cadena de uuuuuuuu'
const nuevaCadena = cadena20.vreplace('i')
//console.log(nuevaCadena) 


//! EJERCICIO 21 {el split separa en silabas una frase "importante darle el espacio ("1espacio o no funciona")"}

const encontrarNemo = (cadena) => {
  
  const palabras = cadena.split(" ");
  const indiceNemo = palabras.indexOf("Nemo");
  if (indiceNemo !== -1) {
    return `El indice de Nemo es: ${indiceNemo + 1}`
  } else {
    return `Nemo no Existe`
  }
}
//console.log(encontrarNemo('El pequeño pescado odioso llamado Nemo'))

//! EJERCICIO 22 {el split separa en silabas una frase "importante darle el espacio ("1espacio o no funciona")"}
//! "join" une varios elementos de una lista en un solo elemento

const capitalizar = (cadena) =>{
  return cadena.split(' ').map(item => item.slice(0,-1) +
  item.slice(-1).toUpperCase()).join(' ')
}

//console.log(capitalizar('hello'))


