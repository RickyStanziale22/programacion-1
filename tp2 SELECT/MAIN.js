function calcular(dato1,dato2,operador){

    let resultado = null

    if(operador == 1){
       resultado = parseInt(dato1) + parseInt(dato2)
    }else{
        if(operador == 2){
            resultado = dato1 - dato2
        }else{
            if(operador == 3){
                resultado = dato1*dato2
            }else{
                if(operador ==4){
                    resultado = dato1 / dato2
                }
            }
        }
    }
    return resultado
}
function mostrar( ){
    const select = document.getElementById("sh_operaciones").value

    const dato1 = document.getElementById("inp_dato1").value
    const dato2 = document.getElementById("inp_dato2").value
    const respuesta = calcular(dato1,dato2,select)
    document.getElementById("respuesta").textContent=respuesta
}
