const habitaciones = [
    {
        id: 1,
        nombre: 'Habitación Clásica',
        precioNoche: 2000,
        imagen: 'https://www.argentinohotelmdp.com.ar/wp-content/uploads/0103-900x600.jpg',
        descripcion: 'Las habitaciones son luminosas y disponen de suelo de alfombra o flotante con TV por cable. Baño privado con ducha o bañera. La habitación posee ventilador, calefacción central.',
    },
    {
        id: 2,
        nombre: 'Habitación Superior',
        precioNoche: 2500,
        imagen: 'https://www.argentinohotelmdp.com.ar/wp-content/uploads/2-1-900x600.jpg',
        descripcion: 'Las habitaciones son luminosas y disponen de suelo de alfombra o flotante con TV LED 32" con canales por cable, minibar y aire acondicionado; algunas habitaciones cuentan con caja de seguridad. Baño privado con ducha o bañera.',
    },
    {
        id: 3,
        nombre: 'Habitación Suite',
        precioNoche: 3000,
        imagen: 'https://www.argentinohotelmdp.com.ar/wp-content/uploads/0201-1-900x600.jpg',
        descripcion: 'Con somier matrimonial, confortable área de estar, modernos y amplios baños con secador de cabello, LCD de 32" , aire acondicionado, frigobar. Las mismas poseen piso flotantes o alfombra.',
    },
    {
        id: 4,
        nombre: 'Habitación Deluxe',
        precioNoche: 4000,
        imagen: 'https://www.argentinohotelmdp.com.ar/wp-content/uploads/0302-900x600.jpg',
        descripcion: 'Las habitaciones cuentan con pisos de porcelanato claro o madera flotante, Tv por cable, wifi y baños con ducha o bañera.',
    },
    {
        id: 5,
        nombre: 'Habitación Triple',
        precioNoche: 3500,
        imagen: 'https://www.argentinohotelmdp.com.ar/wp-content/uploads/202201-hab-triples-01-900x600.jpg',
        descripcion: 'Es una habitación compuesta por 3 camas, que pueden ser matrimonial y una individual o tres individuales. Baño con secador de cabello. Tv pantalla plana 32". Posee piso flotante',
    },
    {
        id: 6,
        nombre: 'Habitación Depto',
        precioNoche: 5000,
        imagen: 'https://www.argentinohotelmdp.com.ar/wp-content/uploads/habitacion-depto-01-900x600.jpg',
        descripcion: 'Distribuidos en dos habitaciones, donde encontramos una cama matrimonial en un primer dormitorio y una individual en un segundo dormitorio, moderno baño con secador de cabello. Posee aire acondicionado. Se puede encontrar habitaciones con piso de madera o alfombra.',
    },
    {
        id: 7,
        nombre: 'Apart 1',
        precioNoche: 4500,
        imagen: 'https://www.argentinohotelmdp.com.ar/wp-content/uploads/221020-apart-01-04-900x600.jpg',
        descripcion: 'Nuestro apart cuenta con la comodidad ideal para tres personas. Se trata de un departamento de un ambiente. Posee tv por cable y ventilador, Podrá acceder al primer piso por escalera.',
    },
]

const acciones = [
    {
        id: 1,
        nombre: 'Agregar clientes',
    },
    {
        id: 2,
        nombre: 'Mostrar clientes'
    },
    {
        id: 3,
        nombre: 'Filtrar clientes'
    },
    {
        id: 4,
        nombre: 'Eliminar clientes'
    }
]

let clientes = [];

const formAgregarCliente = document.querySelector('#form-agregar-cliente');
const formAcciones = document.querySelector('#form-acciones');
const formEliminar = document.querySelector('#form-eliminar');
const selectHabitacion = document.querySelector('#form-agregar-cliente select');
const selectAcciones = document.querySelector('#form-acciones select');
const selectEliminar = document.querySelector('#form-eliminar select');
const tablaClientes = document.querySelector('#tabla-clientes');


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

    const habitacionElegida = habitaciones.find(habitacion => habitacion.id === Number(id))

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

createOptions(selectHabitacion, habitaciones);
createOptions(selectAcciones, acciones);
createOptions(selectEliminar, clientes);



formAgregarCliente.addEventListener('submit', (e) => {

    e.preventDefault();

    clientes.push(new Cliente(e.target['nombre'].value, new Date(e.target['edad'].value), buscarHabitacion(e.target['habitacion'].value), Number(e.target['cantNoches'].value), generarID()));

    localStorage.setItem('clientes', JSON.stringify(clientes));

    console.log(clientes);

    formAgregarCliente.reset();
})

formAcciones.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e.target['accion'].value);

    redirigir(e.target['accion'].value);

})

formEliminar.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(e.target['eliminar-cliente'].value);

    console.log(clientes);
    let clientesFiltrados = clientes.filter(cliente => cliente.id != e.target['eliminar-cliente'].value);

    clientes = [...clientesFiltrados];
    console.log(clientes);

    createOptions(selectEliminar, clientesFiltrados);
})

const cambiarEstilo = (elemento, style) => {

    elemento.setAttribute('style', `display: ${style};`);

}

const redirigir = (id) => {

    ocultarTodos();

    switch (Number(id)) {

        case 1:
            console.log('Agregar clientes =  1');

            cambiarEstilo(formAgregarCliente, 'block');

            break;

        case 2:
            console.log('mostrar clientes = 2');

            createTable();

            cambiarEstilo(tablaClientes, 'table');

            break;

        case 3:
            console.log('filtrar clientes = 3');

            break;

        case 4:
            console.log('eliminar clientes = 4');

            createOptions(selectEliminar, clientes);

            cambiarEstilo(formEliminar, 'block');
            break;

        default:
            break;
    }

}