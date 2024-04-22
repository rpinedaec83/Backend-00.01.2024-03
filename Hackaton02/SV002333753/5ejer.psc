*/Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para 
vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará 
un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, 
se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80./*

Algoritmo CalcularDescuentoZapatos
    
    Definir cantidadZapatos Como Entero;
    Definir precioUnitario, descuento, precioTotal, precioFinal Como Real;
    
    
    precioUnitario <- 80;
    
   
    Escribir "Ingrese la cantidad de zapatos comprados:";
    Leer cantidadZapatos;
    
    
    Si cantidadZapatos > 30 Entonces
        descuento <- 0.40;
    Sino Si cantidadZapatos > 20 Entonces
        descuento <- 0.20;
    Sino Si cantidadZapatos > 10 Entonces
        descuento <- 0.10;
    Sino
        descuento <- 0.0;
    FinSi
    
    
    precioTotal <- cantidadZapatos * precioUnitario;
    
    
    precioFinal <- precioTotal * (1 - descuento);
    
    
    Escribir "El precio final después del descuento es: $", precioFinal;
FinAlgoritmo
