# Resolver los siguientes ejercicios
Antony Castro Guerrero
1. Hacer un algoritmo en Pseint que lea un número por el teclado y determinar si tiene tres dígitos.
Proceso Lecturade3digitos
	Escribir "Digite un numero"
	Leer Numero1
	Si Numero1 > 99 y numero1 < 1000
		Escribir "El digito ingresado tiene 3 digitos"
	SiNo
		Si Numero1 < -99 y numero1 >-1000
			Escribir "El digito ingresado tiene 3 digitos"
		SiNo
			Escribir "El digito ingresado no tiene 3 digitos"
		FinSi
	FinSi
FinProceso

2. Hacer un algoritmo en Pseint que lea un número entero por el teclado y determinar si es negativo.
Proceso Pregunta2
	Definir numero1 Como Entero
	Escribir "Digite un numero" 
	Leer numero1
	Si numero1>0 Entonces
		Escribir "El numero ingresado  ", numero1, "  No es negativo"
	SiNo
		Escribir "El numero ingresado  ", Numero1,"  Es negativo"
	FinSi
FinProceso


3. Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.
Proceso Pregunta3
	Definir numero1, ultimoDigito Como entero	
	Escribir "Digite un número"
	Leer numero1
	
	ultimoDigito = numero1 MOD 10
	Si ultimoDigito = 4 Entonces
		Escribir "El número: " , numero1, " termina en 4"
	SiNo
		Escribir "El número: " , numero1, " no termina en 4"
	FinSi
	
	
FinProceso


4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
Proceso Pregunta4
	Definir numero1, numero2, numero3, numMenor, numMedio, numMayor Como Entero
	Escribir "Ingrese el primer numero"
	Leer numero1
	Escribir "Ingrese el segundo numero"
	Leer numero2	
	Escribir "Ingrese el tercer numero"
	Leer numero3
	
	Si numero1 < numero2 y numero1 < numero3
		numMenor = numero1
		Si numero2 < numero3
			numMayor = numero3
			numMedio = numero2
		SiNo
			numMedio=numero3
			numMayor=numero2
		FinSi
	FinSi
	Si numero2 < numero1 y numero2 < numero3
		numMenor = numero2
		Si numero1 < numero3
			numMayor = numero3
			numMedio = numero1
		SiNo
			numMedio=numero3
			numMayor=numero1
		FinSi
	FinSi
	Si numero3 < numero2 y numero2 < numero1
		numMenor = numero3
		Si numero2 < numero1
			numMayor = numero1
			numMedio = numero2
		SiNo
			numMedio=numero1
			numMayor=numero2
		FinSi
	FinSi
Escribir "El numero mayor es ", numMayor
Escribir "El numero medio es ", numMedio
Escribir "El numero menor es ", numMenor

FinProceso

5. Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.

Proceso pregunta5
	Definir desc1, desc2, desc3, precio, cant, total Como Entero
	Escribir "Digite la cantidad de zapatos que desea comprar"
	Leer cant
	
	precio = 80
	desc1 = precio * 0.1
	desc2 = precio * 0.2
	desc3 = precio * 0.4
	
	Si cant < 10 Entonces
		total = cant * precio
		Escribir "La cantidad total a pagar es de ", total, " $"
	FinSi
	Si cant >= 10 y cant < 20 Entonces
		total = cant * (precio - desc1)
		Escribir "La cantidad total a pagar es de ", total, " $"
	FinSi
	Si cant >= 20 y cant < 30 Entonces
		total = cant * (precio - desc2)
		Escribir "La cantidad total a pagar es de ", total, " $"
	FinSi
	Si cant >= 30 Entonces
		total = cant * (precio - desc3)
		Escribir "La cantidad total a pagar es de ", total, " $"
	FinSi
FinProceso

6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

Proceso pregunta6
	Definir sueldoBasico, sueldoExtra, horas, pago Como entero	
	Escribir "Digite la cantidad de horas trabajadas esta semana"
	Leer horas
	
	sueldoBasico = 20 * horas
	sueldoExtra = 25 * (horas - 40) + 800
	
	Si horas < 40 Entonces
		pago = sueldoBasico		
	FinSi
	Si horas > 40 Entonces
		pago = sueldoExtra
	FinSi
	Escribir "La cantidad de sueldo que se pagara es de ", pago," $"
FinProceso


7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:

   Tipo A 10% de descuento
   Tipo B 15% de descuento
   Tipo C 20% de descuento

Proceso Pregunta7
	Definir tipoMembresia Como Caracter
	Definir descuento, precioTotal, precioFinal Como Real
	Escribir "Digite el tipo de membresia que tiene: A, B, C"
	Leer tipoMembresia
	Escribir "Digite el monto total a pagar"
	Leer precioTotal
	
	Segun tipoMembresia Hacer
		Caso "A":
			descuento = precioTotal * 0.1
			precioFinal = precioTotal - descuento
			Escribir "El tipo de membresia del cliente es ", tipoMembresia
			Escribir "El precio final a pagar incluyendo descuento sera de ", precioFinal," $"
		Caso "B":
			descuento = precioTotal * 0.15
			precioFinal = precioTotal - descuento
			Escribir "El tipo de membresia del cliente es ", tipoMembresia
			Escribir "El precio final a pagar incluyendo descuento sera de ", precioFinal," $"
		Caso "C":
			descuento = precioTotal * 0.2
			precioFinal = precioTotal - descuento
			Escribir "El tipo de membresia del cliente es ", tipoMembresia
			Escribir "El precio final a pagar incluyendo descuento sera de ", precioFinal," $"
		De Otro Modo:
			Escribir "El precio total a pagar sera ", precioTotal," porque no incluye descuentos"
	Fin Segun

8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.

Proceso Pregunta8
	Definir nota1, nota2, nota3, promedio Como Real
	Escribir "Digite la nota numero 1"
	Leer nota1
	Escribir "Digite la nota numero 2"
	Leer nota2
	Escribir "Digite la nota numero 3"
	Leer nota3
	promedio = (nota1 + nota2 + nota3)/3
	
	Si promedio > 10.5 Entonces
		Escribir "El estudiante aprobo la materia con ", promedio
	SiNo
		Escribir "El estudiante desaprobo la materia con ", promedio
	FinSi
	
FinProceso

9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.

Proceso pregunta9
	Definir sueldo, aumento, nuevoSueldo Como Real	
	Escribir "Digitar el sueldo del trabajador"
	Leer sueldo
	
	Si sueldo > 2000
		nuevoSueldo = sueldo + (sueldo * 0.05)		
		Escribir "El trabajador tuvo un aumento del 5%"
	SiNo
		nuevoSueldo = sueldo + (sueldo * 0.1)		
		Escribir "El trabajador tuvo un aumento del 10%"
	FinSi
	Escribir "EL nuevo sueldo del trabajador es ", nuevoSueldo, "$"
FinProceso

10. Hacer un algoritmo en Pseint que diga si un número es par o impar.

Proceso pregunta10
	Definir numerito Como Real
	Escribir "Digite un numero"
	Leer numerito
	
	Si numerito mod 2 = 0 Entonces
		Escribir "EL numero ingresado: ", numerito " es Par"
	SiNo
		Escribir "El numero ingresado: ", numerito " es impar"
	FinSi
FinProceso

11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.

Proceso Pregunta11
	Escribir "Escribir el primero numero"
	Leer Numero1
	Escribir "Escribir el segundo numero"
	Leer Numero2
	Escribir "Escribir el tercer numero"
	Leer Numero3
	Si Numero1 > Numero2 y Numero1 > Numero3
		Escribir"Numero1 Es el numero mayor de los tres numeros"
	SiNo
		SI Numero2 > Numero1 y Numero2 > Numero3
			Escribir "Numero2 Es el numero mayor de los tres numeros"
		SiNo
			Si Numero3 > Numero1 y Numero3 > Numero2
				Escribir "Numero3 Es el numero mayor de los tres numeros"			
			SiNo
				Si numero1 == numero2 y numero3 == numero2
							Escribir "Todos los numeros son iguales"
						SiNo
							Si numero1 == numero2 y numero3 < numero2
								Escribir "Numero1 y Numero2 son los numeros mayores de los tres numeros"
							SiNo
								Si numero2 == numero3 y numero1 < numero2
								Escribir "Numero3 y Numero2 son los numeros mayores de los tres numeros"
							SiNo
								Si numero1 == numero3 y numero1 < numero2
								Escribir "Numero2 Es el numero mayor de los tres numeros"
							FinSi
						FinSi
					FinSi
				FinSi
			FinSi			
		FinSi
	FinSi

FinProceso

12. Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.

Proceso Pregunta12
	
	Escribir "Escribir el primero numero"
	Leer Numero1
	Escribir "Escribir el segundo numero"
	Leer Numero2
	Si Numero1 > Numero2 
		Escribir "El Numero 1 es el numero mayor"
	SiNo
		Si Numero2 > Numero1
			Escribir "El Numero 2 es el numero mayor"
		SiNo
				Escribir "Ambos numeros son iguales"
			FinSi
		FinSi
FinProceso


13. Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.

Proceso Pregunta13
	Escribir "Ingrese una letra"
	Leer Letra
	Si Letra == "a" o Letra == "e" o Letra == "i" o Letra == "o" o Letra == "u" o Letra == "A" o Letra == "E" o Letra == "I" o Letra == "O" o Letra == "U"
		Escribir "La letra ingresada es una vocal"
		Sino
			Escribir "No es una vocal"
	FinSi
FinProceso

14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.

Proceso Pregunta14
	Definir numerito, divisor, contador Como Entero
	Escribir "Ingresar un numero del 1 al 10"
	Leer numerito
	Si numerito <= 10 y numerito >= 1	Entonces
		definir esPrimo Como Logico
		esPrimo = Verdadero 
		Si numerito = 1 Entonces
			esPrimo = Falso
		SiNo
			Para divisor = 2 hasta numerito/2 Con Paso 1 Hacer
				Si numerito MOD divisor = 0 Entonces
					esPrimo = Falso
				FinSi
			FinPara
		FinSi
		Si esPrimo Entonces
			Escribir "El numero escrito es PRIMO: ", numerito
		SiNo
			Escribir "El numero no es PRIMO: ", numerito
		FinSi
	SiNo
		Escribir "El numero ingresado esta fuera del limite permitido"
	FinSi
FinProceso

15. Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.

Proceso Pregunta15
	Definir respuesta, numero1, operacion Como Real
	Escribir "Digite una medida en centimetros o libras"
	Leer Numero1
	Escribir "Digita la opcion: 1 para convertir centimetros a pulgadas, 2 para convertir libras a kilogramos" 
	Leer operacion
	
	Segun operacion Hacer
		1: 
			respuesta = numero1 / 2.54
		2: 
			respuesta = numero1 * 0.453592
		
		De Otro Modo:
			Escribir "Operacion no valida"
		
	FinSegun
	Si operacion = 1
		Escribir "La respuesta es ", respuesta, " pulgadas"
		Si operacion = 2
			Escribir "La respuesta es ", respuesta, " kilogramos"
		FinSi
	FinSi
FinProceso

16. Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.

Proceso Pregunta16
	Escribir "Escribir un numero del 1 al 7, sabiendo que: el 1 es igual a lunes y sucesivamente ira cambiando"
	leer numero1
	
	Segun numero1 Hacer
		1:
			Escribir "lunes"
		2:
			Escribir "martes"
		3:
			Escribir "miercoles"
		4:
			Escribir "jueves"
		5:
			Escribir "viernes"
		6:
			Escribir "sabado"
		7:
			Escribir "domingos"
			
		De Otro Modo:
			Escribir "Solo digite del 1 al 7, porque solo tenemos 7 días en nuestros calendarios"
	Fin Segun
	
FinProceso

17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.

Proceso Pregunta17
	Definir horas, minutos, segundos Como Entero
	Definir valorescorrectos Como Logico
	
	valorescorrectos=Verdadero
	Escribir Sin Saltar "Digite la hora (0 y 23)"
	leer horas
	Escribir Sin Saltar "Digite los minutos (entre 0 y 59)"
	leer minutos
	Escribir Sin Saltar "Digite los segundos (0 y 59)"
	leer segundos
	
	Si horas < 0 O horas > 23
		Escribir "Error al digitar la hora, debe ser un valor entre 0 y 23"
		valorescorrectos=Falso	
	FinSi
	Si minutos < 0 O minutos > 59
		Escribir "Error al digitar los minutos, debe ser un valor entre 0 y 59"
		valorescorrectos=Falso	
	FinSi
	Si segundos < 0 O segundos > 59
		Escribir "Error al digitar los segundos, debe ser un valor entre 0 y 59"
		valorescorrectos=Falso
	FinSi
		Si valorescorrectos
			Mientras horas <= 23
				Mientras minutos <= 59
					Mientras segundos < 59
						Limpiar Pantalla
						Si horas>9
							Escribir Sin Saltar"La hora digitada es: " , horas
						SiNo
							Escribir Sin Saltar"La hora digitada es: 0" , horas
						FinSi
						Si minutos > 9
							Escribir Sin Saltar ":", minutos
						SiNo
							Escribir Sin Saltar ":0", minutos 
						FinSi
						Si (segundos>9)
							Escribir Sin Saltar ":", segundos
						SiNo
							Escribir Sin Saltar ":0", segundos
						FinSi
						
						segundos = segundos + 1
						esperar 1 segundos
					FinMientras
					segundos=0
					minutos = minutos + 1
				FinMientras
				minutos=0
				horas = horas + 1
				si horas = 24
					horas = 0
				FinSi
			FinMientras
		FinSi
	FinProceso


18. Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:

    $10. Si se compran unidades separadas hasta 9.

    $8. Si se compran entre 10 unidades hasta 99.

    $7. Entre 100 y 499 unidades.

    $6. Para mas de 500 unidades.

    La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.

Proceso pregunta18
	Definir ganancia, precio, preciototal, cantidad Como Real
	Escribir "Digite el numero de Unidades de Cds a comprar"
	Leer cantidad
	
	Si cantidad < 10
		precio = 10
		preciototal = cantidad * precio
	SiNo
		Si cantidad > 10 y cantidad < 99
			precio = 8
			preciototal = cantidad * precio
			
		SiNo
			Si cantidad >= 100 y cantidad <= 499
				precio = 7
				preciototal = cantidad * precio
			SiNo
				Si cantidad >= 500
					precio = 6
					preciototal = cantidad * precio
				FinSi
			FinSi
		FinSi
	FinSi
	
	ganancia = preciototal * 0.0825
	
	Escribir "El precio total a pagar con el nuevo precio de ", precio, " $ sera la cantidad de ", preciototal, " $"
	Escribir "La ganancia para el vendedor sera de ", ganancia, " $"
FinProceso

19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:

    Cajero (56$/día).

    Servidor (64$/día).

    Preparador de mezclas (80$/día).

    Mantenimiento (48$/día).

    El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

    Proceso pregunta19
	Escribir "Escribir el codigo del empleado, donde 1:Cajero (56$/día) y 2:Servidor (64$/día), 3:Preparador de mezclas (80$/día), 4:Mantenimiento (48$/día)"
	Leer operacion
	Escribir "Numero de dias trabajados durante la semana"
	Leer Numero2
	si numero2 > 6
		Escribir "El numero de dias no es valido"
	SiNo
		
	Segun operacion Hacer
		1: 
			respuesta = Numero2 * 56
		2: 
			respuesta = Numero2 * 64
			
		3: 
			respuesta = Numero2 * 80
		4: 
			respuesta = Numero2 * 48
		De Otro Modo:
			Escribir "Operacion no valida"
	FinSegun
FinSi
Escribir "La respuesta es ", respuesta "$" 
Si operacion = 1 escribir "Debe Pagar a su empleado Cajero"
FinSi
Si operacion = 2 escribir "Debe Pagar a su empleado Servidor"
FinSi
Si operacion = 3 escribir "Debe Pagar a su empleado Preparador"
FinSi
Si operacion = 4 escribir "Debe Pagar a su empleado Mantenimiento"
FinSi

FinProceso

20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

    ¿Cuántos números son Pares?

    ¿Cuál es el mayor de todos?

    Si el tercero es par, calcular el cuadrado del segundo.

    Si el primero es menor que el cuarto, calcular la media de los 4 números.

    Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

Proceso pregunta20
	Definir num1, num2, num3, num4, pares, mayorcito, cuadrado, media, suma Como Real
	Escribir "Ingrese el primer numero"
	Leer num1
	Escribir "Ingrese el segundo numero"
	Leer num2
	Escribir "Ingrese el tercero numero"
	Leer num3
	Escribir "Ingrese el cuarto numero"
	Leer num4
	
	pares = 0
	
	Si num1 Mod 2 = 0 Entonces
		pares = pares + 1
	FinSi
	Si num2 Mod 2 = 0 Entonces
		pares = pares + 1
	FinSi
	Si num3 Mod 2 = 0 Entonces
		pares = pares + 1
	FinSi
	Si num4 Mod 2 = 0 Entonces
		pares = pares + 1
	FinSi
	Escribir "La cantidad de numeros pares es de ", pares
	
	mayorcito = num1
	si num2 > mayorcito Entonces
		mayorcito = num2
	FinSi
	si num3 > mayorcito Entonces
		mayorcito = num3
	FinSi
	si num4 > mayorcito Entonces
		mayorcito = num4
	FinSi
	Escribir "El numero mayor es ", mayorcito
	Si num3 mod 2 = 0 Entonces
		cuadrado = num2 ^ 2
		Escribir "El cuadrado del segundo numero es ", cuadrado
	FinSi
	Si num1 < num4
		media = (num1+num2+num3+num4)/4
		Escribir "La media de los 4 numeros es ", media
	FinSi
	
	Si num2>num3 y num3>50 y num3<700
		suma = num1 + num2 + num3 + num4
		
		Escribir "La suma de los 4 numeros es ", suma
	FinSi
	
FinProceso

21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.

Proceso pregunta21
	Definir numero Como Entero
	definir factorial Como Real
	Escribir "Ingrese un numero para calcular su factorial"
	Leer numero
	
	factorial = 1
	Si numero >= 0 Entonces
		Para i = 1 Hasta numero Hacer
			factorial = factorial * i
		FinPara
		Escribir "EL factorial de ", numero," es: ", factorial
	Sino 
		Escribir "No se puede calcular el factorial de un numero negativo"
	FinSi	
FinProceso

22. Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.

Proceso pregunta22
	Definir n, suma Como Entero
	Escribir "Ingrese el valor de n:"
	Leer n
	suma = (n * (n+1))/2
	Escribir "La suma de los primeros numeros es de: ", suma
	
FinProceso

23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.

Proceso pregunta23
	Definir n, suma Como Entero
	Escribir "Ingrese el valor de n:" 
	Leer n
	suma = 0
	Si n >= 1 Entonces
		Para i = 1 Hasta n Hacer
			Si i mod 2 = 1	Entonces
				suma = suma + i
			FinSi
			FinPara
			Escribir "La suma de los numeros impares menores o iguales a ", n, " es: ", suma
		SiNo
			Escribir "El numero ingresado debe ser mayor o igual a 1."
	FinSi
FinProceso

24. Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.

Proceso pregunta24
	Definir suma, numero Como Entero
	suma = 0
	Para numero <- 2 hasta 1000 con paso 2 Hacer
			suma = suma + numero
		FinPara
		Escribir "La suma de los numeros pares hasta el 1000 es: ", suma 	
FinProceso

25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.

Proceso pregunta25
	Definir numero, factorialResult Como Entero
	Escribir "Ingrese un numero para calcular su factorial de forma recursiva:"
	Leer numero
	Si numero >= 0 Entonces
		factorialResult <- Factorial(numero)
		Escribir "EL factorial de ", numero, " es " , factorialResult
	Sino
		Escribir "No se puede calcular el factorial de un numero negativo"
	FinSi
FinProceso
Funcion FactorialReturn <- Factorial(numero)
	Si numero = 0 Entonces
		FactorialReturn <- 1
	SiNo
		FactorialReturn <- numero * Factorial(numero -1)
	FinSi
FinFuncion

26. Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.

Proceso pregunta26
	Definir dividendo, divisor, cociente, residuo Como Entero
	Escribir "Ingrese el dividendo"
	Leer dividendo
	Escribir "Ingrese el divisor"
	Leer divisor
	
	cociente = 0
	residuo = dividendo
	
	Mientras residuo >= divisor Hacer
		Escribir residuo, ' - ', divisor
		residuo = residuo - divisor
		
		cociente = cociente + 1
		Escribir "Cociente: ", cociente
	FinMientras
	
	Escribir "El cociente es: ", cociente
	Escribir "El residuo es: ", residuo
	
FinProceso

27. Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.

Proceso pregunta27
	Definir numero, suma, contador Como Real
	suma <- 0
	contador <- 0
	Escribir "Ingresar numeros positivos para calcular la media, ingrese un numero negativo para finalizar"
	Mientras numero >= 0 Hacer
		Escribir "Ingrese un numero"
		Leer numero
		Si numero < 0 Entonces
			Si contador > 0 Entonces
			Escribir "La media de los numeros positivos ingresados es: ", suma / contador
			SiNo
				Escribir "Nose ingresaron numeros positivos"
			FinSi
		SiNo
		suma <- suma + numero
		contador <- contador + 1
		FinSi
	FinMientras
FinProceso

28. Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo repetir.

Proceso pregunta28
	Definir suma, i Como Entero
	suma = 0
	i = 0
	
	Repetir
		suma = suma + i
		i = i + 1
	Hasta Que i > 100
	Escribir "La suma de los primeros cien numeros es de: ", suma
FinProceso

29. Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo mientras.

Proceso pregunta29
	Definir suma Como Entero
	suma=0
	i=0
	Mientras i<= 100 Hacer
		suma = suma + i
		i=i+1
	Fin Mientras
	Escribir "La suma de los primeros cien numeros es de: ", suma
FinProceso

30. Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo para.

Proceso pregunta30
	Definir suma Como Entero
	
	suma = 0
	
	Para i <- 1 Hasta 100 Con Paso 1 Hacer
		suma = suma + i
	Fin Para
	Escribir "La suma de los primeros 100 numeros es de: ", suma
FinProceso

31. Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.
Proceso pregunta31
	Definir num, suma_pares, suma_impares, contador_par, contador_impar, media_par, media_impar Como Real
	Para i <- 1 Hasta 10 Con Paso 1 Hacer
		Escribir "Ingrese el numero: ", i, " :"
		Leer num
		Si num mod 2 = 0 Entonces
			suma_pares = suma_pares + num
			contador_par = contador_par + 1
		SiNo
			suma_impares = suma_impares + num
			contador_impar = contador_impar + 1
		FinSi		
	Fin Para
	Si contador_par > 0 Entonces
		media_par = suma_pares / contador_par
		Escribir "La media de los numeros pares es de: ", media_par
	SiNo
		Escribir "No hay numeros pares"		
	FinSi
	Si contador_impar > 0 Entonces
		media_impar = suma_impares / contador_impar
		Escribir "La media de los numeros impares es de: " , media_impar
	SiNo
		Escribir "No hay numeros imapres"
	FinSi
FinProceso

32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en Pseint que nos permita saber eso. (NO HAY DATOS SUFICIENTES)


33. Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.

Proceso pregunta33
	Definir respuesta Como Caracter
	respuesta = "S"
	
	Mientras respuesta = "S" Hacer
		Escribir "¿Desea continuar con el programa? Digite S/N"
		Leer respuesta
		
	Fin Mientras
	Escribir "Sesion terminada"; 
FinProceso

34. Hacer un algoritmo en Pseint que imprima la tabla de multiplicar de los números del uno nueve.

Proceso pregunta34
	Definir multiplicando, multiplicador, resultado Como Entero
	Para multiplicando = 1 hasta 9 Hacer
		Escribir "Tabla de multiplicar del: ", multiplicando
		Para multiplicador = 1 hasta 10 Hacer
			resultado = multiplicando * multiplicador
			Escribir multiplicando, " x ", multiplicador, " = ", resultado
		FinPara
		Escribir " . "
	FinPara
FinProceso


35. Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

Proceso pregunta35
	Definir i, t, ns, may, men Como Entero
	may <- 0
	men <- 0
	i <- 1
	Escribir "Ingrese la cantidad de numeros"
	Leer ns
	Mientras i<=ns Hacer
	Escribir "Ingrese el numero: ", i
		leer t
		Si i = 1 Entonces
			may <- t
			men <- t
		SiNo
			Si t>may Entonces
				may <- t				
			FinSi
			Si t<men Entonces
				men <- t
			FinSi
		FinSi
		i<-i+1
	FinMientras
	Escribir "El numero menor ingresado es: " men
	Escribir "El numero mayor ingresado es: " may
	
FinProceso


36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacc.

Proceso pregunta36
	Definir n, i, fib1, fib2, fib_actual como Real
	Escribir "Ingrese el numero de terminos"
	leer n
	
	Escribir "Los primeros, ", n " terminos de la serie de fibonacci son: "
	fib1 = 0
	fib2 = 1
	
	para i = 1 hasta n Hacer
		Escribir fib1
		fib_actual = fib1 + fib2
		fib1 = fib2 
		fib2 = fib_actual
	FinPara
	
FinProceso

37. Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

Proceso pregunta37
	Definir num1, num2, residuo Como Entero
	Escribir "Ingrese el primer numero: "
	Leer num1
	Escribir "Ingrese el segundo numero: "
	Leer num2
	
	Mientras num2 <> 0 Hacer
		residuo = num1 mod num2
		num1 = num2
		num2 = residuo
	FinMientras
	Escribir "El MCD de los numeros son: ", num1
FinProceso

38. Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.

Proceso pregunta38
	Definir numerito, suma_divisores, divisor Como Entero
	Escribir "Ingrese un numero para verificar: "
	Leer numerito 
	
	suma_divisores = 0
	
	Para divisor = 1 Hasta numerito - 1 Hacer
		si numerito mod divisor = 0 Entonces
			suma_divisores = suma_divisores + divisor
		FinSi
	FinPara
	
	Si suma_divisores = numerito Entonces
		Escribir "El numeroes perfecto" 
	SiNo
		Escribir "El numero no es perfecto"
	FinSi
FinProceso

39. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:

    Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

Proceso pregunta39
	Definir terminos, i Como Entero
	definir picito, denominador Como Real
	
	Escribir "Ingrese el numero de terminos para aproximar:"
	Leer terminos
	
	picito = 0
	denominador = 1
	para i = 1 Hasta terminos	Hacer
		Si i mod 2 = 0 Entonces
			picito = picito - 1 / denominador
		SiNo
			picito = picito + 1 / denominador
		FinSi
		denominador = denominador + 2
	FinPara
	picito = 4 * picito
	Escribir "La proximacion de pi con: ", terminos, " es ", picito
FinProceso


40. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:

    Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...

    Proceso pregunta40
	Definir terminos, i Como Entero
	definir picito, denominador1, denominador2, denominador3 Como Real
	
	Escribir "Ingrese el numero de terminos: "
	Leer terminos
	
	picito = 3
	denominador1 = 2
	denominador2 = 3
	denominador3 = 4
	
	para i = 1 Hasta temrinos Hacer
		
		si i mod 2 = 0 Entonces
				picito = picito - 4 / (denominador1 * denominador2 * denominador3)
		SiNo
			picito = picito + 4 / (denominador1 * denominador2 * denominador3)
		FinSi
		
		denominador1 = denominador1 + 1
		denominador2 = denominador2 + 1
		denominador3 = denominador3 + 1
		
	FinPara
	Escribir "La aproximacion de pi con: ", terminos, " terminos es: ", picito
FinProceso