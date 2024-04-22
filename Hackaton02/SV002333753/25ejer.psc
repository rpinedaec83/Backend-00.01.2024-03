//Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.

Algoritmo CalcularFactorialRecursivo
    
    Funcion factorialRecursivo(n)
        Si n = 0 o n = 1 Entonces
            Retornar 1;
        Sino
            Retornar n * factorialRecursivo(n-1);
        FinSi
    FinFuncion
    
   
    Definir numero Como Entero;
    Definir resultado Como Entero;
    
    
    Escribir "Ingrese un número entero positivo para calcular su factorial:";
    Leer numero;
    
    
    Si numero < 0 Entonces
        Escribir "El número debe ser positivo.";
    Sino
        
        resultado <- factorialRecursivo(numero);
        
    
        Escribir "El factorial de ", numero, " es ", resultado;
    FinSi
FinAlgoritmo
