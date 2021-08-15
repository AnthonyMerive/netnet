let carrito = document.querySelector('#muestra');
let templateCarrito = document.querySelector("#template-carrito").content;
const fragment = document.createDocumentFragment();

let productos = JSON.parse(localStorage.getItem('productos Ps5'));
let productosXbox = JSON.parse(localStorage.getItem('productos Xbox'));
let productosNtnd= JSON.parse(localStorage.getItem('productos Nintendo'));
let productosConsole= JSON.parse(localStorage.getItem('productos Consola'));
document.addEventListener('DOMContentLoaded', () => {
    cargarCarrito(productos);
    cargarCarritoXbox(productosXbox);
    cargarCarritoNtnd(productosNtnd);
    cargarCarritoConsola(productosConsole);
})

const cargarCarrito = productos => {

    productos.forEach((p) => {
        const { id, imagen, precio, titulo } = p;
        templateCarrito.querySelector('h5').textContent=titulo;
        templateCarrito.querySelector('img').setAttribute('src', imagen);
        templateCarrito.querySelector('p').textContent=precio;
        templateCarrito.querySelector('th').textContent=id;
        const clone =templateCarrito.cloneNode(true);
        fragment.appendChild(clone)
    })
    carrito.appendChild(fragment);
}

const cargarCarritoXbox = productos => {

    productos.forEach((p) => {
        const { id, imagen, precio, titulo } = p;
        templateCarrito.querySelector('h5').textContent=titulo;
        templateCarrito.querySelector('img').setAttribute('src', imagen);
        templateCarrito.querySelector('p').textContent=precio;
        templateCarrito.querySelector('th').textContent=id;
        const clone =templateCarrito.cloneNode(true);
        fragment.appendChild(clone)
    })
    carrito.appendChild(fragment);
}

const cargarCarritoNtnd = productos => {

    productos.forEach((p) => {
        const { id, imagen, precio, titulo } = p;
        templateCarrito.querySelector('h5').textContent=titulo;
        templateCarrito.querySelector('img').setAttribute('src', imagen);
        templateCarrito.querySelector('p').textContent=precio;
        templateCarrito.querySelector('th').textContent=id;
        const clone =templateCarrito.cloneNode(true);
        fragment.appendChild(clone)
    })
    carrito.appendChild(fragment);
}

const cargarCarritoConsola = productos => {

    productos.forEach((p) => {
        const { id, imagen, precio, titulo } = p;
        templateCarrito.querySelector('h5').textContent=titulo;
        templateCarrito.querySelector('img').setAttribute('src', imagen);
        templateCarrito.querySelector('p').textContent=precio;
        templateCarrito.querySelector('th').textContent=id;
        const clone =templateCarrito.cloneNode(true);
        fragment.appendChild(clone)
    })
    carrito.appendChild(fragment);
}