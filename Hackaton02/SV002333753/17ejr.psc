// Hacer un algoritmo en Pseint que lea una hora y nos calcule la hora dentro de un segundo.

Algoritmo IncrementarUnSegundo
    
    Definir horas, minutos, segundos Como Entero;
    
    Escribir "Ingrese las horas:";
    Leer horas;
    Escribir "Ingrese los minutos:";
    Leer minutos;
    Escribir "Ingrese los segundos:";
    Leer segundos;
    
    segundos <- segundos + 1;
    
    Si segundos > 59 Entonces
        segundos <- 0;
        minutos <- minutos + 1;
       
        Si minutos > 59 Entonces
            minutos <- 0;
            horas <- horas + 1;
            // Verificar si las horas exceden 23
            Si horas > 23 Entonces
                horas <- 0;
            FinSi
        FinSi
    FinSi
    
    Escribir "La hora un segundo después es ", horas, ":", minutos, ":", segundos;
FinAlgoritmo
