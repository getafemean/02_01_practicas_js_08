// Sintaxis de arrays en JS (arreglos)

let frutas = ['peras','manzanas','naranjas','plátanos']; // índice a cero

console.log(frutas);

let frutaSeleccionada = frutas[1];

console.log(frutaSeleccionada);

frutas[2] = 'kiwis';

console.log(frutas);

// Objetos en JS

// 1º Forma de declarar objetos en JS mediante un literal

let jugador1 = {
    nombre: 'Sergio', // propiedades públicas 
    apellidos: 'Ramos',
    dorsal: '4',
    goles: 0,
    equipos: ['Sevilla','Real Madrid'],

    marcarGol() {
        this.goles++;
    }

}

// Acceso a los miembros del objeto (notación del punto)

console.log(jugador1.apellidos);

jugador1.marcarGol();

console.log(jugador1.goles);

jugador1.apellidos = 'Ramos González';

console.log(jugador1);

// 2ª Forma de declarar objetos en JS mediante Object

let jugador2 = new Object();
console.log(typeof jugador2);

jugador2.nombre = 'Lionel';
jugador2.apellidos = 'Messi';
jugador2.dorsal = '10';
jugador2.goles = 0;
jugador2.marcarGol = function () {
    this.goles++;
}
jugador2.marcarGol();
console.log(jugador2);

// 3ª Forma de declarar objetos en JS mediante una función constructora (equivalente a una clase)

function Jugador (nombre, apellidos, dorsal, goles) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.dorsal = dorsal;
    this.goles = goles;

    this.marcarGol = function () {
        this.goles++;
    }
}

// Podemos instanciar todos los objetos que necesitemos como en una clase de POO

let jugador3 = new Jugador('Rafael','Varane','08', 0);
let jugador4 = new Jugador('Julio','Iglesias','01', 0);

jugador3.marcarGol();
console.log(jugador3, jugador4);

// 4ª Forma de declarar objetos en JS mediante Factory functions

function Empleado (nombre, apellidos, dni) {
    return {
        nombre, // Desde ECMA6 si la propiedad y el valor está en una variable del mismo nombre se pueden simplificar nombre: nombre
        dni,
        apellidos
    }
}

let empleado1 = Empleado('Juan','López','444444444X');
let empleado2 = Empleado('Laura','Pérez','55555555D');

console.log(empleado1, empleado2);
