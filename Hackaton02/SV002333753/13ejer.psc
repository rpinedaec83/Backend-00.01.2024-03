// Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.

Algoritmo DeterminarSiEsVocal
    
    Definir letra Como Caracter;
    
    
    Escribir "Ingrese una letra:";
    Leer letra;
    
    
    letra <- letra.aMinuscula();
 
    Si letra = "a" o letra = "e" o letra = "i" o letra = "o" o letra = "u" Entonces
        Escribir "La letra es una vocal.";
    Sino
        Escribir "La letra no es una vocal.";
    FinSi
FinAlgoritmo
