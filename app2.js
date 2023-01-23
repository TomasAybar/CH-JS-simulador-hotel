/** VARIABLES */
let clientes = [];

let habitaciones = [
    {
        opcion: 'A',
        tipo: 'standar',
        precioNoche: 2000
    },
    {
        opcion: 'B',
        tipo: 'full',
        precioNoche: 2500
    },
    {
        opcion: 'C',
        tipo: 'premium',
        precioNoche: 3000
    }
]

/** CLASES */

class Cliente {

    constructor(nombre, edad, habitacion, cantidadNoches) {

        this.nombre = nombre;
        this.edad = edad;
        this.habitacion = habitacion;
        this.cantidadNoches = cantidadNoches;

    }
}

/** FUNCIONES */

/**
 * 
 * @param {string} nombre 
 * @param {number} edad 
 * @param {string} habitacion 
 * @param {number} cantidadNoches 
 */
const agregarCliente = () => {

    do {

        const nombre = prompt('Ingrese nombre del cliente');
        const edad = parseInt(prompt('Ingrese edad del cliente'));
        const habitacion = prompt('Ingrese el tipo de habitacion del cliente');
        const cantidadNoches = parseInt(prompt('Ingrese la cantidad de noches a hospedarse del cliente'));

        clientes.push(new Cliente(nombre, edad, habitacion, cantidadNoches));

    } while ( confirm('Desea agregar otro cliente?') )



}

/**
 * 
 * @param { array } arrayClientes
 */
const verClientes = (arrayClientes) => {

    for (const cliente of arrayClientes) {

        console.log(cliente.nombre);
        console.log(cliente.edad);
        console.log(cliente.habitacion);
        console.log(cliente.cantidadNoches);

    }



}


const nombreAdministrador = prompt('Bienvenido administrador, ingrese su nombre para comenzar a trabajar');

console.log(nombreAdministrador);

alert(`Hola ${nombreAdministrador.toUpperCase()}, A continuacion se le mostrara una lista con las acciones disponibles para hacer`);

// Menu principal
let accionIngresada = prompt(`Ingrese la opcion de la accion que desea realizar\n A) Ver todos los clientes ingresados\n B) Agregar nuevo cliente\n C) Filtrar Cliente\n D) Eliminar un cliente`).toUpperCase();

while (!['A', 'B', 'C', 'D'].includes(accionIngresada)) {
    accionIngresada = prompt(`${'Opcion Incorrecta!!'.toUpperCase()}\nIngrese la opcion de la accion que desea realizar\n A) Ver todos los clientes ingresados\n B) Agregar nuevo cliente\n C) Filtrar Cliente\n D) Eliminar un cliente`).toUpperCase();
}

console.log(accionIngresada);

// Ingreso a la opcion elegida
switch (accionIngresada) {

    case 'A':
        console.log('La opcion elegida es la A');

        // LLAMAR A FUNCION VER TODOS LOS CLIENTES INGRESADOS

        verClientes(clientes);

        break;

    case 'B':
        console.log('La opcion elegida es la B');

        // LLAMAR A LA FUNCION AGREGAR NUEVO CLIENTE

        agregarCliente();


        break;

    case 'C':
        console.log('La opcion elegida es la C');

        // LLAMAR A FUNCION FILTRAR CLIENTE
        break;

    case 'D':
        console.log('La opcion elegida es la D');

        // LLAMAR A FUNCION ELIMINAR UN CLIENTE
        break;

    default:
        break;

}



