/*
(Revisar validacion) Hacer un algoritmo en Pseint para una tienda 
de helado que da un descuento por compra a sus clientes con membresía 
dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. 
Los descuentos son los siguientes:

   Tipo A 10% de descuento
   Tipo B 15% de descuento
   Tipo C 20% de descuento
*/

Algoritmo CalcularDescuentoMembresia
    
    Definir tipoMembresia Como Caracter;
    Definir montoCompra, descuento, montoFinal Como Real;
    
    
    Escribir "Ingrese el tipo de membresía (A, B o C):";
    Leer tipoMembresia;
    Escribir "Ingrese el monto de la compra:";
    Leer montoCompra;
    
    
    Segun tipoMembresia Hacer
        'Tipo A'
            descuento <- 0.10;
        'Tipo B'
            descuento <- 0.15;
        'Tipo C'
            descuento <- 0.20;
        De Otro Modo
            Escribir "Tipo de membresía inválido. Introduzca A, B o C.";
            Detener;
    FinSegun
    
    
    montoFinal <- montoCompra * (1 - descuento);
    
    
    Escribir "El monto final con descuento es: $", montoFinal;
FinAlgoritmo
