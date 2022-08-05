let librerias_css = ['Bootstrap','Materialize','Bulma','Tailwind','Pure','Pico CSS','Skeleton','Primer'] 

// aca agrego un elemento al inicio del array (punto B)
const agregar_al_inicio = librerias_css.unshift('Spectre')

//aca elimino mas de un elemento (punto C)
const posicion = 4;
const numeroElemento = 2;
const elementosEliminados = librerias_css.splice(posicion,numeroElemento)

//aca agrego un elemento al final del array (punto D)
const agregar_al_final = librerias_css.push('Milligram')

// aca agrego una funciòn que va imprimir en un parrafo la longitud, el ultimo elemento y el elemento "Bulma" del array (punto E)
const imprimir = () => {
    const longitud_del_array = librerias_css.length;
    const ultimo_elemento = librerias_css[longitud_del_array-1]
    const indice = librerias_css.indexOf('Bulma')
    const elemento_bulma = librerias_css[indice]

    document.getElementById("respuesta1").textContent= 'La longitud del arreglo es: '+longitud_del_array 
    document.getElementById("respuesta2").textContent= 'El ultimo elemento es: '+ultimo_elemento
    document.getElementById("respuesta3").textContent= 'El indice de Bulma es: '+elemento_bulma
}
//aca agrego una funciòn que va enlistar el array en un ListGroup siendo activada por un botòn (punto F)
function mostrar(){

    let filas = []
    librerias_css.forEach(element => {
        let fila =
        `<li class="list-group-item">${element}</li>`
        filas.push(fila)
    });
    document.getElementById("libreria").innerHTML = filas.join('')
}
