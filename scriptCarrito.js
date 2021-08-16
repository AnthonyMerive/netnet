let carrito = document.querySelector('#muestra');
let templateCarrito = document.querySelector("#template-carrito").content;
const fragment = document.createDocumentFragment();

let productosPs5 = JSON.parse(localStorage.getItem('productos Ps5'));
let productosXbox = JSON.parse(localStorage.getItem('productos Xbox'));
let productosNtnd = JSON.parse(localStorage.getItem('productos Nintendo'));
let productosConsole = JSON.parse(localStorage.getItem('productos Consola'));
let productos = [];

// concatenando para crear los arreglos:
if (productosPs5 == null && productosXbox == null && productosNtnd == null && productosConsole == null) {
    productos = []
} else if (productosXbox == null && productosNtnd == null && productosConsole == null) {
    productos = productosPs5
} else if (productosPs5 == null && productosNtnd == null && productosConsole == null) {
    productos = productosXbox
} else if (productosPs5 == null && productosXbox == null && productosConsole == null) {
    productos = productosNtnd
}else if(productosPs5 == null && productosXbox == null && productosNtnd == null){
    productos = productosConsole
//---------------------------------------
}else if(productosPs5 == null && productosXbox == null){
    productos = productosConsole.concat(productosNtnd)
}else if(productosPs5 == null && productosNtnd == null){
    productos = productosXbox.concat(productosConsole)
}else if(productosPs5 == null && productosConsole == null){
    productos = productosXbox.concat(productosNtnd)
}else if(productosXbox == null && productosNtnd == null){
    productos = productosPs5.concat(productosConsole)
}else if(productosXbox == null && productosConsole == null){
    productos = productosPs5.concat(productosNtnd)
}else if(productosNtnd == null && productosConsole == null){
    productos = productosPs5.concat(productosXbox)
//--------------------------------------------------
}else if(productosPs5 == null){
    productos = productosXbox.concat(productosNtnd, productosConsole)
}else if(productosXbox == null){
    productos = productosPs5.concat(productosNtnd, productosConsole)
}else if(productosNtnd == null){
    productos = productosPs5.concat(productosXbox, productosConsole)
}else if(productosConsole == null){
    productos = productosPs5.concat(productosXbox, productosNtnd)
//------------------------------------------------------
}else{
productos = productosPs5.concat(productosXbox, productosNtnd, productosConsole)}

if (productos) {
    productos.forEach((p) => {
        const { id, imagen, precio, titulo } = p;
        templateCarrito.querySelector('h5').textContent = titulo;
        templateCarrito.querySelector('img').setAttribute('src', imagen);
        templateCarrito.querySelector('p').textContent = precio;
        templateCarrito.querySelector('th').textContent = id;
        const clone = templateCarrito.cloneNode(true);
        fragment.appendChild(clone)
    })
    carrito.appendChild(fragment);

    let cantidad = carrito.querySelector("#cantidad");
    let green = carrito.querySelector(".btn-success");
    let value = 1;
    //green.addEventListener('click', confirmaCant());
    green.addEventListener('click', e => {
        confirmaCant(e);
    })
    
function confirmaCant() {
    cantidad.setAttribute('value', value++);
    
}
}

