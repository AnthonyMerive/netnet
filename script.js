//Carga de juegos en items

import { playstation, xbox, nintendo, consolas } from './data.js';

const ps = document.getElementById('templatePs').content;
const xb = document.getElementById('templateXbox').content;
const nd = document.getElementById('templateNintendo').content;
const cn = document.getElementById('templateConsola').content;
const fragment = document.createDocumentFragment();
const psItems = document.getElementById('psItems');
const xboxItems = document.getElementById('xboxItems');
const nintendoItems = document.getElementById('nintendoItems');
const consolaItems = document.getElementById('consolaItems');
//const productoPS = [];
// const productoXbox = [];
// const productoNtnd = [];
// const productoConsole = [];
document.addEventListener('DOMContentLoaded', () => {
    cargarPs(playstation);
    cargarXbox(xbox);
    cargarNintendo(nintendo);
    cargarConsolas(consolas);
})

psItems.addEventListener('click', e => {
    agregarPsGame(e);
})

xboxItems.addEventListener('click', e => {
    agregarXboxGame(e);
})

nintendoItems.addEventListener('click', e => {
    agregarNtndGame(e);
})

consolaItems.addEventListener('click', e => {
    agregarConsola(e);
})
const cargarPs = playstation => {
    //console.log(playstation);
    playstation.forEach(psGame => {
        const { game, image, prize, id } = psGame;
        ps.querySelector('h5').textContent = game;
        ps.querySelector('img').setAttribute('src', image);
        ps.querySelector('p').textContent = prize;
        ps.querySelector('#boton-ps5').dataset.id = id;
        const clone = ps.cloneNode(true);
        fragment.appendChild(clone)

    });
    psItems.appendChild(fragment);
}

const agregarPsGame = e => {

    if (e.target.classList.contains('btn-primary')) {
        setPsGame(e.target.parentElement);
        alert('producto Agregado al carrito')
         }
    e.stopPropagation();
}

const setPsGame = objetoPS => {
    let productoPS = JSON.parse(localStorage.getItem("productos Ps5")) || [];
    productoPS.push({
        id: `ps5-${objetoPS.querySelector('.btn-primary').dataset.id}`,
        titulo: objetoPS.querySelector('h5').textContent,
        precio: objetoPS.querySelector('p').textContent,
        imagen: objetoPS.querySelector('img').src,
        cantidad: 1
    });
    localStorage.setItem("productos Ps5", JSON.stringify(productoPS));
}

const cargarXbox = xbox => {
    //console.log(xbox);
    xbox.forEach(xboxGame => {
        const { game, image, prize, id } = xboxGame;
        xb.querySelector('h5').textContent = game;
        xb.querySelector('img').setAttribute('src', image);
        xb.querySelector('p').textContent = prize;
        xb.querySelector('#boton-xbox').dataset.id = id;
        const clone = xb.cloneNode(true);
        fragment.appendChild(clone)
    });
    xboxItems.appendChild(fragment);
}

const agregarXboxGame = e => {

    if (e.target.classList.contains('btn-success')) {
        setXboxGame(e.target.parentElement);
        alert('producto Agregado al carrito')

    }
    e.stopPropagation();
}

const setXboxGame = objetoXbox => {
    let productoXbox = JSON.parse(localStorage.getItem("productos Xbox")) || [];

    productoXbox.push({
        id: `xbox-${objetoXbox.querySelector('.btn-success').dataset.id}`,
        titulo: objetoXbox.querySelector('h5').textContent,
        precio: objetoXbox.querySelector('p').textContent,
        imagen: objetoXbox.querySelector('img').src,
        cantidad: 1
    });

    localStorage.setItem("productos Xbox", JSON.stringify(productoXbox));
}

const cargarNintendo = nintendo => {
    //console.log(nintendo);
    nintendo.forEach(nintendoGame => {
        const { game, image, prize, id } = nintendoGame;
        nd.querySelector('h5').textContent = game;
        nd.querySelector('img').setAttribute('src', image);
        nd.querySelector('p').textContent = prize;
        nd.querySelector('#boton-nintendo').dataset.id = id;
        const clone = nd.cloneNode(true);
        fragment.appendChild(clone)
    });
    nintendoItems.appendChild(fragment);
}

const agregarNtndGame = e => {

    if (e.target.classList.contains('btn-danger')) {
        setNtndGame(e.target.parentElement);
        alert('producto Agregado al carrito')
    }
    e.stopPropagation();
}

const setNtndGame = objetoNtnd => {
    let productoNtnd = JSON.parse(localStorage.getItem("productos Nintendo")) || [];

    productoNtnd.push({
        id: `Ntnd-${objetoNtnd.querySelector('.btn-danger').dataset.id}`,
        titulo: objetoNtnd.querySelector('h5').textContent,
        precio: objetoNtnd.querySelector('p').textContent,
        imagen: objetoNtnd.querySelector('img').src,
        cantidad: 1
    });

    localStorage.setItem("productos Nintendo", JSON.stringify(productoNtnd));
}

const cargarConsolas = consolas => {
    //console.log(consolas);
    consolas.forEach(consolaGame => {
        const { game, image, prize, id } = consolaGame;
        cn.querySelector('h5').textContent = game;
        cn.querySelector('img').setAttribute('src', image);
        cn.querySelector('p').textContent = prize;
        cn.querySelector('#boton-consola').dataset.id = id;
        const clone = cn.cloneNode(true);
        fragment.appendChild(clone)
    });
    consolaItems.appendChild(fragment);
}

const agregarConsola = e => {

    if (e.target.classList.contains('btn-warning')) {
        setConsola(e.target.parentElement);
        alert('producto Agregado al carrito')
    }
    e.stopPropagation();
}


const setConsola = objetoConsole => {
    let productoConsole = JSON.parse(localStorage.getItem("productos Consola")) || [];

    productoConsole.push({
        id: `cons-${objetoConsole.querySelector('.btn-warning').dataset.id}`,
        titulo: objetoConsole.querySelector('h5').textContent,
        precio: objetoConsole.querySelector('p').textContent,
        imagen: objetoConsole.querySelector('img').src,
        cantidad: 1
    });



    localStorage.setItem("productos Consola", JSON.stringify(productoConsole));
}




