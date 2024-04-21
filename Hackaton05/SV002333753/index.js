class Telefono {
    constructor(numeroDeSerie, marca, imei) {
        this.numeroDeSerie = numeroDeSerie;
        this.marca = marca;
        this.imei = imei;
        this.reportado = false;
    }
    validarIMEI() {
        const imeiRegExp = /^\d{15}$/;
        return imeiRegExp.test(this.imei);
    }


    verificarSiEstaReportado() {
        this.reportado = telefonosReportados.includes(this.imei);
        return this.reportado;
    }

    actualizarInformacion(descripcion, nuevaMarca) {
        this.descripcionDanio = descripcion;
        this.marca = nuevaMarca;
        return {
            descripcionDanio: this.descripcionDanio,
            marca: this.marca
        };
    }
};

class Usuario {
    constructor() {
        this.autorizado = false;
        this.abonado = 0; // cantidad abonada
    }

    autorizarYAbonar(abono) {
        if (abono >= 50) {
            this.abonado = abono;
            this.autorizado = true;
        }
    }

    puedeIniciarRevision() {
        return this.autorizado && this.abonado >= 50;
    }
}

class Tecnico {
    constructor(nombre) {
        this.nombre = nombre;
        this.skills = [];
    }

    agregarSkill(skill) {
        this.skills.push(skill);
    }

    puedeReparar(marca) {
        return this.skills.includes(marca);
    }
}

class Repuesto {
    constructor(nombre, status) {
      this.nombre = nombre;
      this.status = status; // Estado podría ser algo como 'en espera', 'en reparación', 'reparado'
    }
  
    actualizarEstado(nuevoStatus) {
      this.status = nuevoStatus;
    }
  }
  
  const telefonosReportados = ['987654321012345', '123456789012345'];

let tecnico1 = new Tecnico('Juan');
tecnico1.agregarSkill('Samsung');
tecnico1.agregarSkill('Apple');

let usuario1 = new Usuario();

let telefono1 = new Telefono('001', 'Samsung', '987654321012345');
let telefono2 = new Telefono('002', 'Apple', '123456789012346'); // IMEI no reportado y válido

console.log('Telefono1, IMEI válido:', telefono1.validarIMEI());  // Debería ser true si el IMEI es correcto
console.log('Telefono1, está reportado:', telefono1.verificarSiEstaReportado());  // Debería ser true

console.log('Telefono2, IMEI válido:', telefono2.validarIMEI());  // Debería ser true
console.log('Telefono2, está reportado:', telefono2.verificarSiEstaReportado());  // Debería ser false

telefono2.actualizarInformacion('Pantalla rota', 'Apple');
console.log('Telefono2, Descripción del daño:', telefono2.descripcionDanio);
console.log('Telefono2, Marca:', telefono2.marca);

usuario1.autorizarYAbonar(50);
console.log('Usuario1, autorizado:', usuario1.autorizado);  // Debería ser true
console.log('Usuario1, puede iniciar revisión:', usuario1.puedeIniciarRevision());  // Debería ser true

console.log('Tecnico1, puede reparar Samsung:', tecnico1.puedeReparar('Samsung'));  // Debería ser true
console.log('Tecnico1, puede reparar LG:', tecnico1.puedeReparar('LG'));  // Debería ser false

let repuesto1 = new Repuesto('Pantalla Samsung', 'en espera');
repuesto1.actualizarEstado('en reparación');
console.log('Repuesto1, Estado:', repuesto1.status);  // Debería ser 'en reparación'
