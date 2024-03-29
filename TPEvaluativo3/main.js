import Repuestos from "./repuestos.js"

function guardar()
{
    let descripcion = document.getElementById("inp_descripcion").value
    let precio = document.getElementById("inp_precio").value
    let imagen = document.getElementById("inp_URL").value
    let detalles = document.getElementById("inp_detalles").value
    let repuestos = new Repuestos(descripcion,precio,imagen,detalles)
    repuestos.guardar_repuestos()
}
document.getElementById("guardar").addEventListener("click",guardar)

function listar()
{
    let repuestos = new Repuestos()
    repuestos.obtener_repuestos()
}
listar()

function eliminar(){
    let indice = localStorage.getItem("indice")
    let repuestos = new Repuestos()
    repuestos.eleminar_repuestos(indice)
}
document.getElementById("btn_eliminar").addEventListener("click",eliminar)

function actualizar(){
    let repuestos = new Repuestos()
    repuestos.actualizacion_repuestos()
}
document.getElementById("actualizar").addEventListener("click",actualizar)