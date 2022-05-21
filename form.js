window.onload = function() {
	
    var nombre = document.getElementById('nombre');
    nombre.addEventListener("input", campoNombre);
	
    var correo = document.getElementById('correo');
    correo.addEventListener("input", campoCorreo);

    var mensaje = document.getElementById('mensaje');
    mensaje.addEventListener("input", campoMensaje);
	
}

function campoNombre() {
    var usuarioNombre = document.getElementById('nombre').value;

    if (usuarioNombre) {
        document.getElementById('nombre_error').innerHTML = " ";
        document.getElementById('nombre').style.outline = "1px solid #000";
    }
}

function campoCorreo() {
    var usuarioCorreo = document.getElementById('correo').value;
	
    if (usuarioCorreo) {
        document.getElementById('correo_error').innerHTML = " ";
        document.getElementById('correo').style.outline = "1px solid #000";
    }
}

function campoMensaje() {
    var usuarioMensaje = document.getElementById('mensaje').value;
	
    if (usuarioMensaje) {
        document.getElementById('mensaje_error').innerHTML = " ";
        document.getElementById('mensaje').style.outline = "1px solid #000";
    }
}

function borrando() {
	document.location.reload(true);
}

function validacion() {
    var expUsuario = /[a-zA-Z]{2,30}[0-9]{0}/;
    var expCorreo = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
    var usuarioNombre = document.getElementById('nombre').value;
    var usuarioCorreo = document.getElementById('correo').value;
    var usuarioMensaje = document.getElementById('mensaje').value;
    var nombreError = document.getElementById('nombre_error');
    var correoError = document.getElementById('correo_error');
    var mensajeError = document.getElementById('mensaje_error');
    var campoNombre = document.getElementById('nombre');
    var campoCorreo = document.getElementById('correo');
    var campoMensaje = document.getElementById('mensaje');

    if (!usuarioNombre) {
    	var mensajeErrorNombre = "Su nombre es obligatorio!";
        nombreError.innerHTML = mensajeErrorNombre;
        campoNombre.style.outline = "2px solid #0f0";
        return false;
    } else if (!expUsuario.test(usuarioNombre)) {
        var mensajeInvalidoNombre = "Su nombre completo es invalido!";
        nombreError.innerHTML = mensajeInvalidoNombre;
        campoNombre.style.outline = "2px solid #f00";
        return false;
    }
	
    if (!usuarioCorreo) {
    	var mensajeErrorCorreo = "Su correo electrónico es obligatorio!";
    	correoError.innerHTML = mensajeErrorCorreo;
    	campoCorreo.style.outline = "2px solid #0f0";
    	return false;
    } else if (!expCorreo.test(usuarioCorreo)) {
    	var mensajeInvalidoCorreo = "correo inválido!(Sin mayúsculas ni espacios)";
    	correoError.innerHTML = mensajeInvalidoCorreo;
    	campoCorreo.style.outline = "2px solid #f00";
    	return false;
    }
	
    if (!usuarioMensaje) {
    	var mensajeErrorMensaje = "Por favor, escriba su mensaje!";
    	mensajeError.innerHTML = mensajeErrorMensaje;
    	campoMensaje.style.outline = "2px solid #0f0";
    	return false;
    } else if (usuarioMensaje.length >= 255) {
    	mensajeLargo = "Su mensaje es demasiado largo!";
    	mensajeError.innerHTML = mensajeLargo;
    	campoMensaje.style.outline = "2px solid #f00";
    	return false;
    } 
    console.log("Enviado")
}