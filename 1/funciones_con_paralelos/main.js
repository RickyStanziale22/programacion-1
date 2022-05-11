//esta funcion solo se enfocarà en el calculo
function calcular(dt1,dt2)
{
const resultado = dt1 * dt2;
return resultado
}

/*solo se enfocarà en recolectar los datos y entregarlos a la funciòn calcular()*/

function mostrar()
{


//forma1
const dato1 = document.querySelector("#inp_dt1").value

//forma2
const dato2 = document.getElementById("inp_dt2").value

//aca ejecutamos e invocamos a la funcion
const respuesta = calcular(dt1,dt2)

document.getElementById("h_resultado").textContent = respuesta
}
