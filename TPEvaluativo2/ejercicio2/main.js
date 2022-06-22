let criptos = ['Bitcoin','Ethereum','Tether','BNB','Cardano','Dai','Helium','Shiba Inu','Tron','Cronos','Solana'] 

// aca agrego un elemento al inicio del array (punto B)
const agregar_al_inicio = criptos.unshift('Stellar')

//aca elimino mas de un elemento (punto C)
const posicion = 7;
const numeroElemento = 2;
const elementosEliminados = criptos.splice(posicion,numeroElemento)

//aca agrego un elemento al final del array (punto D)
const agregar_al_final = criptos.push('Gate')

// aca agrego una funciòn qye va imprimir en un parrafo la longitud, el ultimo elemento y el elemento "helium" del array (punto E)
const imprimir = () => {
    const longitud_del_array = criptos.length;
    const ultimo_elemento = criptos[longitud_del_array-1]
    const indice = criptos.indexOf('Helium')
    const elemento_helium = criptos[indice]

    document.getElementById("respuesta").textContent= 'La longitud del arreglo es:'+longitud_del_array, 'El ultimo elemento es:'+ultimo_elemento ,'El indice de Helium es:'+elemento_helium
}
   