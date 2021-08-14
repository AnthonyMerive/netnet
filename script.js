//Carga de juegos en items

import { playstation,xbox,nintendo,consolas } from './data.js';

const ps = document.getElementById('templatePs').content;
const xb = document.getElementById('templateXbox').content;
const nd = document.getElementById('templateNintendo').content;
const cn = document.getElementById('templateConsola').content;
const fragment = document.createDocumentFragment();
const psItems = document.getElementById('psItems');
const xboxItems = document.getElementById('xboxItems');
const nintendoItems = document.getElementById('nintendoItems');
const consolaItems = document.getElementById('consolaItems');

const carrito ={};

document.addEventListener('DOMContentLoaded', () => {
    cargarPs(playstation);
    cargarXbox(xbox);
    cargarNintendo(nintendo);
    cargarConsolas(consolas);
})

psItems.addEventListener('click', e =>{
    agregarPsGame(e);
})

const cargarPs = playstation => {
    //console.log(playstation);
    playstation.forEach(psGame => {
        const { game, image, prize, id } = psGame;
        ps.querySelector('h5').textContent = game;
        ps.querySelector('img').setAttribute('src', image);
        ps.querySelector('p').textContent = prize;
        ps.querySelector('#boton').dataset.id = id;
        const clone = ps.cloneNode(true);
        fragment.appendChild(clone)
       
    });
    psItems.appendChild(fragment);
}   

const agregarPsGame = e => {
    
    if(e.target.classList.contains('btn-primary')){
        setPsGame(e.target.parentElement);
        alert('producto Agregado al carrito')
    }
    e.stopPropagation();
}

const setPsGame = objetoPS => {
    const productoPS ={
        id : objetoPS.querySelector('.btn-primary').dataset.id,
        titulo : objetoPS.querySelector('h5').textContent,
        precio : objetoPS.querySelector('p').textContent,
        imagen : objetoPS.querySelector('img').src,
        cantidad : 1
    }

    carrito[productoPS.id] = {...productoPS}

    localStorage.setItem("productos", JSON.stringify(carrito));
}

const cargarXbox = xbox => {
    //console.log(xbox);
    xbox.forEach(xboxGame => {
        const { game, image, prize } = xboxGame;
        xb.querySelector('h5').textContent = game;
        xb.querySelector('img').setAttribute('src', image);
        xb.querySelector('p').textContent = prize;
        const clone = xb.cloneNode(true);
        fragment.appendChild(clone)
    });
    xboxItems.appendChild(fragment);
}

const cargarNintendo = nintendo => {
    //console.log(nintendo);
    nintendo.forEach(nintendoGame => {
        const { game, image, prize } = nintendoGame;
        nd.querySelector('h5').textContent = game;
        nd.querySelector('img').setAttribute('src', image);
        nd.querySelector('p').textContent = prize;
        const clone = nd.cloneNode(true);
        fragment.appendChild(clone)
    });
    nintendoItems.appendChild(fragment);
}

const cargarConsolas = consolas => {
    //console.log(consolas);
    consolas.forEach(consolaGame => {
        const { game, image, prize } = consolaGame;
        cn.querySelector('h5').textContent = game;
        cn.querySelector('img').setAttribute('src', image);
        cn.querySelector('p').textContent = prize;
        const clone = cn.cloneNode(true);
        fragment.appendChild(clone)
    });
    consolaItems.appendChild(fragment);
}

