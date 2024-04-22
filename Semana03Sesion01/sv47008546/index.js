//function myFunction() {
//  document.getElementById("demo9").innerHTML = "Paragraph changed.";
//}

//let a, b, c;  // Declare 3 variables
// a = 5;        // Assign the value 5 to a
// b = 6;        // Assign the value 6 to b
// c = a + b;    // Assign the sum of a and b to c

const result171 = document.getElementById("result171")
const result172 = document.getElementById("result172")
const result173 = document.getElementById("result173")
const result174 = document.getElementById("result174")
//17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.

function mueveReloj() {
  var horas = prompt('Ingrese las horas desde [0-23]')
  var minutos = prompt('Ingrese los minutos desde [0-59]')
  var segundos = prompt('Ingrese los segundos desde [0-59]')

  do {
  if (horas < 0 || horas > 23) {
    alert('Error al digitar la hora, debe ser un valor entre 0 y 23')
  } if (minutos < 0 || minutos > 59) {
    alert('Eror al digitar minutos, debe ser un valor entre 0 y 59')
  } if (segundos < 0 || segundos > 59) {
    alert('Error al digitar los segundos, debe ser un valor entre 0 y 59')
  }
  
    if (horas > 9) {
      //result171.textContent = `la hora digitada es: "${horas}"`
      alert('la hora digitada es:',horas)
    } else {
      //result171.textContent = `la hora digitada es: "0${horas}"`
      alert('la hora digitada es: 0',horas)
      if (minutos > 9) {
        //result172.textContent = `el minuto digitado es: "${minutos}"`
        alert('el minuto digitado es:',minutos)
      } else {
        //result172.textContent = `el minuto digitado es: "0${minutos}"`
        alert('el minuto digitado es: 0',minutos)
      } if (segundos > 9) {
        //result173.textContent = `el segundo digitado es: "${segundos}"`
        alert('el segundo digitado es:',segundos)        
      } else {
       //result173.textContent = `el segundo digitado es: "0${segundos}"`
       alert('el segundo digitado es: 0',segundos)
        segundos = segundos + 1
      }
      segundos = 0
      minutos = minutos + 1
    }
    minutos = 0
    horas = horas + 1
    if (horas = 24) {
      horas = 0
    }
  }
  while (horas <= 23);
  while (minutos <= 59);
  while (segundos <= 59);
  //console.log('mueveReloj')
  alert('la hora es',horas,':',minutos,':',segundos)
}

setInterval('mueveReloj',1000)
//result174.textContent = `${horas}:${minutos}:${segundos}`
