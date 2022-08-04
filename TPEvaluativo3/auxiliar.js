function almacenar_indice(indice)
{
localStorage.setItem("indice",indice)
}

function editar(indice)
{
    let lista_repuestos = JSON.parse(localStorage.getItem("repuestos"))

    document.getElementById("inp_descripcion").value = lista_repuestos[indice].descripcion
    document.getElementById("inp_precio").value = lista_repuestos[indice].precio
    document.getElementById("inp_URL").value = lista_repuestos[indice].imagen
    document.getElementById("inp_detalles").value = lista_repuestos[indice].detalles

    localStorage.setItem("indice",indice)
    document.getElementById("guardar").style.display = "block"
    document.getElementById("actualizar").style.display = "none"
}
