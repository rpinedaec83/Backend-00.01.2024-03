// Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.

Algoritmo SumaDeImparesHastaN
    
    Definir n, suma, i Como Entero;
    
    Escribir "Ingrese un número n para sumar todos los números impares menores o iguales a n:";
    Leer n;
    
    suma <- 0;
    
    Para i Desde 1 Hasta n Con Paso 1 Hacer
        Si i % 2 <> 0 Entonces
            suma <- suma + i;
        FinSi
    FinPara
    
    Escribir "La suma de los números impares menores o iguales a ", n, " es ", suma;
FinAlgoritmo
