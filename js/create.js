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
    
}
