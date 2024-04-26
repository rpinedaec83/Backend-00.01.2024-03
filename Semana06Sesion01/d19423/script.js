// if (typeof(Storage) !== "undefined") {
//     // Code for localStorage/sessionStorage.
//     console.log("Si esta habilitado el webstorae")
//   } else {
//     // Sorry! No Web Storage support..
//     console.log("NO esta habilitado el webstorae")
//   }

//   localStorage.setItem("apellido", "Pineda");

//   document.getElementById("data").innerHTML = localStorage.getItem("apellido");

//   let objInfo = {
//     nombre:"Roberto",
//     apellido:"Pineda",
//     edad: 40,
//     hobbies:[
//         "AeroModelismo",
//         "Gunpla"
//     ]
//   }

//   localStorage.setItem("info",JSON.stringify(objInfo));
// console.log(localStorage.getItem("info"));
//   document.getElementById("info").innerHTML = localStorage.getItem("info");

//   let strHtml = "<ul>";
//   //let objJSON = localStorage.getItem("info");
//   let objJSON = JSON.parse( localStorage.getItem("info"));

//   Object.keys(objJSON).forEach(function(key) {

  
//     strHtml+= `<li> ${objJSON[key]} </li>`
  
//   });
  
//   strHtml += "</ul>"
//   document.getElementById("result").innerHTML =strHtml;


// let sesionObj = sessionStorage.getItem("login");
// if(sesionObj!== null){
//     console.log("Si esta logueado")
// }
// else{
//     console.log("No se ha legueado proceder al login")
//     let objLogin = {
//         user:"rpineda",
//         pass:"1234567890"
//     } 
//     sessionStorage.setItem("login", JSON.stringify(objLogin));
// }
let arrGundams = [];
let objLocalGundams = localStorage.getItem("gundams");
if(objLocalGundams!=null)
{
    arrGundams = JSON.parse(objLocalGundams);
}

let login = JSON.parse( sessionStorage.getItem("login"));
if(login==null){
    window.location.replace("file:///Users/rpineda/Fuentes/Backend-00.01.2024-03/Semana06Sesion01/d19423/login.html");
}else{
    if(!login.login)
        console.log("No se debe recordar las credenciales")
        //window.location.replace("file:///Users/rpineda/Fuentes/Backend-00.01.2024-03/Semana06Sesion01/d19423/login.html");
}

$("#btnAgregar").on("click",function(event){
    event.preventDefault();
    console.log("Agregando un nuevo");
    let nombre = prompt("Agrega el nombre");
    let descripcion = prompt("Agrega la descripcion");
    let imagen = prompt("Agrega la imagen");
    let escala = prompt("Agrega la escala");
    let isCustom = prompt("Esta modificado???");
    let custom = ""
    if(isCustom == "SI"){
        custom = prompt("Que le modificaste???");
    }
    let objGundam = new Gundam(nombre,descripcion,imagen,escala,(isCustom == "SI" ? true : false), (isCustom == "SI" ? custom : ""))
    arrGundams.push(objGundam);
    console.log(arrGundams);
    localStorage.setItem("gundams",JSON.stringify(arrGundams));
    $('#table').bootstrapTable('load',arrGundams);
})


init();
function init(){
    $('#table').bootstrapTable();
    $('#table').bootstrapTable('load',arrGundams);
}

class Gundam{
    constructor(nombre, descripcion, imagen, escala, isCustom = false, custom = ""){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.escala = escala;
        this.isCustom = isCustom;
        this.custom = custom;
    }
}





