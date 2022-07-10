function guardar() {
 
    let n = document.getElementById("txtNombre").value
    let p = document.getElementById("txtPrecio").value
    let s = document.getElementById("txtStock").value
 
    let producto = {
        nombre: n,
        mail: p,
        mensaje: s
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
        // windows.location.replace('back.html');
        
}
