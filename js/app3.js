// data
const HABITACIONES_URL = 'https://63f800195b0e4a127ddeeea3.mockapi.io/api/habitaciones';
const ACCIONES_URL = 'https://63f800195b0e4a127ddeeea3.mockapi.io/api/acciones'


// variables
let clientes = [];
let habitaciones = [];
let acciones = [];


// dom
const formAgregarCliente = document.querySelector('#form-agregar-cliente');
const formAcciones = document.querySelector('#form-acciones');
const formEliminar = document.querySelector('#form-eliminar');
const selectHabitacion = document.querySelector('#form-agregar-cliente select');
const selectAcciones = document.querySelector('#form-acciones select');
const selectEliminar = document.querySelector('#form-eliminar select');
const tablaClientes = document.querySelector('#tabla-clientes');
const inputNacimiento = document.querySelector('#edad');



// funciones
class Cliente {

    constructor(nombre, nacimiento, habitacion, cantidadNoches, id) {

        this.nombre = nombre;
        this.nacimiento = nacimiento;
        this.habitacion = habitacion;
        this.cantidadNoches = cantidadNoches;
        this.id = id;

    }
}

/**
 * Valida el input de fecha de nacimiento para que no se pueda poner una fecha mayor a la actual
 */
const validarInputDate = () => {
    let fechaActual = new Date().toISOString().slice(0, 10);
    inputNacimiento.setAttribute('max', fechaActual)
}

/**
 * Fetch a base de datos de habitaciones
 */
const traerHabitaciones = async () => {

    try {

        const respuesta = await fetch(HABITACIONES_URL)

        habitaciones = await respuesta.json()

        createOptions(selectHabitacion, habitaciones)

    } catch (error) {

        console.log(error)

    }

}

/**
 * Fetch a base de datos de acciones
 */
const traerAcciones = async () => {
    try {

        const respuesta = await fetch(ACCIONES_URL)

        acciones = await respuesta.json()

        createOptions(selectAcciones, acciones);

    } catch (error) {

        console.log(error)

    }
}

/**
 * 
 * @returns {string} id generico
 */
const generarID = () => {
    return Math.random().toString(30).substring(2);
}

/**
 * 
 * @param { select } nodo nodo del select donde se renderizaran las options
 * @param { options } array array de opciones a renderizar
 */
const createOptions = (nodo, array) => {

    nodo.innerHTML = '';

    array.forEach(elementos => {

        nodo.innerHTML += `<option value=${elementos.id}>${elementos.nombre}</option>`

    })

}

/**
 * 
 * @param {number} id id de habitacion
 * @returns habitacion que coincida con el id ingresado
 */
const buscarHabitacion = (id) => {

    const habitacionElegida = habitaciones.find(habitacion => habitacion.id === id)

    return habitacionElegida;

}

/**
 * Crea una tabla con los clientes que existen
 */
const createTable = () => {

    document.querySelector('#tabla-clientes tbody').innerHTML = '';

    clientes.forEach((cliente, index) => {

        document.querySelector('#tabla-clientes tbody').innerHTML += `<tr>
                    <th scope="row">${index + 1}</th>
                    <td>${cliente.nombre}</td>
                    <td>${cliente.habitacion.nombre}</td>
                    <td>${cliente.cantidadNoches}</td>
                </tr>`
    })

}

/**
 * Oculta todas las acciones disponibles con display none
 */
const ocultarTodos = () => {

    formAgregarCliente.style.display = 'none';
    tablaClientes.style.display = 'none';
    formEliminar.style.display = 'none';

}

/**
 * 
 * @param {nodo} elemento elemento del cual se quiere cambiar el display
 * @param {string} type atributo del style, block, none, inline, etc
 */
const cambiarEstilo = (elemento, type) => {

    // elemento.setAttribute('style', `display: ${style};`);

    elemento.style.display = type;

}

/**
 * 
 * @param {number} id recibe el id de la opcion seleccionada, muestra la opcion elegida y oculta las demas
 */
const redirigir = (id) => {

    ocultarTodos();

    switch (Number(id)) {

        case 1:

            cambiarEstilo(formAgregarCliente, 'block');

            break;

        case 2:

            createTable();

            cambiarEstilo(tablaClientes, 'table');

            break;

        case 3:

            createOptions(selectEliminar, clientes);

            cambiarEstilo(formEliminar, 'block');

            break;

        default:
            break;
    }

}

/**
 * Verifico en localStorage si existen clientes, si existen lo igualo a clientes
 */
const verificarStorage = () => {

    if (localStorage.getItem('clientes')) {

        clientes = JSON.parse(localStorage.getItem('clientes'));

    }

}

/**
 * 
 * @param {array} clientes guardo en local storage el array clientes
 */
const setearClientesStorage = (clientes) => {

    localStorage.setItem('clientes', JSON.stringify(clientes));

}


// code
verificarStorage();
traerHabitaciones();
traerAcciones();
validarInputDate();
createOptions(selectEliminar, clientes);


// Formularios
formAgregarCliente.addEventListener('submit', (e) => {

    e.preventDefault();

    clientes.push(new Cliente(e.target['nombre'].value, new Date(e.target['edad'].value), buscarHabitacion(e.target['habitacion'].value), Number(e.target['cantNoches'].value), generarID()));

    setearClientesStorage(clientes);

    formAgregarCliente.reset();

    Swal.fire({
        title: '¡Felicitaciones!',
        text: '¡Cliente agregado con exito!',
        icon: 'success',
    })

})

formAcciones.addEventListener('submit', (e) => {

    e.preventDefault();

    redirigir(e.target['accion'].value);

})

formEliminar.addEventListener('submit', (e) => {

    e.preventDefault();

    Swal.fire({
        title: '¡Atención!',
        text: '¿Estás seguro de que deseas eliminar este cliente?',
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: 'Aceptar',
        denyButtonText: `Cancelar`,
    }).then((result) => {

        if (result.isConfirmed) {

            let clientesFiltrados = clientes.filter(cliente => cliente.id != e.target['eliminar-cliente'].value);

            clientes = [...clientesFiltrados];

            setearClientesStorage(clientes);

            createOptions(selectEliminar, clientesFiltrados);

            Swal.fire('¡Cliente eliminado con éxito!', '', 'success')

        } else {

            Swal.fire('La acción ha sido cancelada', '', 'info')

        }
    })
})

