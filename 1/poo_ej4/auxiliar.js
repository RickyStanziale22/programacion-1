function almacenar_indice(indice)
{
localStorage.setItem("indice",indice)
}

function editar(indice)
{
    let lista_productos = JSON.parse(localStorage.getItem("productos"))

    document.getElementById("inp_descripcion").value = lista_productos[indice].descripcion
    document.getElementById("inp_precio_venta").value = lista_productos[indice].precio_venta
    document.getElementById("select_productos").value = lista_productos[indice].categoria

    localStorage.setItem("indice",indice)

    //apago el boton
    document.getElementById("btn_guardar").style.display = "block"
    //encendemos el boton actualizar 
    document.getElementById("btn_actualizar").style.display = "none"
}