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
let carrito = [];

const inputIndex = document.querySelector('#input-index');
// const btn = document.querySelector('#btn');
const contenedorCartas = document.querySelector('#contenedor-cards');
const contendorCarrito = document.querySelector('#contendor-offcanvas')

// FUNCIONES
const crearCartas = (arrayCartas) => {

    arrayCartas.forEach(habitacion => {

        contenedorCartas.innerHTML += `<div class="card" style="width: 18rem;" id=${habitacion.id}>
        <img src="${habitacion.imagen}" class="card-img-top" alt="${habitacion.nombre}">
        <div class="card-body">
            <h5 class="card-title">${habitacion.nombre}</h5>
            <p class="card-text">${habitacion.descripcion}</p>
            <button class="btn btn-primary" id=${habitacion.id}>Reservar</button>
        </div>
    </div>`

    })
}

const crearCarta = (carta) => {

    return (
        `<div class="card" style="width: 18rem;">
            <img src="${carta.imagen}" class="card-img-top" alt="${carta.nombre}">
            <div class="card-body">
                <h5 class="card-title">${carta.nombre}</h5>
                <p class="card-text">${carta.descripcion}</p>
                <a href="#" class="btn btn-primary" id="${carta.id}" >Reservar</a>
            </div>
        </div>`
    )

}

const buscarYagregarProducto = (id) => {

    const producto = habitaciones.find(habitacion => habitacion.id == id);

    // console.log(crearCarta(producto));

    carrito.push(producto);
    console.log(carrito);
    // console.log(producto);

}




// crearCartas(carta);
crearCartas(habitaciones);

contenedorCartas.addEventListener('click', (e) => {

    if (e.target.classList[0] === 'btn') {


        buscarYagregarProducto(Number(e.target.id));


    }
})


