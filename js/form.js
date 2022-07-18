window.onload = function() {
	
    var nombre = document.getElementById('txtNombre');
    nombre.addEventListener("input", campoNombre);
	
    var correo = document.getElementById('txtMail');
    correo.addEventListener("input", campoCorreo);

    var mensaje = document.getElementById('txtMensaje');
    mensaje.addEventListener("input", campoMensaje);
	
}

function campoNombre() {
    var usuarioNombre = document.getElementById('txtNombre').value;

    if (usuarioNombre) {
        document.getElementById('nombre_error').innerHTML = " ";
        document.getElementById('txtNombre').style.outline = "1px solid #000";
    }
}

function campoCorreo() {
    var usuarioCorreo = document.getElementById('txtMail').value;
	
    if (usuarioCorreo) {
        document.getElementById('correo_error').innerHTML = " ";
        document.getElementById('txtMail').style.outline = "1px solid #000";
    }
}

function campoMensaje() {
    var usuarioMensaje = document.getElementById('txtMensaje').value;
	
    if (usuarioMensaje) {
        document.getElementById('mensaje_error').innerHTML = " ";
        document.getElementById('txtMensaje').style.outline = "1px solid #000";
    }
}

function borrando() {
	document.location.reload(true);
}

function validacion() {
    var expUsuario = /[a-zA-Z]{2,30}[0-9]{0}/;
    var expCorreo = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
    var usuarioNombre = document.getElementById('txtNombre').value;
    var usuarioCorreo = document.getElementById('txtMail').value;
    var usuarioMensaje = document.getElementById('txtMensaje').value;
    var nombreError = document.getElementById('nombre_error');
    var correoError = document.getElementById('correo_error');
    var mensajeError = document.getElementById('mensaje_error');
    var campoNombre = document.getElementById('txtNombre');
    var campoCorreo = document.getElementById('txtMail');
    var campoMensaje = document.getElementById('txtMensaje');

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
    guardar();
    console.log("Enviado")
}

function guardar() {
 
    let n = document.getElementById("txtNombre").value
    let p = document.getElementById("txtMail").value
    let s = document.getElementById("txtMensaje").value
 
    let producto = {
        nombre: n,
        mail: p,
        mensaje: s,
        respondido: "NO"
    }
    let url = "http://localhost:5000/mensajes"
    var options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       // redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            // console.log("creado")
            location.href='enviado.html';
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Ocurrió un error al guardar" )
            console.error(err);
        })
    
}