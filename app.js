// Hoteleria

// VARIABLES
const precioNocheBase = 3000;
const precioNocheFull = 3500;
const precioNochePremium = 4000;

const precioServicioWifi = 1000;
const precioServicioDesayuno = 2000;
const precioServicioTV = 1200;

let tipoDeHabitacion = '';
let servicio = '';

// FUNCIONES

// Recibe como parametro la eleccion de la habitacion y ejecuta funcion alerta habitacion
const seleccionHabitacion = (eleccion) => {

    let quieroAgregarUnServicioExtra;

    switch (eleccion) {


        case 'A':

            quieroAgregarUnServicioExtra = alertaSeleccionHabitacion('base', precioNocheBase);

            if (quieroAgregarUnServicioExtra) {

                seleccionarServicio();

            } else {

                resultadoFinal(0);
                break;

            }

        case 'B':

            quieroAgregarUnServicioExtra = alertaSeleccionHabitacion('full', precioNocheFull);

            if (quieroAgregarUnServicioExtra) {

                seleccionarServicio();

            } else {

                resultadoFinal(0);
                break;

            }

        case 'C':

            quieroAgregarUnServicioExtra = alertaSeleccionHabitacion('premium', precioNochePremium);

            if (quieroAgregarUnServicioExtra) {

                seleccionarServicio();

            } else {

                resultadoFinal(0);
                break;

            }

        default:
            break;
    }
}

// Muestra el servicio y precio de servicio elegido y ejecuta la fn resultadoFinal();
const alertaSeleccionServicio = (precioServicio) => {

    alert(`Ha seleccionado servicio de "${servicio.toUpperCase()}" y se le agregara un valor extra de $${precioServicio}`);

    resultadoFinal(precioServicio);

}

// Seleccion de un servicio extra y muestreo de mensaje del servicio seleccionado
const seleccionarServicio = () => {

    let elegirServicio = prompt(`Seleccione un servicio: \nA) Wifi - $${precioServicioWifi} \nB) Desayuno a la habitacion $${precioServicioDesayuno}\nC) TV 4K - $${precioServicioTV}`).toUpperCase();

    while(elegirServicio !== 'A' && elegirServicio !== 'B' && elegirServicio !== 'C') {
        
        elegirServicio = prompt(`Opcion incorrecta vuelva a seleccionar su servicio.\nSeleccione su servicio:\nA) Wifi - $${precioServicioWifi}\nB) Desayuno a la habitacion - $${precioServicioDesayuno}\nC) TV 4K - $${precioServicioTV}`).toUpperCase();
    }

    switch (elegirServicio) {

        case 'A':

            servicio = 'wifi';
            alertaSeleccionServicio(precioServicioWifi);

            break;

        case 'B':

            servicio = 'desayuno a la habitacion';
            alertaSeleccionServicio(precioServicioDesayuno);

            break;
        case 'C':

            servicio = 'tv 4k';
            alertaSeleccionServicio(precioServicioTV);

            break;
        
        default:
            break;
    }

}

// Imprime los resultados finales
const resultadoFinal = (precioServicio) => {

    let valorHabitacion = 0;

    switch (tipoDeHabitacion) {
        case 'base':
            valorHabitacion = precioNocheBase;
            break;

        case 'full':
            valorHabitacion = precioNocheFull;
            break;

        case 'premium':
            valorHabitacion = precioNochePremium;
            break;

        default:
            break;
    }


    if ( precioServicio === 0 ) {

        alert(`
                Usted sera hospedado en la habitacion "${tipoDeHabitacion.toUpperCase()}" ${cantidadNoches} noches. = $${valorHabitacion * cantidadNoches}

                No se han agregado servicios extras = $${ precioServicio }
    
                El total a abonar es de $${ valorHabitacion * cantidadNoches }
    
                Disfrute su estadia!
    
        `)

    } else {

        alert(`
                Usted sera hospedado en la habitacion "${tipoDeHabitacion.toUpperCase()}" ${cantidadNoches} noches. = $${valorHabitacion * cantidadNoches}
    
                Y se agrego el servicio de "${servicio.toUpperCase()}" por un valor de $${precioServicio}
    
                El total a abonar es de $${(valorHabitacion * cantidadNoches) + precioServicio}
    
                Disfrute su estadia!
    
        `)
    }


}

// Muesta la habitacion y el valor de seleccionado y devuelve un booleano a la pregunta si desea servicios
const alertaSeleccionHabitacion = (eleccion, precioNoche) => {

    alert(`Ha seleccionado habitacion "${eleccion.toUpperCase()}", tiene un valor de $${precioNoche} la noche`);

    tipoDeHabitacion = eleccion;

    return confirm('Desea agregar algun servicio extra de mas, como por ejemplo, wifi, tv, desayuno?');

}

// Pide el nombre al usuario
const nombre = prompt('Escriba su nombre por favor..');

// Cantidad de noches a hospedarse
let cantidadNoches = parseInt(prompt(`Bienvenido al hotel codeFull ${nombre}.\nA continuacion te vamos a pedir que escribas la cantidad de noches que te vas a hospedar.`));

    while( isNaN(cantidadNoches) || cantidadNoches < 1 ) {

    cantidadNoches = parseInt(prompt(`La cantidad de noches a ingresar debe ser un numero y como minimo 1`));

}

const confirmacionDeHospedaje = confirm(`${nombre}, el valor por noche es de $${precioNocheBase} en la habitacion base.\nEl valor total es de $${cantidadNoches * precioNocheBase}.\nPresione "OK" para continuar, de lo contrario presione "Cancel"`);

// condicional si decide o no hospedarse
if (confirmacionDeHospedaje) {

    // Elije la habitacion
    let elegirHabitacion = prompt(`Bienvenido a hotel codeFull Disfrute su estadia.\nSeleccione su habitacion:\n A) Habitacion base\n B) Habitacion full\n C) Habitacion premium\n`).toUpperCase();

    while ( elegirHabitacion !== 'A' && elegirHabitacion !== 'B' && elegirHabitacion !== 'C' ) {

        elegirHabitacion = prompt(`Opcion incorrecta vuelva a seleccionar su habitacion.\nSeleccione su habitacion:\nA) Habitacion base\nB) Habitacion full\nC) Habitacion premium`).toUpperCase();

    }

    seleccionHabitacion(elegirHabitacion);


} else {

    alert('Gracias por su consulta igualmente..');

}
