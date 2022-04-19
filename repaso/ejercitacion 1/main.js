//esta funcion solo se enfocarà en el calculo
function pasaje(c)
{
    const resultado = (c * 9/5) + 32 
    return resultado
}


function mostrar()
{
    const c = document.getElementById("inp_Celcius").value

    //aca ejecutamos e invocamos a la funcion
    const respuesta = pasaje(c)

    document.getElementById("h_resultado").textContent = respuesta
}
