import Producto from "./producto.js"

function guardar(){

    let descripcion = document.getElementById("inp_descripcion").value
    let precio_venta = document.getElementById("inp_precio_venta").value
    let categoria = document.getElementById("select_productos").value
    let producto = new Producto(descripcion,precio_venta,categoria)
    producto.guardar_producto()
}
document.getElementById("btn_guardar").addEventListener("click",guardar)

function listar()
{
let producto = new Producto()
producto.obtener_productos()
}

listar()