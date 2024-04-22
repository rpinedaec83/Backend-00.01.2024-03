function ejecutar(nEjercicio) {
  switch (nEjercicio) {
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
    case 6:
      ejercicio6();
      break;
    case 7:
      ejercicio7();
      break;
    case 8:
      ejercicio8();
      break;
    case 9:
      ejercicio9();
      break;
    case 10:
      ejercicio10();
      break;

    case 11:
      ejercicio11();
      break;
    case 12:
      ejercicio12();
      break;
    case 13:
      ejercicio13();
      break;
    case 14:
      ejercicio14();
      break;
    case 15:
      ejercicio15();
      break;
    case 16:
      ejercicio16();
      break;
    case 17:
      ejercicio17();
      break;
    case 18:
      ejercicio18();
      break;
    case 19:
      ejercicio19();
      break;
    case 20:
      ejercicio20();
      break;

    case 21:
      ejercicio21();
      break;

    case 22:
      ejercicio22();
      break;

    case 101:
      ejercicio101();
      break;

    case 102:
        ejercicio102();
        break;

    case 103:
      ejercicio103();
      break;

    case 104:
      ejercicio104();
      break;
    
    case 105:
      ejercicio105();
      break;

    default:
      break;
  }
}



function ejercicio1() {
  //  1.  Utilizando función arrow, crear una función que reciba como parámetros
  //      un nombre, apellido y edad y los retorne en un string concatenado
  //      “Hola mi nombre es sebastián yabiku y mi edad 33”

  let nombre   = prompt("Ingrese un nombre:");
  let apellido = prompt("Ingrese un apellido:");  
  let edad     = Number.parseInt(prompt("Ingrese la edad:"));

  if (isNaN(edad)) {
    return alert("¡ La edad ingresada es un numero invalido !");
  }

  let cCadena = concatenar(nombre,apellido,edad,);
  alert(cCadena);
}

let concatenar = (nom,ape,edad) => {
  return (`Hola mi nombre es ${nom} ${ape} y mi edad ${edad}`);
}  



function ejercicio2() {
  //  2.	Cree una función que tome números y devuelva la suma de sus cubos.
  // sumOfCubes(1, 5, 9) ➞ 855
  // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

  let aNumeros = [];
  let num = 0;
  let nTotNum   = Number.parseInt(prompt("Ingrese cantidad de numeros a ingresar:"));

  if (isNaN(nTotNum)) {
    return alert("¡ El numero ingresado es invalido !");
  }

  for (let n=1; n<= nTotNum; n++) {
    num = Number.parseInt(prompt(`Ingrese numero [${n}/${nTotNum}]:`));
    if (isNaN(num)) {
      return alert("Ingreso un numero invalido, saliendo!");
    }
    aNumeros.push(num);
  }

  let nSumCubo = sumaOfCubos(aNumeros);
  alert(`La suma de los cubos es:\n ${nSumCubo}`);
}

function sumaOfCubos(aLista){
  let nSumCub = 0;
  for (let n=0; n< aLista.length; n++) {
      nSumCub = nSumCub + Math.pow(aLista[n],3);
  }
  return (nSumCub);
} 



function ejercicio3() {
  //3.	Crear una funcion que me retorne el tipo de valor entregado, invocar la
  //    función para los distintos tipos de js

  let xVal1 = 12
  let cTip1 = tipoDeDato(xVal1);

  let xVal2 = "cadena";
  let cTip2 = tipoDeDato(xVal2);

  let xVal3 = true;
  let cTip3 = tipoDeDato(xVal3);

  let xVal4 = {};
  let cTip4 = tipoDeDato(xVal4);

  alert(`El tipo de dato [${xVal1}] ingresado es: ${cTip1}\n
El tipo de dato [${xVal2}] ingresado es: ${cTip2}\n
El tipo de dato [${xVal3}] ingresado es: ${cTip3}\n
El tipo de dato [${xVal4}] ingresado es: ${cTip4}\n`);  
}

function tipoDeDato(xVal){
  let cTipo = typeof xVal;
  return (cTipo);
} 



function ejercicio4() {
  //4.	Crear una función que reciba n cantidad de argumentos y los sume
  //    ( utilizar parametros rest)

  let nSuma1 = sumaValores(1,2,3,4,5);
  let nSuma2 = sumaValores(10,20);
  let nSuma3 = sumaValores(100,30,20,10,90);
  
    alert(`La suma de [1,2,3,4,5] es: ${nSuma1}:\n
La suma de [10,20] es: ${nSuma2}:\n
La suma de [100,30,20,10,90] es: ${nSuma3}:\n`);
}
  
function sumaValores(...valores){
  let suma = 0;
  for (let n = 0; n < valores.length; n++)
      suma = suma + valores[n];
  return suma;
};



function ejercicio5() {
  //  5.	Crear una función que reciba un array de valores y filtre los valores
  //  que no son string

  let aDatos = [5,"Cadena1",7,true,3,"Cadena2",5,{},"Cadena3",45,"Cadena4"];

  let cMsg = valListaCadena(aDatos);
  alert(`Los elementos del array que no son strings son:\n ${cMsg}`);
}

function valListaCadena(aDatos){
  let cMsg = "";
  for (let n=0; n< aDatos.length; n++) {
    let cTipo = typeof aDatos[n];
    if (cTipo!="string"){
      cMsg = cMsg + `\nElemento [${aDatos[n]}] es: ${cTipo}`;
    }
  }
  return (cMsg);
}



function ejercicio6() {
  //  6.	Cree una función que tome una matriz de números y devuelva los números 
  //  mínimos y máximos, en ese orden. minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

  let aDatos = [1,2,3,4,5,];

  let cMsg = numeroMinMax(aDatos);
  alert(`Los numeros menor y mayor del arreglo son:\n [${cMsg}]`);
}

function numeroMinMax(aDatos){
  let nMax = Math.max(...aDatos);
  let nMin = Math.min(...aDatos)
  return `${nMin},${nMax}`
}



function ejercicio7() {
  //7.	Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y 
  //    devuelva una cadena en forma de un número de teléfono.
  //    formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
  
  let aDatos = [1,2,3,4,5,6,7,8,9,0];
  let cMsg = formatPhoneNumber(aDatos);
  alert(`Cadena formateada a numero de telefono es:\n ${cMsg}`);
}

function formatPhoneNumber(aDatos){
  let cTelef="";
  for (let n=0; n< aDatos.length; n++) {
     if(n==0){
      cTelef= cTelef+"(";
     }
     if(n>=0 && n<3){
      cTelef= cTelef + aDatos[n];
     }
     if(n==3){
      cTelef= cTelef+") "+aDatos[n];;
     }
     if(n>=4 && n<=9){
      cTelef= cTelef + aDatos[n];
     }
     if(n==5){
      cTelef= cTelef + "-";
     }
  }
  return (cTelef);
}



function ejercicio8() {
  //  8.	Cree una función que tome una matriz de matrices con números. Devuelve una 
  //  nueva matriz (única) con el mayor número de cada uno.
  //  findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
  
  let aDatos = [[4,2,7,1], [20,70,40,90], [1,2,0]];
  let aMat = findLargestNums(aDatos);
  alert(`Los nueva matriz con los numeros mayores son:\n [${aMat}]`);
}

function findLargestNums(aDatos){
  let aMat = [];

  for (let n=0; n< aDatos.length; n++) {
    nNum = Math.max(...aDatos[n]);
    aMat.push(nNum);
  }
  return aMat;
}



function ejercicio9() {
  //  9.	Dada una palabra, escriba una función que devuelva el primer índice y el 
  //  último índice de un carácter.
  //  charIndex("hello", "l") ➞ [2, 3]
  //  The first "l" has index 2, the last "l" has index 3.
  //
  //  charIndex("circumlocution", "c") ➞ [0, 8]
  //  The first "c" has index 0, the last "c" has index 8.

  let aDat1 = charIndex("hello", "l")
  let aDat2 = charIndex("circumlocution", "c")
  
  alert(`Indices de la primera palabra ["hello", "l"] son:\n [${aDat1}]\n
Indices de la segunda palabra ["circumlocution", "c"] son:\n [${aDat2}]`);
}

function charIndex(cCadena,cChar){
  let aInd = [];
  let aIdx = [];
  let nElm = cCadena.indexOf(cChar);
  // console.log(nElm);

  while (nElm != -1) {
    aInd.push(nElm);
    nElm = cCadena.indexOf(cChar, nElm + 1);
  }

  aIdx.push(aInd[0]);               // Primer elemento
  aIdx.push(aInd[aInd.length-1]);   // Ultimo elemento

  return aIdx;
}



function ejercicio10() {
  //  10.	Escriba una función que convierta un objeto en una matriz, donde cada 
  //  elemento representa un par clave-valor.
  //  toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

  let oData = { a: 1, b: 2 };
  let aMat = toArray(oData);
  alert(`Conversion de objeto [{ a:1, b:2 }] a matriz:\n [${aMat[0]}], [${aMat[1]}]`);
}

function toArray(oData){
  let dataKeys = Object.keys(oData);
  let arrayDat = [];

  for (let n=0; n< dataKeys.length; n++) {
    arrayDat.push([ dataKeys[n] , oData[dataKeys[n]] ] );
  }
  // console.log(arrayDat);  
  return arrayDat;
}



function ejercicio11() {
  //  11.	Cree la función que toma una matriz con objetos y devuelve la suma de 
  //  los presupuestos de las personas.
  //
  //getBudgets([
  //  { name: "John", age: 21, budget: 23000 },
  //  { name: "Steve",  age: 32, budget: 40000 },
  //  { name: "Martin",  age: 16, budget: 2700 }
  //  ]) ➞ 65700

  let getBudgets=([
       { name: "John", age: 21, budget: 23000 },
       { name: "Steve",  age: 32, budget: 40000 },
       { name: "Martin",  age: 16, budget: 2700 }
    ]);

  let nTotPresupuesto = (lista) => {
    return lista.reduce((nTotal,elemento)=> nTotal + elemento.budget,0)
  };

  nSumTot = nTotPresupuesto(getBudgets);
  alert(`Suma total del presupuesto de las personas es:\n ${nSumTot}`);
}



function ejercicio12() {
  //  12.	Cree una función que tome una matriz de estudiantes y devuelva una matriz 
  //  de nombres de estudiantes.
  //
  //  getStudentNames([
  //  { name: "Steve" },
  //  { name: "Mike" },
  //  { name: "John" }
  //  ]) ➞ ["Becky", "John", "Steve"]

  let aNombres = [];
  let getStudentNames=[
        { name: "Steve" },
        { name: "Mike" },
        { name: "John" }
      ];

  for (const [key, value] of Object.entries(getStudentNames)) {
    aNombres.push(value.name);
  }

  alert(`Matriz con los nombres de estudiantes:\n [${aNombres}]`);
}



function ejercicio13() {
  //  13.	Escriba una función que convierta un objeto en una matriz de claves y 
  //      valores.
  //      objectToArray({ likes: 2, dislikes: 3, followers: 10 })
  //       ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
  
  let obj =  { likes: 2, dislikes: 3, followers: 10 };
  let aLista = objectToArray(obj);

  let cCadena = mostrarArrayEnCadena(aLista);
  alert(`El objeto en una matriz es:\n [${cCadena}] `);
}

let objectToArray = (obj) => {
  let aLista = [];
  for(let key in obj){
    aLista.push([key, obj[key]]);
  }
return aLista;
}

let mostrarArrayEnCadena = (aLista) => {
  let cCad = "";
  for (let n=0; n<aLista.length; n++) {
    cCad = cCad + '[' + aLista[n].toString() +'],'
  }
  return cCad;
};


function ejercicio14() {
  //  14.	Cree una función donde, dado el número n, devuelva la suma de todos los 
  //  números cuadrados  incluyendo n.
  //  squaresSum(3) ➞ 14
  //  1² + 2² + 3² =
  //  1 + 4 + 9 =
  //  14
  let nNum = Number.parseInt(prompt("Ingrese un numero:"));
  if (isNaN(nNum)) {
    return alert("¡ El numero ingresado es invalido !");
  }

  let nSuma = squaresSum(nNum);
  alert(`La suma de todos los cuadrados es:\n [${nSuma}]`);
}

function squaresSum(nNum){
  let nSuma = 0;
  for (let n=1; n<=nNum; n++) {
    nSuma = nSuma + Math.pow(n,2);
  }
  return nSuma;
}



function ejercicio15() {
  //    15.	Cree una función para multiplicar todos los valores en una matriz por 
  //    es la cantidad de valores en la matriz dada
  //   objectToArraymultiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
      
    let aData = [2, 3, 1, 0];
    let aTotal = objectToArraymultiplyByLength(aData);
    alert(`Matriz resultante:\n [${aTotal}]`);
}

function objectToArraymultiplyByLength(aData){
    let nLen = aData.length;
    return aData.map((n) => n * nLen);
}



function ejercicio16() {
  //    16.	Cree una función que tome un número como argumento y devuelva una 
  //    matriz de números contando desde este número a cero.
  //    countdown(5) ➞ [5, 4, 3, 2, 1, 0]

  let nNum = Number.parseInt(prompt("Ingrese un numero:"));

  if (isNaN(nNum)) {
    return alert("¡ Se ingreso un numero invalido !");
  }

  let aMat = countdown(nNum);
  alert(`Matriz resultante:\n [${aMat}]`);
}

function countdown(nNum){
  let aMat = [];
  for (let n=nNum; n>-1; n--) {
    aMat.push(n);
  }
  return aMat;
}



function ejercicio17() {
  //  17.	Cree una función que tome una matriz y devuelva la diferencia entre los 
  //  números más grandes y más pequeños.
  //  diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
  //  Smallest number is -50, biggest is 32.

  let aLista = [10, 4, 1, 4, -10, -50, 32, 21];
  let nDife  = diffMaxMin(aLista);
  alert(`La diferencia entre los numeros mayor y menos es:\n ${nDife}`);
}

function diffMaxMin(aDatos){
  let nMax = Math.max(...aDatos);
  let nMin = Math.min(...aDatos)
  return nMax - nMin;
}



function ejercicio18() {
  //  18.	Cree una función que filtre las cadenas de una matriz y devuelva una nueva 
  //  matriz que solo contenga enteros.
  //  filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]
  
  let aLista = [1, 2, 3, "x", "y", 10];
  let aNew   = filterList(aLista);
  alert(`Los elementos enteros de la nueva matriz son:\n [${aNew}]`);
}

function filterList(aData){
   return aNew = aData.filter((elem) => typeof elem === 'number');
}



function ejercicio19() {
  //  19.	Cree una función que tome dos argumentos (elemento, tiempos). El primer 
  // esargumento (elemento) es el elemento que necesita repetirse, mientras que el 
  //  segundo argumento (veces) es la cantidad de veces que se debe repetir el 
  //  elemento. Devuelve el resultado en una matriz.
  //  repeat(13, 5) ➞ [13, 13, 13, 13, 13]
  
  let aNew   = repeat(13,5);
  alert(`La matriz con los elementos repetidos es:\n [${aNew}]`);
}

function repeat(elemento,tiempo){
  let aLista = [];
  for (let n=1; n<= tiempo; n++) {
    aLista.push(elemento);
  }
  return aLista;
}



function ejercicio20() {
  //  20.	Escriba una función, .vreplace () que extienda el prototipo de cadena 
  //  reemplazando todas las vocales en una cadena con una vocal especificada.
  //  "apples and bananas".vreplace("u") ➞ "upplus und bununus"
  
  let cCadena   = "apples and bananas";
  cCadena = vreplace(cCadena,'u');
  
  alert(`La cadena de texto con los caracteres reemplazados es:\n "${cCadena}"`);
}

let vreplace = (cadena,car) => {
  let cTxt = "";
  let char = "";

  for (let n=0; n<cadena.length; n++) {
    char = cadena[n];
    if(char==='a' || char==='e' ||char==='i' ||char==='o' ||char==='u'){
      char = car;
    }
    cTxt= cTxt + char;
  }
  return cTxt;
};



// function vreplace(cadena,car){
//   let cTxt = "";
//   let char = "";

//   for (let n=0; n<cadena.length; n++) {
//     char = cadena[n];
//     if(char==='a' || char==='e' ||char==='i' ||char==='o' ||char==='u'){
//       char = car;
//     }
//     cTxt= cTxt + char;
//   }
//   return cTxt;
// }



function ejercicio21() {
//  21.	Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver 
//  una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra 
//  nemo]!".
//  findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
  
  let cCadena = "I am finding Nemo !"
  let cBusca  = "Nemo"
  let nPos = findNemo(cCadena,cBusca);
  alert(`¡Encontré a Nemo en [${nPos}]! `);
}

function findNemo(cad1,cad2){
  let aLista = cad1.split(" ");
  let nPos = aLista.indexOf(cad2)+1;
  return nPos;
}



function ejercicio22() {
  //  22.	Cree una función que capitalice la última letra de cada palabra.
  //  capLast("hello") ➞ "hellO"
    
  let cCadena = "hello"
  let cPalabra = capLast(cCadena);
  alert(`La palabra con la ultima letra en mayuscula es:\n "${cPalabra}" `);
}

function capLast(cCadena){
  return cCadena.slice(0,-1) + cCadena.slice(-1).toUpperCase();
}


// Solucion de los primeros 5 ejercicios

function ejercicio101() {
  //  1. Crea una función que retorne la suma de dos números.
    
  let nNum1 = Number.parseInt(prompt("Ingrese primer numero:"));
  let nNum2 = Number.parseInt(prompt("Ingrese segundo numero:"));

  if (isNaN(nNum1) || isNaN(nNum2)) {
    return alert("¡ El numero ingresado es invalido !");
  }

  let nSuma = sumaNumeros(nNum1,nNum2);

  alert(`La suma de los numeros ${nNum1} y ${nNum2}:\n ${nSuma} `);
}

let sumaNumeros = (n1,n2) => {
  return n1 + n2;
};
 

function ejercicio102() {
  // 2. Crea una función que retorne la potencia de un número dado,
  // esta función deberá recibir la potencia y el número a potenciar.
    
  let nNum = Number.parseInt(prompt("Ingrese un numero:"));
  let nPot = Number.parseInt(prompt("Ingrese la potencia:"));

  if (isNaN(nNum) || isNaN(nPot)) {
    return alert("¡ El numero ingresado es invalido !");
  }

  let nPotencia = numPotencia(nNum,nPot);
  
  alert(`La potencia ${nPot} del numero ${nNum} es:\n ${nPotencia} `);
}

let numPotencia = (nNum,nPot) => {
  return Math.pow(nNum,nPot);
};
 


function ejercicio103() {
  //  3. Crea una función que tome números y devuelva la suma de sus cubos.
  //   sumOfCubes(1, 5, 9) ➞ 855
  // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

  let aNumeros = [];
  let num = 0;
  let nTotNum  = Number.parseInt(prompt("Ingrese cantidad de numeros a ingresar:"));

  if (isNaN(nTotNum)) {
    return alert("¡ El numero ingresado es invalido !");
  }

  for (let n=1; n<= nTotNum; n++) {
    num = Number.parseInt(prompt(`Ingrese numero [${n}/${nTotNum}]:`));
    if (isNaN(num)) {
      return alert("Ingreso un numero invalido, saliendo!");
    }
    aNumeros.push(num);
  }

  let nSuma = sumOfCubes(aNumeros);
  
  alert(`La suma de los cubos de los numeros ingresados es:\n ${nSuma} `);
}

let sumOfCubes = (aLista) => {
  return aLista.reduce((nTotal,elemento)=> nTotal + Math.pow(elemento,3),0)
};



function ejercicio104() {
  //  4. Escribe una función que tome la base y la altura de un triángulo y devuelva
  //     su área.
  //     triArea(3, 2) ➞ 3
    
  let nBase = Number.parseInt(prompt("Ingrese la base del triangulo:"));
  let nAltura = Number.parseInt(prompt("Ingrese la altura del triangulo:"));

  if (isNaN(nBase) || isNaN(nAltura)) {
    return alert("¡ El numero ingresado es invalido !");
  }

  let nArea = triArea(nBase,nAltura);
  
  alert(`La area del triangulo con base [${nBase}] y altura [${nAltura}] es:\n ${nArea} `);
}

let triArea = (nBase,nAltura) => {
  return (nBase * nAltura)/2;
};



function ejercicio105() {
//  5. Crea una función llamada calculator que recibe 3 parámetros, dos números y
//  una operación matemática (+,-,/,x,%),
//  y si la operación no es correcta que envié 
//  un mensaje “El parámetro no es reconocido”
//  calculator(2,"+", 2) ➞ 4
    
  let nNum1 = Number.parseInt(prompt("Ingrese primer numero:"));
  let nNum2 = Number.parseInt(prompt("Ingrese segundo numero:"));
  let cOper = prompt("Ingrese operacion matematica valida [+,-,/,x,%]:");

  if (isNaN(nNum1) || isNaN(nNum2)) {
    return alert("¡ El numero ingresado es invalido !");
  }
  
  let cValor = calculator(nNum1,cOper,nNum2);
  alert(`Resultado de la operacion es:\n ${cValor} `);
}

let calculator = (nNum1,cOper,nNum2) => {
  let cMsg="";
  let nOpe= 0;

  if (cOper==='+'||cOper==='-'||cOper==='/'||cOper==='x'||cOper==='%') {
    switch (cOper){
      case '+':
         nOpe = nNum1 + nNum2;
         break;
      case '-':
         nOpe = nNum1 - nNum2;
         break;
      case '/':
         nOpe = nNum1 / nNum2;
         break;
      case 'x':
         nOpe = nNum1 * nNum2;
         break;
      case '%': 
        nOpe = nNum1 % nNum2;
        break;
    }
    cMsg = nOpe;    
  }else{
    cMsg = `"El parámetro no es reconocido"`;  
  }
  return cMsg;
};