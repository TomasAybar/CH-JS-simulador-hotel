
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

const menuPrincipal = () => {

    let accionIngresada = prompt(`Ingrese la opcion de la accion que desea realizar\n A) Ver todos los clientes ingresados\n B) Agregar nuevo cliente\n C) Filtrar Cliente\n D) Eliminar un cliente\n E) Salir`).toUpperCase();

    while (!['A', 'B', 'C', 'D', 'E'].includes(accionIngresada)) {

        accionIngresada = prompt(`${'Opcion Incorrecta!!'.toUpperCase()}\nIngrese la opcion de la accion que desea realizar\n A) Ver todos los clientes ingresados\n B) Agregar nuevo cliente\n C) Filtrar Cliente\n D) Eliminar un cliente\n E) Salir`).toUpperCase();

    }
    
    
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

            menuFiltrarCliente();
            break;
    
        case 'D':
            console.log('La opcion elegida es la D');
    
            // LLAMAR A FUNCION ELIMINAR UN CLIENTE
            break;
        
        case 'E':
            console.log('la opcion elegida es la D');
    
            // LLAMAR A LA FUNCION SALIR

            salir();
    
            break;
    
        default:
            break;
    
    }

}

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

    // LLAMAR A LA FUNCION MENU PRINCIPAL

    menuPrincipal();


}

/**
 * 
 * @param { array } arrayClientes
 */
const verClientes = (arrayClientes) => {


    let clientes = arrayClientes.map(cliente => `\nNOMBRE: ${ cliente.nombre }\nEDAD: ${cliente.edad }\nHABITACION: ${ cliente.habitacion }\nNOCHES: ${ cliente.cantidadNoches }\n`)

    alert(clientes);


}

const salir = () => {

    alert(`Muchas gracias ${ nombreAdministrador.toUpperCase() } por usar el administrador del hotel codeFull, vuelva pronto!`)

}

const menuFiltrarCliente = () => {

    let accionIngresada = prompt(`Ingrese la accion que desea realizar\n A) Filtrar por nombre de cliente\n B) Filtrar por edad\n C) Filtrar por tipo de habitacion\n D) Filtrar por cantidad de noches\n E) Volver al menu principal`).toUpperCase();

    while( !['A', 'B', 'C', 'D'].includes(accionIngresada) ) {

            accionIngresada = prompt(`${'Opcion Incorrecta!!'.toUpperCase()}\nIngrese la accion que desea realizar\n A) Filtrar por nombre de cliente\n B) Filtrar por edad\n C) Filtrar por tipo de habitacion\n D) Filtrar por cantidad de noches\n E) Volver al menu principal`).toUpperCase();

    }   

    switch (accionIngresada) {
        case 'A':

            // LLAMAR A FUNCION FILTRAR POR NOMBRE DE CLIENTE
            
            break;

        case 'B':

            // LLAMAR A FUNCION FILTRAR POR EDAD
            
            break;

        case 'C':

            // LLAMAR A FUNCION FILTRAR POR TIPO DE HABITACION
            
            break;

        case 'D':

            // LLAMAR A FUNCION FILTRAR POR CANTIDAD DE NOCHES
            
            break;

        case 'E':

            // LLAMAR A FUNCION FILTRAR POR CANTIDAD DE NOCHES
            menuPrincipal();
            
            break;
    
        default:
            break;
    }

    menuPrincipal();
}

const filtrarPorNombre = () => {

    const nombre = prompt('Ingrese el nombre por el que desea filtrar');

    const clientesFiltrados = clientes.filter(cliente => cliente.nombre.toUpperCase() === nombre.toUpperCase());

    if ( clientesFiltrados.length > 0 ) {

        verClientes(clientesFiltrados);

        menuFiltrarCliente();
    } 
    
    else {

        alert(`No se encontraron nombres con el filtro: ${ nombre }`);

    }

}

const filtrarPorEdad = () => {


}

const filtrarPorHabitacion = () => {

}

const filtrarPorCantNoches = () => {


}

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

const nombreAdministrador = prompt('Bienvenido administrador, ingrese su nombre para comenzar a trabajar');

console.log(nombreAdministrador);

alert(`Hola ${nombreAdministrador.toUpperCase()}, A continuacion se le mostrara una lista con las acciones disponibles para hacer`);


// Menu principal

menuPrincipal();

console.log('codigo finalizado');


