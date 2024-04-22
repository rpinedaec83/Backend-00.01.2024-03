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
    case 23:
      ejercicio23();
      break;
    case 24:
      ejercicio24();
      break;
    case 25:
      ejercicio25();
      break;
    case 26:
      ejercicio26();
      break;
    case 27:
      ejercicio27();
      break;
    case 28:
      ejercicio28();
      break;
    case 29:
      ejercicio29();
      break;
    case 30:
      ejercicio30();
      break;

    case 31:
      ejercicio31();
      break;
    case 32:
      ejercicio32();
      break;
    case 33:
      ejercicio33();
      break;
    case 34:
      ejercicio34();
      break;
    case 35:
      ejercicio35();
      break;
    case 36:
      ejercicio36();
      break;
    case 37:
      ejercicio37();
      break;
    case 38:
      ejercicio38();
      break;
    case 39:
      ejercicio39();
      break;
    case 40:
      ejercicio40();
      break;

    default:
      break;
  }
}

function ejercicio1() {
  // 1.	Hacer un algoritmo que lea un n�mero por el teclado y determinar si tiene tres d�gitos.
  let numero = Number.parseInt(prompt("Ingrese un numero:"));

  if (!isNaN(numero)) {
    if (numero > 99 && numero < 1000) {
      alert("El numero tiene 3 digitos");
    } else {
      alert("El numero no tiene 3 digitos");
    }
  } else {
    alert("¡ Numero invalido !");
  }
}

function ejercicio2() {
  // 2.	Hacer un algoritmo que lea un n�mero entero por el teclado y determinar si es negativo.
  let numero = Number.parseInt(prompt("Ingrese un numero entero:"));

  if (!isNaN(numero)) {
    if (numero < 0) {
      alert(`El numero: ${numero}, es negativo`);
    } else {
      alert(`El numero: ${numero}, es positivo`);
    }
  } else {
    alert("¡ Numero invalido !");
  }
}

function ejercicio3() {
  // 3.	Hacer un algoritmo que lea un n�mero y determinar si termina en 4.
  let numero = Number.parseInt(prompt("Ingrese un numero:"));

  if (!isNaN(numero)) {
    if (numero % 10 == 4) {
      alert(`El numero: ${numero}, termina en cuatro`);
    } else {
      alert(`El numero: ${numero}, NO termina en cuatro`);
    }
  } else {
    alert("¡ Numero invalido !");
  }
}

function ejercicio4() {
  // 4.	Hacer un algoritmo que lea tres n�meros enteros y los muestre de menor a mayor.
  let n1 = Number.parseInt(prompt("Ingrese primer número:"));
  let n2 = Number.parseInt(prompt("Ingrese segundo número:"));
  let n3 = Number.parseInt(prompt("Ingrese tercer número:"));

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    return alert("¡ Se ingreso un numero invalido !");
  }

  if (n1 > n2) {
    if (n1 > n3) {
      mayor = n1;
      if (n2 > n3) {
        medio = n2;
        menor = n3;
      } else {
        medio = n3;
        menor = n2;
      }
    } else {
      mayor = n3;
      medio = n1;
      menor = n2;
    }
  } else {
    if (n2 > n3) {
      mayor = n2;
      if (n3 > n1) {
        medio = n3;
        menor = n1;
      } else {
        medio = n1;
        menor = n3;
      }
    } else {
      mayor = n3;
      medio = n2;
      menor = n1;
    }
  }

  alert(
    `Los numeros ordenados de menor a mayor son : ${menor}, ${medio}, y ${mayor}`
  );
}

function ejercicio5() {
  //5.	Hacer un algoritmo para una tienda de zapatos que tiene una promoci�n de descuento para vender al mayor,
  //      esta depender� del n�mero de zapatos que se compren.
  //      * Si son m�s de diez, se les dar� un 10% de descuento sobre el total de la compra;
  //      * si el n�mero de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento;
  //      * si son m�s treinta zapatos se otorgar� un 40% de descuento.
  //      El precio de cada zapato es de $80.

  let nNumZapatos = Number.parseInt(
    prompt(`El precio de cada zapato es $80\n`+
           `Ingresar numero de zapatos a comprar:`)
  );
  let nPrecioZapato = 80;
  let nTotal = nNumZapatos * nPrecioZapato;
  let nDscto = 0;

  if (isNaN(nNumZapatos)) {
    return alert("¡ Se ingreso un numero invalido !");
  }

  if (nNumZapatos > 30) {
    nDscto = (nNumZapatos * nPrecioZapato * 40) / 100;
  } else {
    if (nNumZapatos > 20) {
      nDscto = (nNumZapatos * nPrecioZapato * 20) / 100;
    } else {
      if (nNumZapatos > 10) {
        nDscto = (nNumZapatos * nPrecioZapato * 10) / 100;
      } else {
        nDscto = 0;
      }
    }
  }

  let nTotalPago = nTotal - nDscto;
  alert(`Precio total de compra es: ${nTotalPago}`);
}

function ejercicio6() {
  // 6.	Hacer un algoritmo para ayudar a un trabajador a saber cu�l ser� su sueldo semanal,se sabe que
  //		si trabaja 40 horas o menos, se le pagar� $20 por hora, pero
  //		si trabaja m�s de 40 horas entonces las horas extras se le pagar�n a $25 por hora.

  let nHoras = Number.parseInt(prompt("Ingresar numero de horas trabajadas:"));
  let nHorasTrabajadas = 0;

  if (isNaN(nHoras)) {
    return alert("¡ Se ingreso un numero invalido !");
  }

  if (nHoras <= 40) {
    nHorasTrabajadas = nHoras * 20;
  } else {
    nHorasTrabajadas = nHoras * 25;
  }

  alert(`Sueldo semanal por las horas trabajadas es:  ${nHorasTrabajadas}`);
}

function ejercicio7() {
  // 7.	Hacer un algoritmo para una tienda de helado que da un descuento por compra a sus
  // 		clientes con membres�a dependiendo de su tipo,
  // 		s�lo existen tres tipos de membres�a, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
  // 		Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento

  let nPrecioHelado = 10;

  // Escribir "EL precio del helado es:", nPrecioHelado
  let nHelados = Number.parseInt(prompt(`Precio del helado es ${nPrecioHelado}\nNumero de helados a comprar:`));
  let cMembrecia = prompt("Ingresar tipo de membresia [A/B/C]:").toUpperCase();
  let nDescuento = 0;

  if (isNaN(nHelados)) {
    return alert("¡ Se ingreso un numero invalido !");
  }

  switch (cMembrecia) {
    case "A":
      nDescuento = 10;
      break;
    case "B":
      nDescuento = 15;
      break;
    case "C":
      nDescuento = 20;
      break;
    default:
      nDescuento = 0;
      break;
  }

  let nTotal = nHelados * nPrecioHelado;
  let nDscto = (nTotal * nDescuento) / 100;
  let nTotFn = nTotal - nDscto;

  alert(`Total a Pagar     :  ${nTotal}\n`+
        `Descuento % ${nDescuento} :  ${nDscto}\n`+
        `Total con Dscto  :  ${nTotFn}`);
}

function ejercicio8() {
  //8.	Hacer un algoritmo para calcular el promedio de tres notas y determinar si el estudiante aprob� o no.

  let nNota1 = Number.parseInt(prompt("Ingresar primera nota:"));
  let nNota2 = Number.parseInt(prompt("Ingresar segunda nota:"));
  let nNota3 = Number.parseInt(prompt("Ingresar tercera nota:"));

  if (isNaN(nNota1) || isNaN(nNota2) || isNaN(nNota3)) {
    return alert("¡ Se ingreso una nota invalida !");
  }

  let nPromedio = (nNota1 + nNota2 + nNota3) / 3;
  let cMensaje = "";

  if (nPromedio >= 10.5) {
    cMensaje = "Aprobo";
  } else {
    cMensaje = "Desaprobo";
  }

  alert(`El estudiante: ${cMensaje} con ${nPromedio} `);
}

function ejercicio9() {
  //9.	Hacer un algoritmo para determinar el aumento de un trabajador,
  // 		se debe tomar en cuenta que
  //		si ganaba m�s de $2000 tendr� un aumento del 5%,
  //		si generaba menos de $2000 su aumento ser� de un 10%.

  let nMonto = Number.parseInt(
    prompt("Ingresar monto ganado por el trabajador:")
  );

  if (isNaN(nMonto)) {
    return alert("¡ Se ingreso un monto invalido !");
  }

  if (nMonto > 2000) {
    nMonto = nMonto + (nMonto * 5) / 100;
  } else {
    nMonto = nMonto + (nMonto * 10) / 100;
  }

  alert(`Monto final del trabajador:  ${nMonto} `);
}

function ejercicio10() {
  //10.	Hacer un algoritmo que diga si un n�mero es par o impar.

  let nNumero = Number.parseInt(prompt("Ingresar numero:"));
  let cMsg = "";

  if (isNaN(nNumero)) {
    return alert("¡ Se ingreso un numero invalido !");
  }

  if (nNumero % 2 == 0) {
    cMsg = "Par";
  } else {
    cMsg = "Impar";
  }

  alert(`El numero ingresado es: ${cMsg}`);
}

function ejercicio11() {
  //11.	Hacer un algoritmo que lea tres n�meros y diga cu�l es el mayor.

  let nNum1 = Number.parseInt(prompt("Ingresar primer numero:"));
  let nNum2 = Number.parseInt(prompt("Ingresar segundo numero:"));
  let nNum3 = Number.parseInt(prompt("Ingresar tercer numero:"));

  let nMayor = 0;

  if (isNaN(nNum1) || isNaN(nNum2) || isNaN(nNum3)) {
    return alert("¡ Se ingreso un numero invalido !");
  }

  if (nNum1 == nNum2 && nNum1 == nNum3) {
    alert("¡ Los tres numeros son iguales !");
  } else {
    if (nNum1 > nNum2) {
      if (nNum1 > nNum3) {
        nMayor = nNum1;
      } else {
        nMayor = nNum3;
      }
    } else {
      if (nNum2 > nNum3) {
        nMayor = nNum2;
      } else {
        nMayor = nNum3;
      }
    }
    alert(`El numero mayor es: ${nMayor}`);
  }
}

function ejercicio12() {
  //12.	Hacer un algoritmo que lea dos n�meros y diga cu�l es el mayor.

  let nNum1 = Number.parseInt(prompt("Ingresar primer numero:"));
  let nNum2 = Number.parseInt(prompt("Ingresar segundo numero:"));
  let nMayor = 0;

  if (isNaN(nNum1) || isNaN(nNum2)) {
    return alert("¡ Se ingreso un numero invalido !");
  }

  if (nNum1 == nNum2) {
    alert("¡ Los numeros ingresados son iguales !");
  } else {
    if (nNum1 > nNum2) {
      nMayor = nNum1;
    } else {
      nMayor = nNum2;
    }
    alert(`El numero mayor es: ${nMayor}`);
  }
}

function ejercicio13() {
  //13.	Hacer un algoritmo que lea una letra y diga si es una vocal

  let cLetra = prompt("Ingresar una letra:").toUpperCase();
  let cMsg = "";

  if (
    cLetra == "A" ||
    cLetra == "E" ||
    cLetra == "I" ||
    cLetra == "O" ||
    cLetra == "U"
  ) {
    cMsg = "Si es vocal";
  } else {
    cMsg = "No es vocal";
  }

  alert(`La letra ingresada:  ${cMsg}`);
}

function ejercicio14() {
  //14.	Hacer un algoritmo que lea un entero positivo del 1 al diez y al 9 y determine si es un n�mero primo.

  let nNumero = Number.parseInt(prompt("Ingresar un numero entre [1-10]:"));
  let div = 1;
  let cont = 0;
  let cMsg = "";

  if (isNaN(nNumero)) {
    return alert("¡ Se ingreso un numero invalido !");
  }

  if (nNumero < 1 || nNumero > 10) {
    alert("El numero ingresado no esta comprendido entre [1-10]");
  } else {
    while (div <= nNumero) {
      if (nNumero % div == 0) {
        cont = cont + 1;
      }
      div = div + 1;
    }

    if (cont == 2) {
      cMsg = " es primo";
    } else {
      cMsg = " no es primo";
    }

    alert(`El numero: ${nNumero},  ${cMsg}`);
  }
}

function ejercicio15() {
  //15.	Hacer un algoritmo que convierta cent�metros a pulgadas y libras a kilogramos.

  let nNum1 = Number.parseFloat(prompt("Ingresar un numero en centimetros:"));
  let nNum2 = Number.parseFloat(prompt("Ingresar un numero en libras:"));

  if (isNaN(nNum1) || isNaN(nNum2)) {
    return alert("¡ Se ingreso un numero invalido !");
  }

  let nNumPul = nNum1 / 2.54;
  let nNumKil = nNum2 * 0.4536;

  alert(`El numero ${nNum1} cm, en pulgadas es: ${nNumPul}\n`+
        `El numero ${nNum2} libras, en kilogramos es: ${nNumKil}`);
}

function ejercicio16() {
  //16.	Hacer un algoritmo que lea un n�mero y seg�n ese n�mero, indique el d�a que corresponde.

  let nNumero = Number.parseInt(prompt("Ingresar un numero entr [1-7]:"));
  let cDia = "";

  if (isNaN(nNumero)) {
    return alert("¡ Se ingreso un numero invalido !");
  }

  if (nNumero <= 0 || nNumero >= 8) {
    alert("Numero ingresado es incorrecto");
  } else {
    switch (nNumero) {
      case 1:
        cDia = "Lunes";
        break;
      case 2:
        cDia = "Martes";
        break;
      case 3:
        cDia = "Miercoles";
        break;
      case 4:
        cDia = "Jueves";
        break;
      case 5:
        cDia = "Viernes";
        break;
      case 6:
        cDia = "Sabado";
        break;
      case 7:
        cDia = "Domingo";
        break;
    }
    alert(`El numero de dia de ${nNumero}, es: ${cDia}`);
  }
}

function ejercicio17() {
  // 17.	Hacer un algoritmo donde se ingrese una hora y nos calcule la hora dentro de un segundo.

  let nHoras = 0;
  let nMinutos = 0;
  let nSegundos = 0;
  let lValido = false;

  do {
    nHoras = Number.parseInt(prompt("Ingresar la hora [1-12]:"));
    nMinutos = Number.parseInt(prompt("Ingresar los minutos [0-60]:"));
    nSegundos = Number.parseInt(prompt("Ingresar los segundos [0-60]:"));
    lValido = true;

    if (isNaN(nHoras) || isNaN(nMinutos) || isNaN(nSegundos)) {
      alert("¡ Se ingreso un numero invalido !");
      lValido = false;
    }

    if (nHoras < 0 || nHoras > 12) {
      alert(`Numero de horas invalido, rango [0-12]`);
      lValido = false;
    }
    if (nMinutos < 0 || nMinutos > 60) {
      alert(`Numero de minutos invalido, rango [0-60]`);
      lValido = false;
    }
    if (nSegundos < 0 || nSegundos > 60) {
      alert(`Numero de segundos invalido, rango [0-60]`);
      lValido = false;
    }
  } while (lValido != true);

  let nTotSegundos = nHoras * 3600 + nMinutos * 60 + nSegundos;
  alert(
    `La hora ${nHoras}:${nMinutos}:${nSegundos} en segundos es: ${nTotSegundos}`
  );
}

function ejercicio18() {
  // 18.	Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribuci�n de CD v�rgenes.
  // Los clientes pueden adquirir los art�culos (supongamos un �nico producto de una �nica marca) por cantidad. Los precios son:
  //	$10. Si se compran unidades separadas hasta 9.
  //	$8. Si se compran entre 10 unidades hasta 99.
  //	$7. Entre 100 y 499 unidades.
  //	$6. Para mas de 500 unidades.
  //  La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un n�mero
  // de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.

  let nCDs = Number.parseInt(prompt("Ingresar numero de CDs a comprar:"));

  if (isNaN(nCDs)) {
    return alert("¡ Se ingreso un numero invalido !");
  }

  if (nCDs <= 9) {
    nPrecio = 10;
  } else {
    if (nCDs <= 99) {
      nPrecio = 8;
    } else {
      if (nCDs <= 499) {
        nPrecio = 7;
      } else {
        nPrecio = 6;
      }
    }
  }

  let nTotal = nCDs * nPrecio;
  let nGanancia = (nTotal * 8.25) / 100;

  alert(`El precio total de la venta  es: ${nTotal}\n`+
        `La ganancia para el vendedor es: ${nGanancia}`);
}

function ejercicio19() {
  //19.	Hacer un algoritmo para una helader�a se tienen 4 tipos de empleados ordenados de la siguiente forma con su n�mero
  // 		identificador y salario diario correspondiente:
  //		 Cajero (56$/d�a).
  //		 Servidor (64$/d�a).
  //		 Preparador de mezclas (80$/d�a).
  //		 Mantenimiento (48$/d�a).
  //		El due�o de la tienda desea tener un programa donde s�lo ingrese dos n�meros enteros que representen al n�mero
  //		identificador del empleado y la cantidad de d�as que trabaj� en la semana (6 d�as m�ximos). Y el programa le mostrar�
  //  	por pantalla la cantidad de dinero que el due�o le debe pagar al empleado que ingres�

  let nTipo = Number.parseInt(
    prompt(
      `Ingresar tipo de empleado:\n`+
      `[1] Cajero\n`+
      `[2] Servidor\n`+
      `[3] Preparador de mezclas\n`+
      `[4] Mantenimiento`
    )
  );

  let nIdentificador = Number.parseInt(
    prompt("Ingresar numero de 2 digitos como identificador de empleado:")
  );
  let nDias = Number.parseInt(prompt("Ingresar numero de dias [6 maximo] trabajados:"));

  if (isNaN(nIdentificador) || isNaN(nDias)) {
    alert("¡ Se ingreso un numero invalido !");
    lValido = false;
  }

  if (nIdentificador <= 9 || nIdentificador >= 100) {
    alert("Numero identificador invalido");
  } else {
    if (nDias > 6) {
      alert("Numero de dias en exceso");
    } else {
      if (nTipo >= 1 && nTipo <= 4) {
        switch (nTipo) {
          case 1:
            nPago = 66;
            break;
          case 2:
            nPago = 64;
            break;
          case 3:
            nPago = 80;
            break;
          case 4:
            nPago = 48;
            break;
        }
        nTotPago = nPago * nDias;
        alert(`Al trabajador se le debe pagar: ${nTotPago}`);
      } else {
        alert(`Tipo de trabajador incorrecto.`);
      }
    }
  }
}

function ejercicio20() {
  // 20.	Hacer un algoritmo que que lea 4 n�meros enteros positivos y verifique y realice las siguientes operaciones:
  //		 �Cu�ntos n�meros son Pares?
  //		 �Cu�l es el mayor de todos?
  //		 Si el tercero es par, calcular el cuadrado del segundo.
  //		 Si el primero es menor que el cuarto, calcular la media de los 4 n�meros.
  //	 	 Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los
  //		 valores 50 y 700. Si cumple se cumple la segunda condici�n, calcular la suma de los 4 n�meros.

  let nNum1 = Number.parseInt(prompt("Ingrese primer número:"));
  let nNum2 = Number.parseInt(prompt("Ingrese segundo número:"));
  let nNum3 = Number.parseInt(prompt("Ingrese tercer número:"));
  let nNum4 = Number.parseInt(prompt("Ingrese cuarto número:"));

  if (isNaN(nNum1) || isNaN(nNum2) || isNaN(nNum3) || isNaN(nNum4)) {
    return alert("¡ Se ingreso un numero invalido !");
  }

  // Cuantos numeros son pares
  let nPares = 0;

  if (nNum1 % 2 == 0) {
    nPares = nPares + 1;
  }
  if (nNum2 % 2 == 0) {
    nPares = nPares + 1;
  }
  if (nNum3 % 2 == 0) {
    nPares = nPares + 1;
  }
  if (nNum4 % 2 == 0) {
    nPares = nPares + 1;
  }
  alert(`Los numeros pares son: ${nPares}`);

  // Cual es mayor de todos
  let nMayor = 0;

  if (nNum1 > nNum2) {
    if (nNum1 > nNum3) {
      if (nNum1 > nNum4) {
        nMayor = nNum1;
      } else {
        nMayor = nNum4;
      }
    } else {
      if (nNum3 > nNum4) {
        nMayor = nNum3;
      } else {
        nMayor = nNum4;
      }
    }
  } else {
    if (nNum2 > nNum3) {
      if (nNum2 > nNum4) {
        nMayor = nNum2;
      } else {
        nMayor = nNum4;
      }
    } else {
      if (nNum3 > nNum4) {
        nMayor = nNum3;
      } else {
        nMayor = nNum4;
      }
    }
  }
  alert(`El numero mayor es: ${nMayor}`);

  // Si el tercero es par, calcular el cuadrado del segundo.
  if (nNum3 % 2 == 0) {
    let nCuadrado = nNum2 * nNum2;
    alert(`El cuadrado del segundo numero es: ${nCuadrado}`);
  } else {
    alert(`El tercer numero no es par`);
  }

  // Si el primero es menor que el cuarto, calcular la media de los 4 n�meros.

  if (nNum1 < nNum4) {
    let nMedia = (nNum1 + nNum2 + nNum3 + nNum4) / 4;
    alert(`La media de los cuatro numeros es: ${nMedia}`);
  } else {
    alert(`El primer numero no es menor que el cuarto`);
  }

  // Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los
  // valores 50 y 700. Si cumple se cumple la segunda condici�n, calcular la suma de los 4 n�meros.

  if (nNum2 > nNum3) {
    if (nNum3 >= 50 && nNum3 <= 700) {
      let nSuma = nNum1 + nNum2 + nNum3 + nNum4;
      alert(`La suma de los cuatro numeros es: ${nSuma}`);
    } else {
      alert(`No se cumple la condicion establecida`);
    }
  } else {
    alert(`No se cumple la condicion establecida`);
  }
}

function ejercicio21() {
  //21.	Hacer un algoritmo que permita calcular el factorial de un n�mero.

  let nNum = Number.parseInt(prompt("Ingresar un numero:"));

  if (isNaN(nNum)) {
    return alert("¡ Se ingreso un numero invalido !");
  }

  let nFact = 1;
  let nCont = 0;

  while (nCont < nNum) {
    nCont = nCont + 1;
    nFact = nFact * nCont;
  }
  alert(`El factorial de ${nNum}, es: ${nFact}`);
}

function ejercicio22() {
  // 22.	Hacer un algoritmo para calcular la suma de los n primeros n�meros.

  let nNum = Number.parseInt(prompt("Ingresar un numero:"));

  if (isNaN(nNum)) {
    return alert("¡ Se ingreso un numero invalido !");
  }

  let nCont = 1;
  let nSuma = 0;

  while (nCont <= nNum) {
    nSuma = nSuma + nCont;
    nCont = nCont + 1;
  }
  alert(`La suma total es: ${nSuma}`);
}

function ejercicio23() {
  // 23.	Hacer un algoritmo en Pseint para calcular la suma de los n�meros
  //        impares menores o iguales a n

  let nNum = Number.parseInt(prompt("Ingresar un numero:"));

  if (isNaN(nNum)) {
    return alert("¡ Se ingreso un numero invalido !");
  }

  let nCont = 1;
  let nSuma = 0;

  while (nCont <= nNum) {
    if (nCont % 2 != 0) {
      nSuma = nSuma + nCont;
    }
    nCont = nCont + 1;
  }

  alert(`La suma de numeros impares es: ${nSuma}`);
}

function ejercicio24() {
  // 24.	Hacer un algoritmo para realizar la suma de todos los números pares hasta el 1000.

  let nTope = 1000;
  let nCont = 1;
  let nSuma = 0;

  while (nCont <= nTope) {
    if (nCont % 2 == 0) {
      nSuma = nSuma + nCont;
    }
    nCont = nCont + 1;
  }
  alert(`La suma de todos los numeros pares es: ${nSuma}`);
}

function ejercicio25() {
  // 25.	Hacer un algoritmo para calcular el factorial de un n�mero de una forma distinta.

  let nNum = Number.parseInt(prompt("Ingresar un numero:"));

  if (isNaN(nNum)) {
    return alert("¡ Se ingreso un numero invalido !");
  }

  let nFact = 1;
  let nCont = 0;

  do {
    nCont = nCont + 1;
    nFact = nFact * nCont;
  } while (nCont < nNum);

  alert(`El factorial de ${nNum} es: ${nFact}`);
}

function ejercicio26() {
  // 26.	Hacer un algoritmo para calcular el resto y cociente por medio de restas sucesivas.

  let nDividendo = Number.parseInt(prompt("Ingrese el numero dividendo:"));
  let nDivisor = Number.parseInt(prompt("Ingrese el numero divisor:"));

  if (isNaN(nDividendo) || isNaN(nDivisor)) {
    return alert("¡ Se ingreso un numero invalido !");
  }

  let nResto = nDividendo;
  let nCociente = 0;

  while (nResto >= nDivisor) {
    nResto = nResto - nDivisor;
    nCociente = nCociente + 1;
  }

  alert(`El cociente es: ${nCociente}\n`+
        `El resto es: ${nResto}`);
}

function ejercicio27() {
  // 27.	Hacer un algoritmo para determinar la media de una lista indefinida de n�meros positivos,
  // se debe acabar el programa al ingresar un n�mero negativo.

  let nCont = -1;
  let nSuma = 0;
  let nNum = 0;

  do {
    nCont = nCont + 1;
    nSuma = nSuma + nNum;
    nNum = Number.parseInt(prompt("Ingrese un numero:"));

    if (isNaN(nNum)) {
      alert("¡ Se ingreso un numero invalido !");
      nNum = 0;
      nCont = nCont - 1;
    }
  } while (nNum >= 0);

  let nPromedio = nSuma / nCont;
  alert(`La media de los numeros ingresados es: ${nPromedio}`);
}

function ejercicio28() {
  // 28.	Hacer un algoritmo para calcular la suma de los primeros cien n�meros con un ciclo repetir.

  let nNumero = 100;
  let nCont = 0;
  let nSuma = 0;

  do {
    nCont = nCont + 1;
    nSuma = nSuma + nCont;
  } while (nCont < nNumero);
  alert(`La suma total de numeros es: ${nSuma}`);
}

function ejercicio29() {
  // 29.	Hacer un algoritmo para calcular la suma de los primeros cien n�meros con un ciclo mientras.

  let nNumero = 100;
  let nCont = 0;
  let nSuma = 0;

  while (nCont < nNumero) {
    nCont = nCont + 1;
    nSuma = nSuma + nCont;
  }
  alert(`La suma total de numeros es: ${nSuma}`);
}

function ejercicio30() {
  //30.	Hacer un algoritmo para calcular la suma de los primeros cien números con un ciclo para.

  let nNumero = 100;
  let nSuma = 0;

  for (nCont = 0; nCont <= nNumero; nCont++) {
    nSuma = nSuma + nCont;
  }

  alert(`La suma total de numeros es: ${nSuma}`);
}

function ejercicio31() {
  // 31.	Hacer un algoritmo parar calcular la media de los n�meros pares e impares, s�lo se ingresar� diez n�meros.

  let nNumero = 0;
  let nSumPar = 0;
  let nSumImp = 0;
  let nConPar = 0;
  let nConImp = 0;
  let nCont = 0;
  let nSuma = 0;

  do {
    nCont = nCont + 1;
    nSuma = nSuma + nNumero;

    nNumero = Number.parseInt(
      prompt(`Ingrese un numero valido [${nCont}/10]:`)
    );

    if (isNaN(nNumero)) {
      return alert("¡ Se ingreso un numero invalido !");
    }

    if (nNumero % 2 == 0) {
      nSumPar = nSumPar + nNumero;
      nConPar = nConPar + 1;
    } else {
      nSumImp = nSumImp + nNumero;
      nConImp = nConImp + 1;
    }
  } while (nCont < 10);

  let nPromPar = nSumPar / nConPar;
  let nPromImp = nSumImp / nConImp;

  alert(`La media de los numeros pares es: ${nPromPar}\n`+
        `La media de los numeros impares es: ${nPromImp}`);
}

function ejercicio32() {
  // 32.	Se quiere saber cu�l es la ciudad con la poblaci�n de m�s personas,
  // 		son tres provincias y once ciudades, hacer un algoritmo en Pseint
  //		que nos permita saber eso. (NO HAY DATOS SUFICIENTES)

  alert(`! No hay datos suficientes !`);
}

function ejercicio33() {
  //33.	Hacer un algoritmo que permita al usuario continuar con el programa.

  let nCont = 0;
  let cOpc = "";

  do {
    nCont = nCont + 1;
    alert(`Proceso: ${nCont}`);
    cOpc = prompt(`Continuar con el programa Si[S] o Mo[N]`).toUpperCase();
  } while (cOpc != "N");

  alert(`Salio del programa !`);
}

function ejercicio34() {

  let cTabla  = ``;

  for (let nTabla = 1; nTabla <= 9; nTabla++) {
    cTabla = `Tabla del ${nTabla}:\n--------------------\n`;
    for (nNum = 1; nNum <= 12; nNum++) {
      cTabla = cTabla + `${nTabla} * ${nNum} = ${nTabla * nNum}\n`;
      // alert(`${nTabla} * ${nNum} = ${nTabla * nNum}`) ;
    }
    alert(cTabla);
  }
}

function ejercicio35() {
  // 35.	Hacer un algoritmo que nos permita saber cu�l es el n�mero mayor y menor,
  // 		se debe ingresar s�lo veinte n�meros. i

  let nNumero = 0;
  let nCont = 0;
  let nMayor = 0;
  let nMenor = 0;

  do {
    nCont = nCont + 1;
    nNumero = Number.parseInt(
      prompt(`Ingrese un numero valido [${nCont}/20]:`)
    );

    if (isNaN(nNumero)) {
      return alert("¡ Se ingreso un numero invalido !");
    }

    if (nCont == 1) {
      nMayor = nNumero;
      nMenor = nNumero;
    }

    if (nNumero > nMayor) {
      nMayor = nNumero;
    }
    if (nNumero < nMenor) {
      nMenor = nNumero;
    }
  } while (nCont < 20);

  alert(`El numero mayor es: ${nMayor}\n`+
        `El numero menor es: ${nMenor}`);
}

function ejercicio36() {
  // 36.	Hacer un algoritmo para calcular la serie de Fibonacc.

  let nNumero = Number.parseInt(prompt(`Ingrese un numero:`));
  if (isNaN(nNumero)) {
    return alert("¡ Se ingreso un numero invalido !");
  }

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
  alert(cSerie);
}

function ejercicio37() {
  // 37.	Hacer un algoritmo para conseguir el M.C.D de un n�mero por medio del algoritmo de Euclides.

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

function ejercicio38() {
  // 38.	Hacer un algoritmo que nos permita saber si un n�mero es un n�mero perfecto.

  let nNumero = Number.parseInt(prompt(`Ingresar un numero:`));

  if (isNaN(nNumero)) {
    return alert("¡ Se ingreso un numero invalido !");
  }

  let nNum = 2;
  let nPerfecto = 0;

  while (nNum <= nNumero) {
    if (nNumero % nNum == 0) {
      nPerfecto = nPerfecto + nNumero / nNum;
    }
    nNum = nNum + 1;
  }

  if (nPerfecto == nNumero) {
    alert(`El numero ${nNumero}, es un numero perfecto`);
  } else {
    alert(`El numero ${nNumero}, no es un numero perfecto`);
  }
}

function ejercicio39() {
    // 39.	Hacer un algoritmo en Pseint que cumpla con la aproximaci�n del n�mero pi con la serie de Gregory-Leibniz.
    //		La formula que se debe aplicar es:
    //		Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...


    let nNumero = Number.parseInt(prompt(`Ingresar un numero de veces:`));

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


function ejercicio40() {
    // 40.	Hacer un algoritmo que cumpla con la aproximaci�n del n�mero pi con la serie de Nilakantha.
	//	 	La formula que se debe aplicar es:
	// 		Pi = = 3 + 4/(234) - 4/(456) + 4/(678) - 4/(8910) + 4/(101112) - 4/(121314) ...

    let nNumero = Number.parseInt(prompt(`Ingresar un numero de veces:`));

    if (isNaN(nNumero)) {
        return alert("¡ Se ingreso un numero invalido !");
    }

	let nPI = 0;
	let n1 = 2;
	let n2 = 3;
	let n3 = 4;
	let n4 = 5;
	let n5 = 6;
				
    for (p=1; p<= nNumero; p++) {
        nPI = nPI + (4/(n1 * n2 * n3)) - (4/(n3 * n4 * n5));
		n1 = n1 + 4;
		n2 = n2 + 4;
		n3 = n3 + 4;
		n4 = n4 + 4;
		n5 = n5 + 4;
    }
    alert(`El numero pi es: ${3 + nPI}`);	
}