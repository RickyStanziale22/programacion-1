//esta funcion solo se enfocarà en el calculo
function calcular(radio)
{
    const resultado = Math.PI * Math.pow(radio,2);
    return resultado
}


function mostrar()
{
    const radio = document.getElementById("inp_RADIO").value

    //aca ejecutamos e invocamos a la funcion
    const respuesta = calcular(radio)

    document.getElementById("h_resultado").textContent = respuesta
}
