// Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.

Algoritmo SumaDePrimerosNumeros
    
    Definir n, suma, i Como Entero;
    
    Escribir "Ingrese el número de términos n para sumar los primeros n números:";
    Leer n;
    
    suma <- 0;

    Para i Desde 1 Hasta n Con Paso 1 Hacer
        suma <- suma + i;
    FinPara
   
    Escribir "La suma de los primeros ", n, " números es ", suma;
FinAlgoritmo
