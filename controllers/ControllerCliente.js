import { guardarLocalStorage, ConsultarLocalStorage } from "../services/local-storage.js";
import { usuarios } from "../models/ModelCliente.js";
let formulario = document.getElementById("formulario")
if(formulario){
    formulario.addEventListener("submit",function(e){
    e.preventDefault()
    console.log("capturando datos...")
    let Data = new FormData(formulario)
    let usuario = Object.fromEntries(Data) 
    usuarios.push(usuario)
    console.log(usuarios)
    guardarLocalStorage("usuarios", usuarios) 
    window.location.href = "views/clientes/listado-clientes.html"
});
}


function listarClientes(){
    let usuarios = ConsultarLocalStorage("usuarios")
    console.log(usuarios)
}
listarClientes()