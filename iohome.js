var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var telefono = document.getElementById('telefono');
var error = document.getElementById('error');
error.style.color = 'violet';



function enviarFormulario(){
    console.log('Enviando formulario...')

var mensajesError = [];

if(nombre.value === null || nombre.value === ''){
mensajesError.push('Ingresa tu nombre');
}

if(email.value === null || email.value === ''){
    mensajesError.push('Ingresa tu email');
        }

if(telefono.value === null || telefono.value === ''){
    mensajesError.push('Ingresa tu teléfono');
                }

error.innerHTML = mensajesError.join(', ');

    return false;
}