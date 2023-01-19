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

const agregarCliente = (nombre, edad, habitacion, cantidadNoches) => {
    clientes.push( new Cliente(nombre, edad, habitacion, cantidadNoches) );
}

const mostrarHabitaciones = () => {

    const infoHabitaciones = habitaciones.map(habitacion => `${ habitacion.opcion }) tipo: ${ habitacion.tipo.toUpperCase() } - precio por noche: $${ habitacion.precioNoche } \n` );

    return infoHabitaciones;

}


const confirmRegistro = confirm(`Bienvenido al hotel codeFull\nA continuacion se le mostraran nuestras habitaciones disponibles y precios\nSi esta de acuerdo precione "OK" para continuar con el registro\n\n ${ mostrarHabitaciones() }`);

if ( confirmRegistro ) {

    console.log('Bienvenido');

} else {

    alert('Gracias por su visita');
}

