/** CLASES */

class Cliente {

    constructor(nombre, edad, habitacion, cantidadNoches) {

        this.nombre = nombre;
        this.edad = edad;
        this.habitacion = habitacion;
        this.cantidadNoches = cantidadNoches;

    }
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

/** FUNCIONES */

// Muesta el menu principal del administrador de clientes
const menuPrincipal = () => {

    let accionIngresada = prompt(`Ingrese la opcion de la accion que desea realizar\n A) Ver todos los clientes ingresados\n B) Agregar nuevo cliente\n C) Filtrar Cliente\n D) Salir`).toUpperCase();

    while (!['A', 'B', 'C', 'D'].includes(accionIngresada)) {

        accionIngresada = prompt(`${'Opcion Incorrecta!!'.toUpperCase()}\nIngrese la opcion de la accion que desea realizar\n A) Ver todos los clientes ingresados\n B) Agregar nuevo cliente\n C) Filtrar Cliente\n D) Salir`).toUpperCase();

    }
    
    
    // Ingreso a la opcion elegida
    switch (accionIngresada) {
    
        case 'A':
    
            // LLAMAR A FUNCION VER TODOS LOS CLIENTES INGRESADOS
            verClientes(clientes);
            menuPrincipal();

            break;
    
        case 'B':
    
            // LLAMAR A LA FUNCION AGREGAR NUEVO CLIENTE
            agregarCliente();
            menuPrincipal();
            break;
    
        case 'C':
    
            // LLAMAR A FUNCION MOSTRAR MENU FILTRAR CLIENTE

            menuFiltrarCliente();
            menuPrincipal();
            break;
    
        case 'D':
    
            // LLAMAR A FUNCION SALIR
            salir();
            break;
    
        default:
            break;
    
    }

    // menuPrincipal();

}

// Muesta el menu de filtrado de clientes
const menuFiltrarCliente = () => {

    let accionIngresada = prompt(`Ingrese la accion que desea realizar\n A) Filtrar por nombre de cliente\n B) Filtrar por edad\n C) Filtrar por tipo de habitacion\n D) Filtrar por cantidad de noches\n E) Volver al menu principal`).toUpperCase();

    while( !['A', 'B', 'C', 'D', 'E'].includes(accionIngresada) ) {

            accionIngresada = prompt(`${'Opcion Incorrecta!!'.toUpperCase()}\nIngrese la accion que desea realizar\n A) Filtrar por nombre de cliente\n B) Filtrar por edad\n C) Filtrar por tipo de habitacion\n D) Filtrar por cantidad de noches\n E) Volver al menu principal`).toUpperCase();

    }   

    switch (accionIngresada) {
        case 'A':

            // LLAMAR A FUNCION FILTRAR POR NOMBRE DE CLIENTE

            filtrarPorNombre();
            menuFiltrarCliente();
            
            break;

        case 'B':

            // LLAMAR A FUNCION FILTRAR POR EDAD

            filtrarPorEdad();
            menuFiltrarCliente();
            
            break;

        case 'C':

            // LLAMAR A FUNCION FILTRAR POR TIPO DE HABITACION
            filtrarPorHabitacion();
            menuFiltrarCliente();
            
            break;

        case 'D':

            // LLAMAR A FUNCION FILTRAR POR CANTIDAD DE NOCHES
            filtrarPorCantNoches();
            menuFiltrarCliente();
            
            break;

        case 'E':

            // SALIR: VOLVER AL MENU PRINCIPAL
            // menuPrincipal();
            
            break;
    
        default:
            break;
    }

}

// Agrega clientes nuevos
const agregarCliente = () => {

    do {

        const nombre = prompt('Ingrese nombre del cliente');
        const edad = validarNumero('Ingrese edad del cliente');
        const habitacion = eleccionDeHabitacion();
        const cantidadNoches = validarNumero('Ingrese la cantidad de noches a hospedarse del cliente');

        clientes.push(new Cliente(nombre, edad, habitacion, cantidadNoches));

    } while ( confirm('Desea agregar otro cliente?') )

    // LLAMAR A LA FUNCION MENU PRINCIPAL

    menuPrincipal();


}

// Muestra los clientes de un array que se le pase por parametro
const verClientes = (arrayClientes) => {


    let clientes = arrayClientes.map(cliente => `\nNOMBRE: ${ cliente.nombre }\nEDAD: ${cliente.edad }\nHABITACION: ${ cliente.habitacion.tipo }\nNOCHES: ${ cliente.cantidadNoches }\n`)

    if ( arrayClientes.length > 0 ) {

        alert(clientes);

    }

    else {

        alert('No existen clientes para mostrar');
        
    }
    
    // menuPrincipal();


}

// Muestra una alerta de salida
const salir = () => {

    alert(`Muchas gracias por usar el administrador del hotel codeFull, vuelva pronto!`)

}

// Busca los clientes que coincidan con el nombre que se ingrese por prompt
const filtrarPorNombre = () => {

    const nombre = prompt('Ingrese el nombre por el que desea filtrar');

    const clientesFiltrados = clientes.filter(cliente => cliente.nombre.toUpperCase() === nombre.toUpperCase());

    if ( clientesFiltrados.length > 0 ) {

        verClientes(clientesFiltrados);

    } 
    
    else {

        alert(`No se encontraron nombres con el filtro: ${ nombre }`);

    }

}

// Busca los clientes que coincidan con la edad que se ingrese por prompt
const filtrarPorEdad = () => {

    // const edad = parseInt( prompt('Ingrese la edad por el que desea filtrar') );
    const edad = validarNumero('Ingrese la edad por el que desea filtrar');

    const clientesFiltrados = clientes.filter(cliente => cliente.edad === edad);

    if ( clientesFiltrados.length > 0 ) {

        verClientes(clientesFiltrados);
        
    } 
    
    else {

        alert(`No se encontraron edades con el filtro: ${ edad }`);

    }

}

// Busca los clientes que coincidan con el tipo de habitacion que se ingrese por prompt
const filtrarPorHabitacion = () => {

    const habitacionesOpciones = habitaciones.map(habitacion => `\n${ habitacion.opcion }) ${ habitacion.tipo.toUpperCase() }\n`);

    let opcionHabitacion = prompt(`Ingrese el tipo de habitacion del cliente:\n ${ habitacionesOpciones }`).toUpperCase();


    while (!['A', 'B', 'C'].includes(opcionHabitacion)) {

        opcionHabitacion = prompt(`${'Opcion Incorrecta!!'.toUpperCase()}\nIngrese el tipo de habitacion del cliente:\n ${ habitacionesOpciones }`).toUpperCase();

    }

    const clientesFiltrados = clientes.filter(cliente => cliente.habitacion.opcion === opcionHabitacion);

    if ( clientesFiltrados.length > 0 ) {

        verClientes(clientesFiltrados);
        
    } 
    
    else {

        const tipoHabitacion = habitaciones.find(habitacion => habitacion.opcion === opcionHabitacion);
        alert(`No se encontraron clientes con el filtro: ${ tipoHabitacion.tipo }`);

    }

}

// Busca los clientes que coincidan con la cantidad de noches que se ingrese por prompt
const filtrarPorCantNoches = () => {

    // const cantidadNoches = parseInt( prompt('Ingrese la cantidad de noches por el que desea filtrar') );
    const cantidadNoches = validarNumero('Ingrese la cantidad de noches por el que desea filtrar');

    const clientesFiltrados = clientes.filter(cliente => cliente.cantidadNoches === cantidadNoches);

    if ( clientesFiltrados.length > 0 ) {

        verClientes(clientesFiltrados);
        
    } 
    
    else {

        alert(`No se encontraron edades con el filtro: ${ cantidadNoches }`);

    }

}

// Muestra las distintas habitacion a elegir y devuelve la eleccion
const eleccionDeHabitacion = () => {

    const habitacionesOpciones = habitaciones.map(habitacion => `\n${ habitacion.opcion }) ${ habitacion.tipo.toUpperCase() } - $${ habitacion.precioNoche }\n`)

    let opcionHabitacion = prompt(`Ingrese el tipo de habitacion del cliente:\n ${ habitacionesOpciones }`).toUpperCase();


    while (!['A', 'B', 'C'].includes(opcionHabitacion)) {

        opcionHabitacion = prompt(`${'Opcion Incorrecta!!'.toUpperCase()}\nIngrese el tipo de habitacion del cliente:\n ${ habitacionesOpciones }`).toUpperCase();

    }


    return habitaciones.find(hab => hab.opcion === opcionHabitacion);

}

// recibe una pregunta para pasar en el prompt y devuelve el numero si es que es valido
const validarNumero = ( pregunta ) => {

    let numero = parseInt(prompt(pregunta));

    while( isNaN(numero) || numero < 1 ) {

        numero = parseInt(prompt(`El numero es erroneo:\n${ pregunta }`));
    
    }

    return numero;

}


alert(`Bienvenido administrador, a continuacion se le mostrara una lista con las acciones disponibles para hacer en codeFull`);

// Menu principal
menuPrincipal();

console.log('codigo finalizado');


