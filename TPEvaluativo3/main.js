import Repuestos from "./repuestos.js"

function guardar(){

    let descripcion = document.getElementById("inp_descripcion").value
    let precio = document.getElementById("inp_precio").value
    let imagen = document.getElementById("inp_URL").value
    let detalles = document.getElementById("inp_detalles").value
    let repuestos = new Repuestos(descripcion,precio,imagen,detalles)
    repuestos.guardar_repuesto()
}
document.getElementById("guardar").addEventListener("click",guardar)