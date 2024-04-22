const $btn = document.getElementById('btn-read-number')
const $number = document.getElementById('number')

const $btn2 = document.getElementById('btn-read-number-2')
const $numberEntero = document.getElementById('number-entero')

const $btn3 = document.getElementById('btn-read-number-3')
const $ultimoDigito = document.getElementById('ultimo-digito')

const numbers = document.getElementById("numbers");
const result = document.getElementById("result");

const result5 = document.getElementById("result5");
const cantidadZ = document.getElementById('cantidadZ')

const result6 = document.getElementById("result6");
const horaTrabajada = document.getElementById('horaTrabajada')

const result7 = document.getElementById("result7")

const notaObtenida = document.getElementById("notaObtenida")
const result8 = document.getElementById("result8")

const result9 = document.getElementById("result9")

const result10 = document.getElementById("result10")

const numbers2 = document.getElementById("numbers2")
const result11 = document.getElementById("result11")

const numbers3 = document.getElementById("numbers3")
const result12 = document.getElementById("result12")

const result13 = document.getElementById("result13")

const result14 = document.getElementById("result14")

const result15 = document.getElementById("result15")

const $btn16 = document.getElementById('btn-read-number-16')
const $nameDay = document.getElementById('name-day')
const $numbeNilakantha = document.getElementById('number-nilakantha')

const result17 = document.getElementById("result17")


const result18 = document.getElementById("result18")
const gananciaVendedor = document.getElementById("gananciaVendedor")

const result19 = document.getElementById("result19")

const resultPar = document.getElementById("resultPar")
const result20 = document.getElementById("result20")
const resultMay = document.getElementById("resultMay")
const numbers20 = document.getElementById("numbers20")
const cuadrado20 = document.getElementById("cuadrado20")
const media20 = document.getElementById("media20")
const suma20 = document.getElementById("suma20")

const $btn21 = document.getElementById('btn-read-number-21')
const $numberFactorial = document.getElementById('number-factorial')
const $textFactorial = document.getElementById('text-factorial')

const result22 = document.getElementById("result22")

const result23 = document.getElementById("result23")

const $btn24 = document.getElementById('btn-read-number-24')
const $numberPar = document.getElementById('number-par')
const $textPar = document.getElementById('text-par')

const result25 = document.getElementById("result25")

const result26 = document.getElementById("result26")

const result27 = document.getElementById("result27")

const result28 = document.getElementById("result28")

const result29 = document.getElementById("result29")


const result30 = document.getElementById("result30")

const result31 = document.getElementById("result31")

const result33 = document.getElementById("result33")

const result34 = document.getElementById("result34")

const $btn35 = document.getElementById('btn-read-number-35')
const $textOpacity = document.getElementById('list-numbers-opacity');
const $opacity = document.getElementById('opacity-list')
const $maxNumber = document.getElementById('num-max')

const result36 = document.getElementById("result36")
const result36b = document.getElementById("result36b")

const result37 = document.getElementById("result37")

const $btn38 = document.getElementById('btn-read-number-38')
const $numberPerfect = document.getElementById('number-perfect')
const $textPerfect = document.getElementById('num-perfect')

const result39 = document.getElementById("result39")

const $btn40 = document.getElementById('btn-read-number-40')
const $textPi = document.getElementById('text-pi');



//! Ejercicio 01
$btn.addEventListener('click', () => {

  if (!$number.value.length || $number.value.length == 0) {
    return alert('Ingrese numero a validar')
  }

  if ($number.value.length == 3) {
    alert('El numero ingresado tiene 3 cifras.')
  } else {
    alert('No tiene 3 cifras')
  }
})

//! Ejercicio 02 <!--De esta forma, voy directo a la funcion sin haber asignado valor a mis variables -->
$btn2.addEventListener('click', function () {
  
  if ($numberEntero.value >= 0) {
    alert('El numero ingresado NO es negativo')
  }
  else {
    alert('El numero ingresado SI es negativo')
  }
})

//! Ejercicio 03 <!--De esta forma, voy directo a la funcion sin haber asignado valor a mis variables -->
$btn3.addEventListener('click', function () {
  if ($ultimoDigito.value % 10 == 4) {
    alert('El numero ingresado termina en 4')
  } else {
    alert('El numero ingresado no termina en 4')
  }
})

//! Ejercicio 04 
//parseint - prompt son para asignar numeros enteros a la declaracion -->
//los prompt entregan cadenas de texto, pasrseInt convierte las cadenas de texto a numeros
//las funciones se dividen en 2: lo que va en parentesis es: parametros...
//Los argumentos de la función son los valores que recibe la función cuando se invoca (es decir todo el desarrollo donde se le asigna valor)
function Ordenado(num1, num2, num3) {

  var num1 = parseInt(prompt(`introduzca el primer número`))
  var num2 = parseInt(prompt(`intrioduzca el segundo número`))
  var num3 = parseInt(prompt(`introduzca el tercer número`))

  if (num1 >= num2 && num1 >= num3 && num2 >= num3) {
    result.textContent = `El orden de mayor a menor es: ${num1}, ${num2}, ${num3}`;
  } else if (num1 >= num2 && num1 >= num3 && num2 <= num3) {
    result.textContent = `El orden de mayor a menor es: ${num1}, ${num3}, ${num2}`;

  } else if (num2 >= num1 && num2 >= num3 && num1 >= num3) {
    result.textContent = `El orden de mayor a menor es: ${num2}, ${num1}, ${num3}`;
  } else if (num2 >= num1 && num2 >= num3 && num1 <= num3) {
    result.textContent = `El orden de mayor a menor es: ${num2}, ${num3}, ${num1}`;

  } else if (num3 >= num1 && num3 >= num2 && num1 >= num2) {
    result.textContent = `El orden de mayor a menor es: ${num3}, ${num1}, ${num2}`;
  } else if (num3 >= num1 && num3 >= num2 && num1 <= num2) {
    result.textContent = `El orden de mayor a menor es: ${num3}, ${num2}, ${num1}`;
  }
  numbers.textContent = `los números introducidos son ${num1}, ${num2}, ${num3}`;
}

//! Ejercicio 5 <-- if (cantidadZapato % 2 != 0) el modulo sirve para hallar numeros pares)

function ventaZapato(cantidadZapato, totalPago) {

  var cantidadZapato = parseInt(prompt(`introduzca la cantidad`));
  var totalPago;

  if (cantidadZapato == 0) {
    alert('El numero ingresado no es valido, ingrese un numero por favor')
  }
  if (cantidadZapato > 10) {
    totalPago = (80 * cantidadZapato) * 0.9
    result5.textContent = `El total a pagar es: ${totalPago}`
  } else if (cantidadZapato <= 10) {
    totalPago = cantidadZapato * 80
  }
  result5.textContent = `El total a pagar es: ${totalPago}`
  if (cantidadZapato > 20 && cantidadZapato < 30) {
    totalPago = (80 * cantidadZapato) * 0.8
    result5.textContent = `El total a pagar es: ${totalPago}`
  } else if (cantidadZapato > 30) {
    totalPago = (80 * cantidadZapato) * 0.6
    result5.textContent = `El total a pagar es: ${totalPago}`
  }
  cantidadZ.textContent = `La cantidad comprada es: ${cantidadZapato}`
}

//! Ejercicio 06
function sueldoTrabajador(horas, pagoSueldo) {

  var horas = prompt('Ingresar la cantidad de horas trabajadas')
  var pagoSueldo;

  if (horas <= 40) {
    pagoSueldo = (horas * 20)
    result6.textContent = `El total del sueldo a pagar es: $ ${pagoSueldo}`
  } else if (horas > 40) {
    pagoSueldo = 800 + ((horas - 40) * 25)
    result6.textContent = `El total del sueldo a pagar es: $ ${pagoSueldo}`
  }
  horaTrabajada.textContent = `El total de horas trabajada es:  ${horas}`
}

//! Ejercicio 07
function descuentoHelado(membresia, descHelado) {
  var membresia = prompt('ingrese tipo de membresia: "A" "B" "C" ')
  var descHelado;

  if (membresia == "A") {
    descHelado = "10%"
    result7.textContent = `Usted tiene un descuento de ${descHelado} por tener membresia tipo ${membresia}`
  } if (membresia == "B") {
    descHelado = "15%"
    result7.textContent = `Usted tiene un descuento de ${descHelado} por tener membresia tipo ${membresia}`
  } else if (membresia == "C") {
    descHelado = "20%"
    result7.textContent = `Usted tiene un descuento de ${descHelado} por tener membresia tipo ${membresia}`
  }

}

//! Ejercicio 08
function promedioAlumno(nota1, nota2, nota3, promedioAlumn) {

  var nota1 = parseInt(prompt('Ingrese la primera nota'))
  var nota2 = parseInt(prompt('Ingrese la segunnda nota'))
  var nota3 = parseInt(prompt('Ingrese la tercera nota'))
  var promedioAlumn = (nota1 + nota2 + nota3) / 3

  if (promedioAlumn > 10) {
    result8.textContent = `Usted tiene nota aprobatoria`
  } else if (promedioAlumn < 10) {
    result8.textContent = `Usted No tiene nota aprobatoria`
  }
  notaObtenida.textContent = `Usted tiene como promedio la nota de: ${promedioAlumn}`
}


//! Ejercicio 09
function aumentoTrabajador(sueldo, sueldoFinal) {
  var sueldo = parseInt(prompt('Ingrese su sueldo actual'))
  var sueldoFinal;

  if (sueldo > 2000) {
    sueldoFinal = sueldo + (sueldo * 0.05)
    result9.textContent = `Su nuevo sueldo sera de ${sueldoFinal} obteniendo un aumento del 5%`
  } else if (sueldo < 2000) {
    sueldoFinal = sueldo + (sueldo * 0.1)
    result9.textContent = `Su nuevo sueldo sera de ${sueldoFinal} obteniendo un aumento del 10%`
  }
}

//! Ejercicio 10
function numeroParImpar(incognita) {

  var incognita = parseInt(prompt('Ingrese su numero a consultar'))

  if (incognita % 2 == 0) {
    result10.textContent = `Su numero ingresado "${incognita}" es Par`;
  } else
    result10.textContent = `Su numero ingresado "${incognita}" es Impar`
}

//! Ejercicio 11
function numeroMayor(nume1, nume2, nume3) {
  var nume1 = parseInt(prompt(`introduzca el primer número`))
  var nume2 = parseInt(prompt(`intrioduzca el segundo número`))
  var nume3 = parseInt(prompt(`introduzca el tercer número`))

  if (nume1 >= nume2 && nume1 >= nume3) {
    result11.textContent = `El numero mayor de los tres numeros es: ${nume1}`
  } else if (nume2 >= nume1 && nume2 >= nume3) {
    result11.textContent = `El numero mayor de los tres numeros es: ${nume2}`
  } if (nume3 >= nume1 && nume3 >= nume2) {
    result11.textContent = `El numero mayor de los tres numeros es: ${nume3}`
  }
  numbers2.textContent = `los números introducidos son ${nume1}, ${nume2}, ${nume3}`;
}

//! Ejercicio 12
function numeroMayor2(numer1, numer2) {
  var numer1 = parseInt(prompt(`introduzca el primer número`))
  var numer2 = parseInt(prompt(`intrioduzca el segundo número`))


  if (numer1 > numer2) {
    result12.textContent = `El numero mayor de los dos numeros es: ${numer1}`
  } if (numer2 > numer1) {
    result12.textContent = `El numero mayor de los dos numeros es: ${numer2}`
  } else if (numer1 == numer2) {
    result12.textContent = `${numer1} y ${numer2} Ambos numeros son iguales`
  }
  numbers3.textContent = `los números introducidos son ${numer1}, ${numer2}`
}

//! Ejercicio 13
function vocalOletra(valor1) {
  var valor1 = prompt('Ingrese la letra de su preferencia')

  if (valor1 == "a" || valor1 == "A" || valor1 == "e" || valor1 == "E" || valor1 == "i" || valor1 == "I" || valor1 == "O" || valor1 == "o" || valor1 == "u" || valor1 == "U")
    result13.textContent = `la letra ingresada "${valor1}" es una vocal`
  else
    result13.textContent = `la letra ingresada "${valor1}" No es una vocal`
}

//! Ejercicio 14
function esPrimo(numeroPrimo) {

  var numeroPrimo = parseInt(prompt('Ingrese un numero'))

  if (typeof numeroPrimo != 'number') {
    return result14.textContent = `El argumento "${numeroPrimo}" debe ser un numero entero y NO una letra`
  }
  if (numeroPrimo <= 1) {
    return result14.textContent = `El argumento "${numeroPrimo}" debe ser un numero entero POSITIVO`
  }
  var raiz14 = Math.floor(Math.sqrt(numeroPrimo)) + 1;
  for (var i = 2; i < raiz14; ++i) {
    if (numeroPrimo % i == 0) {

      return result14.textContent = `El numero ingresado ${numeroPrimo} No es Primo`;
    }

  }
  return result14.textContent = `El numero ingresado ${numeroPrimo} es Primo`
}

//try {
//console.log(esPrimo(6));
//} catch (e) {
//console.log(`Error: ${e.message}`)
//}

//! Ejercicio 15
function convertidorPeso(cantPeso, pesoConvertido, tipoPeso) {

  var cantPeso = parseInt(prompt('Ingrese la cantidad a convertir'));
  var tipoPeso = prompt('Seleccione el tipo de conversion: "A: para centimetros a pulgadas" o "B: para libras a kilogramos" ');
  var pesoConvertido;

  if (tipoPeso == "A" || tipoPeso == "a") {
    pesoConvertido = cantPeso / 2.54
    result15.textContent = `Los "${cantPeso}" centimetros equivalen en pulgadas a: "${pesoConvertido}".`
  } else if (tipoPeso == "B" || tipoPeso == "b") {
    pesoConvertido = cantPeso * 0.45359237
    result15.textContent = `Las "${cantPeso}" libras equivalen en kilogramos a: "${pesoConvertido}".`

  }
}

//! Ejercicio 16

window.addEventListener("load", () => handlerDay());
$btn16.addEventListener('click', () => handlerDay())

function handlerDay() {
  const numberDay = Math.floor(Math.random() * 7) + 1
  switch (numberDay) {
    case 1:
      $nameDay.innerHTML = `El numero ${numberDay} corresponde a Lunes`
      // console.log("lunes")
      break;
    case 2:
      $nameDay.innerHTML = `El numero ${numberDay} corresponde a martes`
      break;
    case 3:
      $nameDay.innerHTML = `El numero ${numberDay} corresponde a miercoles`
      break;
    case 4:
      $nameDay.innerHTML = `El numero ${numberDay} corresponde a jueves`
      break;
    case 5:
      $nameDay.innerHTML = `El numero ${numberDay} corresponde a viernes`
      break;
    case 6:
      $nameDay.innerHTML = `El numero ${numberDay} corresponde a sabado`
      break;
    case 7:
      $nameDay.innerHTML = `El numero ${numberDay} corresponde a domingo`
      break;
    default:
      $nameDay.innerHTML = `Error`
      console.log("dia invalido")
  }
}

//! Ejercicio 17
function mueveReloj(segundo, horas, minutos, contador) {

  var horas = parseInt(prompt('Ingrese la hora de su preferencia sin saltar [0-23]'))
  var minutos = parseInt(prompt('Ingrese el minuto de su preferencia sin saltar [0-59]'))
  var segundo = parseInt(prompt('Ingrese el segundo de su preferencia sin saltar [0-59]')) + 1;
  //var contadorseg;
  // var contadormin;
  //var contadorhr;

  //if (horas == 60 || minutos == 60 || segundo == 60) {
  //   alert('los numeros ingresados no son correctos, corregir')
  //}
  if (segundo == 60) {
    segundo = 0;
    minutos += 1;
    if (minutos == 60) {
      minutos = 0;
      horas += 1;
      if (horas == 24) {
        horas = 0;
      }
    }
    //while (segundo <= 59) {
    //contadorseg = segundo + 1;
    // setTimeout(1000)
    //} while (minutos <= 59) {
    //segundo == 0;
    //contadormin = minutos + 1;
    //setTimeout(1000)
    //} while (horas <= 23) {
    // minutos == 0;
    //contadorhr = horas + 1;
    //setTimeout(1000)
    //} if (horas == 24) {
    // horas == 0;
  }
  result17.textContent = `la hora actual ingresada es: ${horas}:${minutos}:${segundo}`
  //try {
  //console.log(mueveReloj());
  //} catch (e) {
  //console.log(`Error: ${e.message}`)
  //}
}

//if (horas > 9) {
//result17.textContent = `La hora digitada es:"${horas}"`
//} else {
//result17.textContent = `La hora digitada es:"0${horas}"`
//}
//if (minutos > 9) {
// result17.textContent = `El minuto digitado es:"${minutos}"`
//} else {
// result17.textContent = `El minuto digitado es: "0${minutos}"`
//}
// if (segundo > 9) {
// result17.textContent = `El segundo digitado es:"${segundo}"`
//} else {
//  result17.textContent = `El segundo digitado es:"0${segundo}"`

//! Ejercicio 18
function ventaCds(cantCds) {

  var cantCds = parseInt(prompt('Ingrese la cantidad de Cds A comprar'))
  var gananciaVenta;

  if (cantCds <= 9) {
    totalVenta = cantCds * 10;
    gananciaVenta = totalVenta * 0.0825
    result18.textContent = `La cantidad total a pagar por la compra es de "${totalVenta}"`
  } else if (cantCds >= 10 && cantCds <= 99) {
    totalVenta = cantCds * 8;
    gananciaVenta = totalVenta * 0.0825
    result18.textContent = `La cantidad total a pagar por la compra es de "${totalVenta}"`
  } if (cantCds >= 100 && cantCds <= 499) {
    totalVenta = cantCds * 7;
    gananciaVenta = totalVenta * 0.0825
    result18.textContent = `La cantidad total a pagar por la compra es de "${totalVenta}"`
  } else if (cantCds >= 500) {
    totalVenta = cantCds * 6
    gananciaVenta = totalVenta * 0.0825
    result18.textContent = `La cantidad total a pagar por la compra es de "${totalVenta}"`
  }
  gananciaVendedor.textContent = `La ganancia obtenida para el vendedor de la venta de ${cantCds} Cds es de ${gananciaVenta}.`

}


//! Ejercicio 19
//Cajero (56$/día). Servidor (64$/día). Preparador
//    de mezclas (80$/día). Mantenimiento (48$/día)
function heladeria(codVendedor, diasTrabajados, sueldoSemanal) {

  var codVendedor = parseInt(prompt('Ingrese el Codigo del vendedor "1: Cajero", "2:Servidor", "3:Preparador", "4:Mantenimiento" [Escoger solo de 1-4]'))
  var diasTrabajados = parseInt(prompt('Ingrese la cantidad de días trabajados: Maximo 6 dias'))
  var sueldoSemanal;

  if (diasTrabajados > 6 && diasTrabajados < 1) {
    result19.textContent = `La cantidad de dias ingresado excede el limite permitido, ingrese un valor de [1-6]`
  } else switch (codVendedor) {
    case 1:
      sueldoSemanal = 56 * diasTrabajados;
      result19.textContent = `El sueldo que debera pagar al Cajero es de ${sueldoSemanal} por haber trabajado ${diasTrabajados} dias.`
    case 2:
      sueldoSemanal = 64 * diasTrabajados;
      result19.textContent = `El sueldo que debera pagar al Servidor es de ${sueldoSemanal} por haber trabajado ${diasTrabajados} dias.`
    case 3:
      sueldoSemanal = 80 * diasTrabajados;
      result19.textContent = `El sueldo que debera pagar al Preparador es de ${sueldoSemanal} por haber trabajado ${diasTrabajados} dias.`
    case 4:
      sueldoSemanal = 48 * diasTrabajados;
      result19.textContent = `El sueldo que debera pagar al de Mantenimiento es de ${sueldoSemanal} por haber trabajado ${diasTrabajados} dias.`
  }

}

//! Ejercicio 20
function combinada(numero1, numero2, numero3, numero4) {
  var numero1 = parseInt(prompt('Ingrese el primer numero'))
  var numero2 = parseInt(prompt('Ingrese el segundo numero'))
  var numero3 = parseInt(prompt('Ingrese el tercer numero'))
  var numero4 = parseInt(prompt('Ingrese el cuarto numero'))
  var nroPares = 0;
  var cuadradosegundo;
  var media;
  var sumatoria;

  if (numero1 % 2 == 0) { nroPares += 1 }
  else { nroPares += 0 }
  if (numero2 % 2 == 0) { nroPares += 1 }
  else { nroPares += 0 }
  if (numero3 % 2 == 0) { nroPares += 1 }
  else { nroPares += 0 }
  if (numero4 % 2 == 0) { nroPares += 1 }
  else { nroPares += 0 }
  resultPar.textContent = `La cantidad de numeros pares ingresados es "${nroPares}".`

  if (numero1 >= numero2 && numero1 >= numero3 && numero1 >= numero4) {
    resultMay.textContent = `El numero mayor de los cuatro numeros es: ${numero1}`
  } else if (numero2 >= numero1 && numero2 >= numero3 && numero2 >= numero4) {
    resultMay.textContent = `El numero mayor de los cuatro numeros es: ${numero2}`
  } if (numero3 >= numero1 && numero3 >= numero2 && numero3 >= numero4) {
    resultMay.textContent = `El numero mayor de los cuatro numeros es: ${numero3}`
  } else if (numero4 >= numero1 && numero4 >= numero2 && numero4 >= numero3) {
    resultMay.textContent = `El numero mayor de los cuatro numeros es: ${numero4}`
  }
  numbers20.textContent = `los números introducidos son ${numero1}, ${numero2}, ${numero3}. ${numero4}`

  if (numero3 % 2 == 0) {
    cuadradosegundo = numero2 * numero2
    cuadrado20.textContent = `El tercer numero ingresado ${numero3} es par, y el cuadrado del segundo es ${cuadradosegundo}`
  }

  if (numero1 < numero4) {
    media = (numero1 + numero2 + numero3 + numero4) / 4
    media20.textContent = `El primer ${numero1} numero es menor que el cuarto ${numero4} y la media de los cuatro numeros es ${media}`
  }

  if (numero2 > numero3 && numero3 >= 50 && numero3 <= 700) {
    sumatoria = numero1 + numero2 + numero3 + numero4
    suma20.textContent = `La suma de los 4 numeros es ${sumatoria}`
  } else {
    suma20.textContent = `No cumple con las 2 condiciones`
  }

}

//! Ejercicio 21
$btn21.addEventListener('click', () => {
  const number = parseInt($numberFactorial.value);
  let result = 1;
  if ($numberFactorial.value.length == 0) {
    return alert('Ingrese numero a validar')
  }

  for (let i = 1; i <= number; i++) {
    result = result * i
  }

  $textFactorial.innerHTML = `El factorial de ${number}! es ${result}`
})

//! Ejercicio 22
function sumaN(n, sumaN1) {
  var n = parseInt(prompt('Ingrese un numero entero positivo'))
  var sumaN1 = (n * (n + 1)) / 2

  result22.textContent = `La suma de los primeros numeros es de: ${sumaN1}`
}

//! Ejercicio 23
function sumaImpares(n23, sumaN23) {

  var n23 = parseInt(prompt('Ingrese un valor para "n"'))
  var sumaN23 = 0;

  if (n23 >= 1) {
    for (var i = 1; i <= n23; i++) {
      if (i % 2 == 1) {
        sumaN23 = sumaN23 + i
        result23.textContent = `La suma de los primeros numeros de n (impares) es de: ${sumaN23}`
      }
    }
  }
}

//! Ejercicio 24
$btn24.addEventListener('click', () => {
  const number = parseInt($numberPar.value);
  let result = 0;

  if ($numberPar.value.length == 0) {
    return alert('Ingrese numero a validar')
  }

  for (let i = 1; i <= number; i++) {
    if (i % 2 == 0) {
      result += i
    }
  }

  $textPar.innerHTML = `El suma de pares es de: ${result}`
})

//! Ejercicio 25
function factorial25() {
  // 25.	Hacer un algoritmo para calcular el factorial de un numero de una forma distinta.

  let nNum25 = Number.parseInt(prompt("Ingresar un numero:"));

  if (isNaN(nNum25)) {
    return alert("¡ Se ingreso un numero invalido !");
  }

  let nFact = 1;
  let nCont = 0;

  do {
    nCont = nCont + 1;
    nFact = nFact * nCont;
  } while (nCont < nNum25);

  result25.textContent = `El factorial de ${nNum25} es: ${nFact}`;
}

//! Ejercicio 26 (Cuando se trate solo de numeros la funcion asegurate de poner PARSEINT)

function cDivisor(dividendo, divisor) {

  var dividendo = parseInt(prompt('Ingrese el numero dividendo'));
  var divisor = parseInt(prompt('Ingrese el numero divisor'));

  if (isNaN(dividendo) || isNaN(divisor)) {
    return result26.textContent = `Por favor ingresar solo numeros`
  } else {

    var residuo = dividendo;
    var cociente = 0;

    while (residuo >= divisor) {
      residuo = residuo - divisor,
        cociente = cociente + 1
    }
    result26.textContent = `el cociente es: ${cociente} y el residuo es ${residuo}`

  }
}

//! Ejercicio 27 (EL bucle empieza con do y termina con while (no inversa porque saldra error en el cierre)
function mediaPositivo(suma27, contador27, numero27, media27) {
  var suma27 = 0;
  var contador27 = -1;
  var numero27 = 0;

  do {
    suma27 = suma27 + numero27
    contador27 = contador27 + 1
    numero27 = parseInt(prompt('Ingrese numero, ingrese negativo para finalizar'));

    if (isNaN(numero27)) {
      alert("¡ Se ingreso un numero invalido !");
      numero27 = 0;
      contador27 = contador27 - 1;
    }
  }
  while (numero27 >= 0) {
    let media27 = suma27 / contador27;
    result27.textContent = `La media de los numeros positivos ingresados es:  ${media27}`
  }
}

//! Ejercicio 28 
function repetir100() {
  var suma100 = 0;

  for (i = 1; i < 101; i++) {
    suma100 = suma100 + i;
  }
  result28.textContent = `La suma de los 100 primeros numeros es: ${suma100}`

}

//! Ejercicio 29
function repMientras(suma29, contador100) {

  var suma29 = 0;
  var contador100 = 0;

  do {
    contador100 = contador100 + 1;
    suma29 = suma29 + contador100;
  }
  while (contador100 < 100)
  result29.textContent = `La suma de los 100 primeros numeros es: ${suma29}`
}

//! Ejercicio 30
function repetirPara() {
  var sum100 = 0;

  for (i = 1; i < 101; i++) {
    sum100 = sum100 + i;
  }
  result30.textContent = `La suma de los 100 primeros numeros es: ${sum100}`

}

//! Ejercicio 31 (Es importante que todos los if y else abran y cierren llaves porque sino combinara secuencias)
// 31.	Hacer un algoritmo parar calcular la media de los n�meros pares e impares, s�lo se ingresar� diez n�meros.

function mediaParImpar(contPar, contImpar31, sumPar, sumImpar, promedImpar, promedPar, numMedia, contNum, sumNum) {
  var contPar = 0;
  var sumPar = 0;
  var numMedia = 0;
  var contImpar31 = 0;
  var sumImpar = 0;
  var contNum = 0;
  var sumNum = 0;

  do {
    contNum = contNum + 1;
    sumNum = sumNum + numMedia;
    numMedia = Number.parseInt(prompt(`Ingrese los numeros a promediar ${contNum}/10`));

    if (isNaN(numMedia)) {
      return alert("¡ Se ingreso un numero invalido !");
    }

    if (numMedia % 2 == 0) {
      contPar = contPar + 1;
      sumPar = sumPar + numMedia;
    } else {
      contImpar31 = contImpar31 + 1;
      sumImpar = sumImpar + numMedia;
    }
  }
  while (contNum < 10);
  var promedImpar = sumImpar / contImpar31;
  var promedPar = sumPar / contPar;
  result31.textContent = `El promedio de nros Pares es: ${promedPar} y el promedio de nros Impares es: ${promedImpar}`
}


//! Ejercicio 33 (The toUpperCase() method converts a string(cadena) to uppercase letters)
function programUsuario() {
  let nCont33 = 0;
  let cOpc = "";

  do {
    nCont33 = nCont33 + 1;
    alert(`Proceso: ${nCont33}`);
    cOpc = prompt(`Continuar con el programa Si[S] o No [N]`).toUpperCase();
  } while (cOpc != "N");
  alert(`Programa terminado!`);
}

//! Ejercicio 34
function tablitaMultiplicar() {

  let cTabla = ``;
  for (let nTabla = 1; nTabla <= 9; nTabla++) {
    cTabla = `Tabla del ${nTabla}:\n--------------------\n`;
    for (nNum = 1; nNum <= 12; nNum++) {
      cTabla = cTabla + `${nTabla} * ${nNum} = ${nTabla * nNum}\n`;
    }
    alert(cTabla);
  }
}

//! Ejercicio 35

$btn35.addEventListener('click', () => {
  const listNumer = []
  for (let i = 0; i < 20; i++) {
    const numeroSelected = Math.floor(Math.random() * (1000 - 100))
    listNumer.push(numeroSelected)
  }
  const numMax = Math.max(...listNumer)
  $maxNumber.innerHTML = numMax.toString()
  const text = listNumer.join('-').toString()
  $textOpacity.innerHTML = text
  $opacity.style.opacity = 1;
})


function fibonacci36() {
 
  let nNumero = Number.parseInt(prompt(`Ingrese un numero:`));
  if (isNaN(nNumero)) {
    return alert("¡ Se ingreso un numero invalido !");
  }
result36b.textContent=`Los primeros ${nNumero}, terminos de la serie fibonacci son:`
  let nSuma = 0;
  let nNum1 = 0;
  let nNum2 = 1;
  let cSerie= "";

  for (n = 1; n <= nNumero; n++) {
    cSerie = cSerie + nNum2 + " ";
    nSuma = nNum1 + nNum2;
    nNum1 = nNum2;
    nNum2 = nSuma;
  }
result36.textContent =`${cSerie}`
}

//! Ejercicio 37
function ejercicio37() {
let nNum1 = Number.parseInt(prompt(`Ingresar primer numero:`));
let nNum2 = Number.parseInt(prompt(`Ingresar segundo numero:`));
let nNumX = 0;
let nNum  = 0;
let cMCD  = "";

if (isNaN(nNum1) || isNaN(nNum2)) {
  return alert("¡ Se ingreso un numero invalido !");
}

if (nNum1 > nNum2) {
  nNumX = nNum1;
  nNum1 = nNum2;
  nNum2 = nNumX;
}

cMCD= cMCD + `A=${nNum1}\nB=${nNum2}\n\n`
let nResiduo = nNum1 % nNum2;

while (nResiduo > 0) {
  nNum = nNum2;
  nNum2 = nResiduo;
  nNum1 = nNum;
  nResiduo = nNum1 % nNum2;
}

cMCD = cMCD + `El M.C.D es: ${nNum2}`
alert(cMCD);
}

//! Ejercicio 38
$btn38.addEventListener('click', () => {

  const number = parseInt($numberPerfect.value);

  if ($numberPerfect.value.length == 0) {
    return alert('Ingrese numero a validar')
  }

  let sumaDivisores = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      sumaDivisores += i;
    }
  }

  if (sumaDivisores === number) {
    $textPerfect.innerHTML = `El ${number} es un numero perfectp`
  } else {
    $textPerfect.innerHTML = `El ${number} no es perfecto`
  }
})


//! Ejercicio 39
function aproximacion() {

  let nNumero = Number.parseInt(prompt(`Ingresar numero de veces:`));

  if (isNaN(nNumero)) {
      return alert("¡ Se ingreso un numero invalido !");
  }

let nFlag = 0;
let nPI = 0;
let cSerie = ``;

  for (let n=1; n<= nNumero*2; n=n+2) {
      if(nFlag==0){
          nPI = nPI + (4/n);
          nFlag=1;
         cSerie = cSerie + `+(4/${n})`;
      }else{
          nPI = nPI - (4/n);
          nFlag=0;
          cSerie = cSerie + `-(4/${n})`;            
      }
  }
  alert(cSerie+ `\n\nLa aproximacion del numero PI es: ${nPI}`);
}


//! Ejercicio 40
$btn40.addEventListener('click', () => {
  if ($numbeNilakantha.value.length == 0) {
    return alert('Ingrese numero a validar')
  }

  let pi = 3;
  let signo = 1;

  for (let i = 2; i <= 2 * $numbeNilakantha.value; i += 2) {
    pi += 4 / (i * (i + 1) * (i + 2)) * signo;

    signo += -1
  }
  $textPi.innerHTML = pi.toString()
})







