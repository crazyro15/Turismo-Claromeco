function respondido(id){
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
}