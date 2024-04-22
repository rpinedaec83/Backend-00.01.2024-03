// Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.

Algoritmo DeterminarSiEsPrimo
    
    Definir numero Como Entero;
    
    Escribir "Ingrese un número entero entre 1 y 10:";
    Leer numero;
    
    Si numero = 2 o numero = 3 o numero = 5 o numero = 7 Entonces
        Escribir "El número es primo.";
    Sino Si numero = 1 o numero = 4 o numero = 6 o numero = 8 o numero = 9 o numero = 10 Entonces
        Escribir "El número no es primo.";
    Sino
        Escribir "Número fuera del rango permitido.";
    FinSi
FinAlgoritmo
