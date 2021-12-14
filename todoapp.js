console.log("Script started")
const app = new Vue({
    el : "#app",
    data : {
        titulo : "Ingresar a Cuenta",
        id : 1,
        usuario : '',
        contrasena:'',
        done : false,
        todos : []
    },
    methods : {
        
        igresar(){
            console.log(usuario)
            window.location.href = "pagina1.html"
        }
    }
})