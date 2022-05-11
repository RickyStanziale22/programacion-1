function analiza(F)
{
    let resultado = null
    if(F >= 14 && F <= 32 ){
       resultado = "Temperatura Baja"
    }else{
        if(F >32 && F <= 68){
            resultado = "Temperatura Adecuada"
        }else{
            if(F >68 && F <= 96){
                resultado = "Temperatura Alta"
            }else{
                resultado = "Temperatura Desconocida"
            }
        }
    }
    return resultado
}


function mostrar()
{
    const F = document.getElementById("inp_F").value
    const respuesta = analiza(F)

    document.getElementById("h_resultado").textContent = respuesta
}