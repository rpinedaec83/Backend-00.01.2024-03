// Hacer un algoritmo en Pseint que lea un n�mero por el teclado y determinar si tiene tres d�gitos.

Algoritmo DeterminarTresDigitos
    
    Definir numero Como Entero;
    Definir textoNumero Como Cadena;
    
    Escribir "Ingrese un número:";
    Leer numero;
    
    textoNumero <- numero.aCadena();
    
    Si longitud(textoNumero) == 3 Entonces
        Escribir "El número tiene tres dígitos.";
    Sino
        Escribir "El número no tiene tres dígitos.";
    FinSi
FinAlgoritmo
