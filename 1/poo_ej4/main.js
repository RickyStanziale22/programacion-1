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

function eliminar()
{
    let indice = localStorage.getItem("indice")
    //creamos una instancia 
    //para acceder a los metodos y atributos de la clase producto
    let producto = new Producto()

    //creamos uso de la instancia 
    //invocamos al metodo eliminar_producto()
    producto.eliminar_productos(indice)
}
document.getElementById("btn_eliminar").addEventListener("click",eliminar)

function actualizar()
{
    //creamos la instancia producto
    let producto = new Producto()
    /*
    Y traves de la instancia accedemos e invocamos el metodo 
    actualizar_producto() existe en archivo producto.js
    */
   producto.actualizar_producto()
}
document.getElementById("btn_actualizar").addEventListener("click",actualizar)