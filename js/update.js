var args = location.search.substring(1).split('&');
// lee los argumentos pasados a este formulario
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(args)
document.getElementById("txtId").value = parts[0][1]
document.getElementById("txtNombre").value = decodeURI(parts[1][1])
document.getElementById("txtPrecio").value = decodeURI(parts[2][1])
document.getElementById("txtStock").value = decodeURI(parts[3][1])
 
function modificar() {
    let id = document.getElementById("txtId").value
    let n = document.getElementById("txtNombre").value
    let p = document.getElementById("txtPrecio").value
    let s = document.getElementById("txtStock").value
    let producto = {
        nombre: n,
        mail: p,
        mensaje: s
    }
    let url = "http://localhost:5000/mensajes/"+id
    var options = {
        body: JSON.stringify(producto),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            // console.log("modificado")
            alert("Datos modificados correctamente!")
            location.href='back.html';
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Ha ocurrido un error al modificar los datos")
        })
        // location.href='back.html'; 
}
