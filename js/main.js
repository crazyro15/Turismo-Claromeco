if (document.getElementById("app")) {
    const app = new Vue({
        el: "#app",
        data: {
            productos: [],
            errored: false,
            loading: true
        },
        created() {
            var url = 'http://localhost:5000/mensajes'
            this.fetchData(url)
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.productos = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(producto) {
                const url = 'http://localhost:5000/mensajes/' + producto;
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        location.reload();
                    })
            },
            respondido(id,n,m,msj) {
                let r = "SI"
                let mensaje = {
                    nombre: n,
                    mail: m,
                    mensaje: msj,
                    respondido: r

                }
                let url = "http://localhost:5000/mensajes/" + id
                var options = {
                    body: JSON.stringify(mensaje),
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    redirect: 'follow'
                }
                fetch(url, options)
                    .then(function () {
                        // console.log("modificado")
                        alert("Datos modificados correctamente!")
                        location.href = 'back.html';

                        // Handle response we get from the API
                    })
                    .catch(err => {
                        //this.errored = true
                        console.error(err);
                        alert("Ha ocurrido un error al modificar los datos")
                    })
                // location.href='back.html'; 
            }

        }

    })
    
}
