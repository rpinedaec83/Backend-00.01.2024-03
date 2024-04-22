// Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.

Algoritmo ConversionDeUnidades
    
    Definir opcion Como Entero;
    Definir valor Como Real;
    Definir resultado Como Real;
    
    
    Escribir "Seleccione la conversión que desea realizar:";
    Escribir "1. Centímetros a Pulgadas";
    Escribir "2. Libras a Kilogramos";
    Leer opcion;
    
    
    Segun opcion Hacer
        1:
            Escribir "Ingrese la cantidad de centímetros:";
            Leer valor;
            resultado <- valor / 2.54; // Conversión de cm a pulgadas
            Escribir valor, " cm son ", resultado, " pulgadas.";
        2:
            Escribir "Ingrese la cantidad de libras:";
            Leer valor;
            resultado <- valor * 0.453592; // Conversión de libras a kg
            Escribir valor, " libras son ", resultado, " kilogramos.";
        De Otro Modo:
            Escribir "Opción no válida.";
    FinSegun
FinAlgoritmo
