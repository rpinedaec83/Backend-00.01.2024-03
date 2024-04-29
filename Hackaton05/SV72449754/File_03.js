
let Arr_Devices=[];
let Arr_Tech=[];
let Arr_OrdenServicio=[];

//Descripcion de los SKILLS de los tecnicos
let skill_Tec01=[
    {equipo:"celular",
    marca:["Apple","Samsung","Motorola"]},
    {equipo:"SmartWatch",
    marca:["Apple","Samsung","Ticwatch","Fitbit"]},
    {equipo:"Tablet",
    marca:["Apple","Samsung","Toshiba","Lenovo"]},
    {equipo:"Laptop",
    marca:[]}
];

let skill_Tec02=[
    {equipo:"celular",
    marca:["Apple","Oppo"]},
    {equipo:"SmartWatch",
    marca:[]},
    {equipo:"Tablet",
    marca:["Apple","Samsung","Lenovo"]},
    {equipo:"Laptop",
    marca:["Dell","Lenovo"]}
];

let skill_Tec03=[
    {equipo:"celular",
    marca:["Xiaomi","Samsung"]},
    {equipo:"SmartWatch",
    marca:["Ticwatch","Fitbit"]},
    {equipo:"Tablet",
    marca:[]},
    {equipo:"Laptop",
    marca:["Dell","Lenovo"]}
];

let skill_Tec04=[
    {equipo:"celular",
    marca:[]},
    {equipo:"SmartWatch",
    marca:["Apple","Samsung","Ticwatch"]},
    {equipo:"Tablet",
    marca:["Apple","Samsung","Lenovo"]},
    {equipo:"Laptop",
    marca:["Dell","Lenovo","Asus","MSI"]}
];



//Inicializando la Funcion
const FunctionAnonima=function(){
    let Nombre;
    let Direccion;

    function configurar() {
        console.log("iniciando la Configuracion");

        // Crear los tecnicos de la empresa
        CrearTecnicos(); 
    }

    function Eventos(){
        document.getElementById("Btn_ClearCeluar").addEventListener("click",crear_OrdenServicio);

        document.getElementById("cerrarVentana").addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementById("infoCliente").style.display = "none";
        })
    }

  

    return {
        init: function () {
            configurar();
            Eventos() ;
        }
    }
}();


function CrearTecnicos(){
    //Tecnico 01
    let Tec_01=new Tecnicos("Jose diaz",24586300,"TC-01");
    Tec_01.Skills=skill_Tec01;
    Arr_Tech.push(Tec_01);

    //Tecnico 02
    let Tec_02=new Tecnicos("Marco casas",42589612,"TC-02");
    Tec_02.Skills=skill_Tec02;
    Arr_Tech.push(Tec_02);

    //Tecnico 03
    let Tec_03=new Tecnicos("raul flores",77766655,"TC-03");
    Tec_03.Skills=skill_Tec03;
    Arr_Tech.push(Tec_03);

    //Tecnico 04
    let Tec_04=new Tecnicos("cesar gonzales",63451278,"TC-04");
    Tec_04.Skills=skill_Tec04;

    //Agregando al Array de Objetos tecnicos
    Arr_Tech.push(Tec_04);

}


function crear_OrdenServicio(){
    let Nombre=prompt("introduzca el nombre del Cliente");
    let Documento=prompt("introduzca el Documento del Cliente");
    let Codido_Servicio=prompt("introduzca el codido de servicio");
    let Marca=prompt("introduzca la marca del equipo"+"\nPor Ejemplo: Apple,Motorola,Smasung,Etc");
    let Modelo=prompt("introduzca el modelo del equipo");
    let Tipo=prompt("introduzca el tipo de equipo"+"\nPor Ejemplo: Celular,SmartWatch,Tablet,Laptop");
    let IMEI=prompt("introduzca el IMEI del equipo"+"\nPor Ejemplo: 123456789");
    let Diagnostic_01=prompt("introduzca el Primer Diagnostico");
    

    // Creacion de Objeto cliente-Dispositivo
    let ObjCliente= new ClienteDevice(Marca, Modelo,Tipo,IMEI);
    ObjCliente.Usuario.Nombre=Nombre;
    ObjCliente.Usuario.Documento=Documento;
    

    // Creacion del Objeto Servicio
    let Tech_Select ={};
    let ObjServicio= new OrdenServicio (Codido_Servicio,ObjCliente);
    ObjServicio.Diagnostico.push(Diagnostic_01);

    let cond=1;
    let Tech=prompt("introduzca el codigo  de Tecnico a cargo"+"\nPor Ejemplo: TC-01,TC-02,TC-03 o TC-04");

    while (cond) {  
        if (Tech=="TC-01"||Tech=="TC-02" ||Tech=="TC-03" ||Tech=="TC-04" ){
            switch (Tech) {
                case "TC-01":
                    Tech_Select=Arr_Tech[0];
                    break;
        
                case "TC-02":
                    Tech_Select=Arr_Tech[1];
                    break;
                
                case "TC-03":
                    Tech_Select=Arr_Tech[2];
                    break;
                        
                case "TC-04":
                    Tech_Select=Arr_Tech[3];
                    break;
            
                default:
                    break;
            }
            cond=0;
        }
        else{
            Tech=prompt("Por favor,introduzca el codigo valido del Tecnico"+"\nPor Ejemplo: TC-01,TC-02,TC-03 o TC-04");
        }  
    }


    //Seleccionando el Tecnico adecuado para el Dispositivos
    ObjServicio.Tecnico=Tech_Select;
    ObjServicio.VerificarIMEI();

    //Verificando la Legalidad del IMEI del Dispostivo
    if (ObjServicio.Sts_ReportIMEI) {
        Arr_OrdenServicio.push(ObjServicio);
        alert("La Orden de servicio fue creada correctamnete");
    }
    else{alert("La Orden de servicio no fue creada"+"\nEl Dispostivo no tiene un IMEI legal"+"\npor favor denuncia el Hecho");}

    console.log(ObjServicio);
    cargarInfoCliente(ObjServicio);
    
    document.getElementById("infoCliente").style.display = "block";
    //console.log(Arr_OrdenServicio);
}


function cargarInfoCliente(obj) {
    document.getElementById("nombreCliente").value = obj.Cliente.Usuario.Nombre;
    document.getElementById("DocumentoCliente").value = obj.Cliente.Usuario.Documento;
    document.getElementById("equipoCliente").value = `${obj.Cliente.Tipo} /Marca: ${obj.Cliente.Marca} /Modelo:${obj.Cliente.Modelo}`;
    document.getElementById("Dx01Cliente").value = obj.Diagnostico[0];
    document.getElementById("TecnicoCliente").value = obj.Tecnico.Nombre;

}


class ClienteDevice {
    constructor(Marca, Modelo,Tipo,IMEI) {
        this.Usuario = {};  
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Tipo = Tipo;
        this.IMEI = IMEI;
          
    }
}


class Tecnicos {
    constructor(Nombre, Documento,Codigo) {
        this.Nombre = Nombre;
        this.Documento = Documento;
        this.Codigo = Codigo;
        this.Skills = [];  
    }
}


class OrdenServicio {
    constructor(Cod_Servicio,Cliente,Tecnico) {
        this.Cod_Servicio = Cod_Servicio;
        this.Cliente = Cliente;
        this.Diagnostico= [];
        this.Tecnico = Tecnico;
        this.Sts_ReportIMEI=false;
       
    }
    VerificarIMEI(){
        let Sts_Report=prompt("El celular paso la verificacion de IMEI Valida: Y/N");
        if(Sts_Report=="Y" || Sts_Report=="y") {
            this.Sts_ReportIMEI=true;
        }
        else{this.Sts_ReportIMEI=false;}
    }
}


