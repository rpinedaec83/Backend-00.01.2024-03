/*
TV
Marca: LG
Modelo: XXX3
TipoPantalla: LED
Resolucion: 4K
TamanoPantalla: 47''
Audio:  Dolby
Entradas: [hdmi x 3, AV, Cable, Antena ]
Conectividad: [wifi, red, bluethooth]
Voltaje: 220V
SO: webos
Precio: 900

verStreaming()
navegarInternet()
reproducirAudio()
verFotos()

prender()
apagar()
cambiarOrigen()
ajustarVolumen()




AUTOS
Marca: BMW
Modelo: 318i Turbo
Precio: 45000
Color: Blanco
Equipamiento: Full
TipoCombustible: Gasolina
Rendimiento: Medio
prender()
apagar()
acelerar()
frenar()
girar()

estacionar()
conduccionAutomatizada()


*/

class Autos{
    constructor(marca, modelo, precio, color,equipamiento, rendimiento){
        this.marca = marca;
        this.modelo= modelo;
        this.precio = precio;
        this.color = color;
        this.equipamiento = equipamiento;
       // this.tipoCombustible = tipoCombustible;
        this.rendimiento = rendimiento;
    }
    prender() {
        console.log(`Asegurese que el freno de mano este activado en el auto ${this.marca}`)
        console.log(`El auto ${this.marca} se esta encendiendo`)
    }
    apagar() {
        console.log(`Asegurese que el freno de mano este activado en el auto ${this.marca}`)
        console.log(`El auto ${this.marca} se esta apagando`)
    }
}

class AutosElectricos extends Autos{
    constructor(marca, modelo, precio, color,equipamiento, rendimiento, tipoBateria){
        super(marca, modelo, precio, color,equipamiento, rendimiento);
        this.tipoBateria = tipoBateria;
    }
    cargarBateria(){
        console.log(`El auto ${this.marca} esta cargando la bateria ${this.tipoBateria}`)
    }
    prender() {
        console.log(`El auto ${this.marca} se esta inicializando la bateria ${this.tipoBateria}`)
        console.log(`El auto ${this.marca} se esta encendiendo`)
    }
}


// let miTesla = new AutosElectricos("Tesla", "x1", 50000, "rojo", "full", "430 km x carga","LIPO");
// let miAuto = new Autos("bmw","318i Turbo",45000, "Blanco", "Full",  "Alto");
// console.log(miTesla.marca);
// miTesla.prender()
// miAuto.prender()
// miTesla.apagar();
// miAuto.apagar()
// miTesla.cargarBateria();
// console.log(miAuto.marca);
// miAuto.prender();
// let miAuto2 = new Autos("mercedes","AS450",50000, "Blanco", "Full", "Alto");
// miAuto2.prender();


class Electrodomesticos{
    constructor(nombre,marca, modelo, color, precio, voltaje, conectividad){
        this.nombre = nombre;
        this.marca = marca;
        this.modelo=modelo;
        this.color = color;
        this.precio = precio;
        this.voltaje = voltaje;
        this.conectividad = conectividad;
    }
    prender(){
        if(this.voltaje !== 220){
            console.log(`verifique su sumistro de energia que sea de ${this.voltaje}`)
        }
        console.log(`El ${this.nombre} se esta encendiendo`)
    }
    apagar(){
        console.log(`El ${this.nombre} se esta apagando`)
    }
    conectar(medio){
        const index = this.conectividad.indexOf(medio);
        console.log(index);
        if (index > -1) { // only splice array when item is found
            console.log("Conectando al "+ medio)
        }
        else{
            console.log(`Imposible conectar al ${medio} ya que solo se tienen la siguiente conectividad ${this.conectividad.join(",")}`)
       
        }
    }
}

class LineaGris extends Electrodomesticos{
    constructor(nombre,marca, modelo, color, precio, voltaje, conectividad = null, audio, entradas){
        super(nombre,marca, modelo, color, precio, voltaje, conectividad);
        this.audio = audio;
        this.entradas = entradas;
    }
    ajustarVolumen(nivel){
        console.log(`Ajustando el volumen al nivel ${nivel} del dispositivo ${this.audio}`)
    }
    cambiarOrigen(origen = "wifi"){
        const index = this.entradas.indexOf(origen);
        console.log(index);
        if (index > -1) { // only splice array when item is found
            console.log("Conectando al "+ origen)
        }
        else{
            console.log(`Imposible conectar al ${origen} ya que solo se tienen las siguientes entradas ${this.entradas.join(",")}`)
        }
    }
}

class Television extends LineaGris{
    constructor(nombre,marca, modelo, color, precio, voltaje, conectividad, audio, entradas, tipoPantalla, tamaño, resolucion){
        super(nombre,marca, modelo, color, precio, voltaje, conectividad, audio, entradas);
        this.tipoPantalla = tipoPantalla;
        this.tamaño = tamaño;
        this.resolucion = resolucion;
    }

    navegarInternet(url){
        console.log(`Navegando en la pagina ${url}`)
    }
    verStreaming(proveedor){
        console.log(`Viendo ${proveedor} en la pantalla ${this.tipoPantalla} en resolucion ${this.resolucion}`)
    }
}

let tv1 = new Television("TV Dormitorio","LG","XXX3","Negro",900, 110, ["wifi", "lan", "BT"], "Dolby Atmos",["HDMI 1", "HDMI 2", "AV1"],"LED",42,"4K");

let tv2 = new Television("TV Dormitorio","LG","XXX3","Negro",900, 220, [], "Dolby Atmos",["HDMI 1", "HDMI 2", "AV1"],"LED",42,"4K");

//tv1.prender();
tv2.prender();
tv2.apagar();
tv2.conectar("wifi")
tv2.ajustarVolumen(50)
tv2.cambiarOrigen()
tv2.navegarInternet("www.x-codec.net")
tv2.verStreaming("Netflix")
