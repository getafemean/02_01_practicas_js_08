// Declaración de clases en JS (Desde ECMA6)

class Vehiculo {

    marca;
    modelo;
    color;
    precio;

    constructor(marcaIn, modeloIn, colorIn, precioIn) {
        this.marca = marcaIn;
        this.modelo = modeloIn;
        this.color = colorIn;
        this.precio = precioIn;
    }

    getColor() {
        return this.color;
    }

    setColor(colorIn) {
        this.color = colorIn;
    }

    getPrecioConImpuestos(tipoImpuesto) {
        return this.precio + this.precio * tipoImpuesto;
    }

}

// Instancia de objetos de una clase 

let vehiculo1 = new Vehiculo('Renault','Megane','Gris', 15000);
console.log(vehiculo1);

// Propiedades privadas en JS (no tiene compatibilidad con muchos navegadores)

class Empleado {

    nombre;
    apellidos; // Pública
    #edad; // Privada

    constructor(nombre, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    setEdad(edad) {
        this.#edad = edad;
    }

    getEdad(edad) {
        return this.#edad;
    }

}

let empleado1 = new Empleado('Lucía', 'López Pérez');
// console.log(empleado1.#edad); daría error al ser propiedad privada siempre y cuando el motor tenga compatibilidad
// empleado1.#edad = 30;
console.log(empleado1);

// Herencia de clases en JS

class Rectangulo {

    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    getSuperficie() {
        return this.ancho * this.alto;
    }

}

let poligono1 = new Rectangulo(10, 20);
console.log(poligono1.getSuperficie());

class Cuadrado extends Rectangulo {

    constructor(lado) {
        super(lado, lado)
    }

    getSuperficieCuadrado() {
        return super.getSuperficie();
    }
}

let poligono2 = new Cuadrado(10);
console.log(poligono2.getSuperficieCuadrado());