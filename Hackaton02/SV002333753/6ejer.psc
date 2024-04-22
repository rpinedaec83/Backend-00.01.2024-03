/*
  Hacer un algoritmo en Pseint para ayudar a un trabajador a saber
  cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos,
  se le pagará $20 por hora, pero si trabaja más de 40 horas entonces 
  las horas extras se le pagarán a $25 por hora.
*/

Algoritmo CalcularSueldoSemanal
    
    Definir horasTrabajadas Como Entero;
    Definir pagoNormal, pagoExtra, sueldo Como Real;
    
   
    pagoNormal <- 20;  // Pago por hora normal
    pagoExtra <- 25;   // Pago por hora extra
    
    
    Escribir "Ingrese las horas trabajadas en la semana:";
    Leer horasTrabajadas;
    
    
    Si horasTrabajadas <= 40 Entonces
        sueldo <- horasTrabajadas * pagoNormal;
    Sino
        sueldo <- (40 * pagoNormal) + ((horasTrabajadas - 40) * pagoExtra);
    FinSi
    
    
    Escribir "El sueldo semanal es: $", sueldo;
FinAlgoritmo
