// Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.

Algoritmo DeterminarDiaDeLaSemana
    
    Definir numero Como Entero;
    
    Escribir "Ingrese un número entre 1 y 7 para determinar el día de la semana:";
    Leer numero;
    
    Segun numero Hacer
        1:
            Escribir "Lunes";
        2:
            Escribir "Martes";
        3:
            Escribir "Miércoles";
        4:
            Escribir "Jueves";
        5:
            Escribir "Viernes";
        6:
            Escribir "Sábado";
        7:
            Escribir "Domingo";
        De Otro Modo:
            Escribir "Número inválido. Por favor, ingrese un número entre 1 y 7.";
    FinSegun
FinAlgoritmo
