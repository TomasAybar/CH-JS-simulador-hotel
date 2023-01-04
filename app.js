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


const nombreApellido = prompt('Escriba su nombre y apellido');

console.log(nombreApellido);


const cantidadNoches = parseInt(prompt(`Bienvenido al hotel codeFull ${ nombreApellido }.\nA continuacion te vamos a pedir que escribas la cantidad de noches que te vas a hospedar.`)); 

console.log(cantidadNoches);

const valorPorNoche = 3000;
const opcionElegida = confirm(`${ nombreApellido }, el valor por noche es de $${ valorPorNoche } en la habitacion base.\nEl valor total es de $${ cantidadNoches*valorPorNoche }.\nPresione "OK" para continuar, de lo contrario presione "Cancel"`);

if ( opcionElegida ) {

    console.log('Bienvenido a hotel codeFull Disfrute su estadia');

    const elegirHabitacion = prompt(`Seleccione su habitacion\n A) Habitacion base\n B) Habitacion full\n C) Habitacion premium\n`);

    switch (elegirHabitacion) {

        case 'A':
            alert('Ha seleccionado habitacion base, tiene un valor de $3000 la noche');
            break;
        case 'B':
            alert('Ha seleccionado habitacion full, tiene un valor de $3500 la noche');
            
            break;
        case 'C':
            alert('Ha seleccionado habitacion premium, tiene un valor de $4000 la noche');
            
            break;
    
        default:
            break;
    }

} else {

    console.log('Gracias por su consulta igualmente..');

}


