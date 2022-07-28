function almacenar_indice(indice)
{
localStorage.setItem("indice",indice)
}

function editar(indice)
{
    let lista_respuestos = JSON.parse(localStorage.getItem("repuestas"))

    document.getElementById("inp_descripcion").value = lista_respuestos[indice].descripcion
    document.getElementById("inp_precio").value = lista_respuestos[indice].precio
    document.getElementById("inp_URL").value = lista_respuestos[indice].imagen
    document.getElementById("inp_detalles").value = lista_respuestos[indice].detalles

    localStorage.setItem("indice",indice)
    document.getElementById("guardar").style.display = "block"
    document.getElementById("actualizar").style.display = "none"
}
