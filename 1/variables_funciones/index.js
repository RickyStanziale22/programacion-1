
function mostrar_mensaje() {
alert(`probando mi funciòn`)
}
function mostrar_en_consola(){
    const nombre_apellido =`Franco Nahuel, Stanziale`
    /* forma 1 - sin template string en una constante */
    console.log(`nombre y apellido:` + nombre_apellido)
    // forma 2 template string -backtick
console.log(`nombre y apellido: ${nombre_apellido}
DNI: 46.403.353
direcciòn: RN 22`)
}
//condicionales 
function validar(){
    const calificaciòn = prompt(`ingrese su calificaciòn:`)
    if(calificaciòn >= 7){
        alert(`estas aprobado`)
    }else{
        alert(`nos veremos a diciembre!!!1!!!!!!!!11!!!1!1!11111!!1!11!2!`)}

    //expresiòn ternario
    (calificaciòn >=7) ? alert('estas aprobado') :alert ('desaprobado')
}

//funcion con retorno y comunicacion entre funciones
function calcular(){
    const number = prompt('ingresa un numero:');
    const resultado = number * 10
    return resultado
}

function visualizar()
{
    //invocamos(ejecutamos) la funcion calcular
    const respuesta = calcular()
    alert (respuesta)
}