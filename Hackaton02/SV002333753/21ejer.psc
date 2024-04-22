// Hacer un algoritmo en Pseint que permita calcular el factorial de un número.

Algoritmo CalcularFactorial
    
    Definir numero, factorial Como Entero;
    
    Escribir "Ingrese un número entero positivo para calcular su factorial:";
    Leer numero;
    
    factorial <- 1;
    
    Si numero < 0 Entonces
        Escribir "El número debe ser positivo.";
    Sino
        Para i Desde 1 Hasta numero Con Paso 1 Hacer
            factorial <- factorial * i;
        FinPara
        Escribir "El factorial de ", numero, " es ", factorial;
    FinSi
FinAlgoritmo
