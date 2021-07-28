//Tomar datos del formulario del carrito

let boton = document.getElementById('btnEnviar');
boton.addEventListener('click', capturaDatos)
let form = document.getElementById('form');
form.addEventListener('submit', formSubmit)
function formSubmit(e) {
    e.preventDefault();
}

function capturaDatos() {
    let nombre = document.querySelector('#inputNombre').value;
    let apellido = document.querySelector('#inputApellido').value;
    let telefono = document.getElementById('inputTelefono').value;
    let direccion = document.getElementById('inputDireccion').value;

    guardarLocalStorage(nombre, apellido, telefono, direccion);

}

function guardarLocalStorage(nom, ape, tel, dir) {

    localStorage.setItem('Nombres', nom);
    localStorage.setItem('Apellidos', ape);
    localStorage.setItem('Teléfono', tel);
    localStorage.setItem('Dirección', dir);
    mostrarData();
}

localStorage.clear();

document.addEventListener('DOMContentLoaded', mostrarData);

function mostrarData() {

    let nombre = localStorage.getItem('Nombres');
    let apellido = localStorage.getItem('Apellidos');
    let telefono = localStorage.getItem('Teléfono');
    let direccion = localStorage.getItem('Dirección');

    if(nombre===null||apellido===null||telefono===null||direccion===null){
    alert("Verifique sus productos y diligencie el formulario de envio");
    }else{
    alert(`Sr./a ${nombre} ${apellido} sus productos seran enviados 
    a la direccion ${direccion} recibira un SMS al telefono ${telefono} 
    con su factura de compra..!`);
    }  
}


