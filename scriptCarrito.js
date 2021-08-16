let carrito = document.querySelector('#muestra');
let resultados = document.querySelector('#totales');
let regresoMain = document.querySelector('#mainReturn');
let regresoConsole = document.querySelector('#consolaReturn');
let regresoPs = document.querySelector('#psReturn');
let regresoXbox = document.querySelector('#xboxReturn');
let regresoNintendo = document.querySelector('#nintendoReturn');

let templateCarrito = document.querySelector("#template-carrito").content;
let templateResults = document.querySelector('#template-totales').content;
const fragment = document.createDocumentFragment();

let productosPs5 = JSON.parse(localStorage.getItem('productos Ps5'));
let productosXbox = JSON.parse(localStorage.getItem('productos Xbox'));
let productosNtnd = JSON.parse(localStorage.getItem('productos Nintendo'));
let productosConsole = JSON.parse(localStorage.getItem('productos Consola'));
let productos = [];

// concatenando para crear los nuevos arreglos:
if (productosPs5 == null && productosXbox == null && productosNtnd == null && productosConsole == null) {
    productos = []
} else if (productosXbox == null && productosNtnd == null && productosConsole == null) {
    productos = productosPs5
} else if (productosPs5 == null && productosNtnd == null && productosConsole == null) {
    productos = productosXbox
} else if (productosPs5 == null && productosXbox == null && productosConsole == null) {
    productos = productosNtnd
} else if (productosPs5 == null && productosXbox == null && productosNtnd == null) {
    productos = productosConsole
    //---------------------------------------
} else if (productosPs5 == null && productosXbox == null) {
    productos = productosConsole.concat(productosNtnd)
} else if (productosPs5 == null && productosNtnd == null) {
    productos = productosXbox.concat(productosConsole)
} else if (productosPs5 == null && productosConsole == null) {
    productos = productosXbox.concat(productosNtnd)
} else if (productosXbox == null && productosNtnd == null) {
    productos = productosPs5.concat(productosConsole)
} else if (productosXbox == null && productosConsole == null) {
    productos = productosPs5.concat(productosNtnd)
} else if (productosNtnd == null && productosConsole == null) {
    productos = productosPs5.concat(productosXbox)
    //--------------------------------------------------
} else if (productosPs5 == null) {
    productos = productosXbox.concat(productosNtnd, productosConsole)
} else if (productosXbox == null) {
    productos = productosPs5.concat(productosNtnd, productosConsole)
} else if (productosNtnd == null) {
    productos = productosPs5.concat(productosXbox, productosConsole)
} else if (productosConsole == null) {
    productos = productosPs5.concat(productosXbox, productosNtnd)
    //------------------------------------------------------
} else {
    productos = productosPs5.concat(productosXbox, productosNtnd, productosConsole)
}
document.addEventListener('DOMContentLoaded', () => {
    pintarCarrito()
})


carrito.addEventListener('click', e => {
    aumentaDisminuye(e);
})

regresoMain.addEventListener('click', e => {
    if (productos.length == 0) {
        pintarCarrito();
    } else {
        alertaConfirma(e);
    }
})
regresoPs.addEventListener('click', e => {
    if (productos.length == 0) {
        pintarCarrito();
    } else {
        alertaConfirma(e);
    }
})
regresoXbox.addEventListener('click', e => {
    if (productos.length == 0) {
        pintarCarrito();
    } else {
        alertaConfirma(e);
    }
})
regresoNintendo.addEventListener('click', e => {
    if (productos.length == 0) {
        pintarCarrito();
    } else {
        alertaConfirma(e);
    }
})
regresoConsole.addEventListener('click', e => {
    if (productos.length == 0) {
        pintarCarrito();
    } else {
        alertaConfirma(e);
    }
})

const pintarCarrito = () => {
    carrito.innerHTML = ''
    productos.forEach((p) => {
        const { id, imagen, precio, titulo, cantidad } = p;
        templateCarrito.querySelector('h5').textContent = titulo;
        templateCarrito.querySelector('img').setAttribute('src', imagen);
        templateCarrito.querySelector('p').textContent = precio;
        templateCarrito.querySelector('th').textContent = id;
        templateCarrito.querySelector('span').textContent = cantidad;
        templateCarrito.querySelector('.btn-success').dataset.id = id
        templateCarrito.querySelector('.btn-danger').dataset.id = id
        const clone = templateCarrito.cloneNode(true);
        fragment.appendChild(clone)
    })
    carrito.appendChild(fragment);

    pintarResults()
}

const alertaConfirma = e => {
    e.preventDefault();

    let opcion = confirm("Si sale, se perderan los cambios\n\n ¿continuar?")
    if (opcion === true) {
        window.open("./index.html", "_self");
        localStorage.clear();
    } else {
        open("./carrito.html", "_self");
    }
    e.stopPropagation();

}

const pintarResults = () => {
    resultados.innerHTML = ''
    const ncantidad = Object.values(productos).reduce((acc, { cantidad }) => acc + cantidad, 0)
    //console.log(ncantidad)
    const nprecio = Object.values(productos).reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0)
    //console.log(nprecio)

    if (ncantidad === 0) {
        resultados.innerHTML = `<th scope="row" colspan="5">Carrito vacío - Vuelva a la tienda y seleccione sus productos</th>`
        return
    }
    if (ncantidad >= 1) {
        resultados.innerHTML = ''
        templateResults.querySelectorAll('td')[0].textContent = ncantidad;
        templateResults.querySelector('span').textContent = nprecio;
        const clone = templateResults.cloneNode(true);
        fragment.appendChild(clone);
        resultados.appendChild(fragment);

        const limpiar = document.querySelector('#vaciar');

        limpiar.addEventListener('click', () => {
            productos = [];
            localStorage.clear();
            pintarCarrito()

        })
    }

}


const aumentaDisminuye = e => {

    if (e.target.classList.contains('btn-success')) {
        let filtro = e.target.dataset.id;
        let objeto = productos.find(cant => cant.id == filtro);
        objeto.cantidad = productos.find(cant => cant.id == filtro).cantidad + 1;
        objeto = { ...productos }
        pintarCarrito()
    }
    if (e.target.classList.contains('btn-danger')) {

        let filtro = e.target.dataset.id;
        let objeto = productos.find(cant => cant.id == filtro);
        objeto.cantidad = productos.find(cant => cant.id == filtro).cantidad - 1;

        console.log(objeto)

        if (objeto.cantidad === 0) {

            const index = productos.indexOf(objeto)
            productos.splice(index, 1);

        } else {
            objeto = { ...productos }
        }
        pintarCarrito()
    }
    e.stopPropagation();
}
