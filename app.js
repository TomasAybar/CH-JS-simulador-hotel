// Hoteleria

/**
 * Consultarle al usuario el nombre
 * Darle la bienvenida y pasarle la informacion de precios y habitaciones del hotel para darle a elegir la opcion
 * una vez elegida su opcion, sumarle el precio del servicio de cama
 * preguntarle si desea elegir algun servicio extra
 * si dice que si, mostrarle las opciones y agregarlas
 * si dice que no, terminar la operacion con los valores de todo
 * 
 * 
 */

// Recibe como parametro la eleccion de la habitacion
const SwElegirHabitacion = ( eleccion ) => {

    switch (eleccion) {

        case 'A':
            alert('Ha seleccionado habitacion base, tiene un valor de $3000 la noche');

            const confirmacionDeServicio1 = confirm('Desea agregar algun servicio extra de mas, como por ejemplo, wifi, tv, desayuno?');

            if ( confirmacionDeServicio1 ) {

                elegirServicioExtra();

            } else {

                resultadoFinal();
                break;

            }

        case 'B':
            alert('Ha seleccionado habitacion full, tiene un valor de $3500 la noche');
            
            const confirmacionDeServicio2 = confirm('Desea agregar algun servicio extra de mas, como por ejemplo, wifi, tv, desayuno?');

            if ( confirmacionDeServicio2 ) {

                elegirServicioExtra();

            } else {

                resultadoFinal();
                break;

            }

        case 'C':
            alert('Ha seleccionado habitacion premium, tiene un valor de $4000 la noche');
            
            const confirmacionDeServicio3 = confirm('Desea agregar algun servicio extra de mas, como por ejemplo, wifi, tv, desayuno?');

            if ( confirmacionDeServicio3 ) {

                elegirServicioExtra();

            } else {

                resultadoFinal();
                break;

            }
    
        default:
            break;
    }
}

const deseaAgregarMasServicios = (servicio) => {

    const agregarMasServicios = confirm(`Ha seleccionado servicio de "${ servicio.toUpperCase() }", desea seleccionar un servicio mas?`);

            if ( agregarMasServicios ) {

                // deberia volver a entrar al switch
                elegirServicioExtra();

            } else {

                resultadoFinal();

            }
}

const resultadoFinal = (tipoDeHabitacion, servicios) => {

    alert(`Usted sera hospedad en la habitacion ${ tipoDeHabitacion }

            Y se agregaron los servicios de ${ servicios }

            Disfrute su estadia!

    `)

}

const elegirServicioExtra = () => {

    const elegirServicio = prompt(`Seleccione un servicio:\n A) Wifi\n B) Desayuno a la habitacion\n C) TV 4K\n`);

    switch (elegirServicio) {

        case 'A':

            // alert('Se ha agregado wifi a su hospedaje');
            deseaAgregarMasServicios('wifi');

            break;

        case 'B':

            // alert('Se ha agregado desayuno a la habitacion a su hospedaje');
            deseaAgregarMasServicios('desayuno a la habitacion');

            break;
        case 'C':

            // alert('Se ha agregado TV 4K a su hospedaje');
            deseaAgregarMasServicios('tv 4k');

            break;
    }

}

// Pide el nombre al usuario
const nombreApellido = prompt('Escriba su nombre y apellido');

// Cantidad de noches a hospedarse
const cantidadNoches = parseInt(prompt(`Bienvenido al hotel codeFull ${ nombreApellido }.\nA continuacion te vamos a pedir que escribas la cantidad de noches que te vas a hospedar.`)); 

const valorPorNocheBase = 3000;
const valorPorNocheFull = 3500;
const valorPorNochePremium = 4000;

const confirmacionDeHospedaje = confirm(`${ nombreApellido }, el valor por noche es de $${ valorPorNocheBase } en la habitacion base.\nEl valor total es de $${ cantidadNoches*valorPorNocheBase }.\nPresione "OK" para continuar, de lo contrario presione "Cancel"`);

// condicional si decide o no hospedarse
if ( confirmacionDeHospedaje ) {

    // Elije la habitacion
    const elegirHabitacion = prompt(`Bienvenido a hotel codeFull Disfrute su estadia.\nSeleccione su habitacion:\n A) Habitacion base\n B) Habitacion full\n C) Habitacion premium\n`);

    
    SwElegirHabitacion(elegirHabitacion);


} else {

    alert('Gracias por su consulta igualmente..');

}
