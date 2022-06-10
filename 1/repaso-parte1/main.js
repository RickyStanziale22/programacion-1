let consolas = ['Play Station','Xbox','Nintendo Game Cube','Sega DreamCast','Game Boy Advance']

// eliminar mas de un elemento
const posicion = 2;
const numeroElemento = 2;
const elementosEliminados = consolas.splice(posicion,numeroElemento)
console.log(elementosEliminados)
console.log(consolas)

//agregar un elemento al final de un array
consolas.push('Nintendo 64')
console.log(consolas)

//agregar un elemento al inicio de un arreglo
consolas.unshift("Nintendo Wii")
console.log(consolas) 

// función flecha del punto E 

const imprimir = () => {
 //como conocer la longitud de array
const longitud = consolas.length
 let Longitud = 'longitud:'+longitud

//como accedo al ùltimo elemento
const ultimo = consolas [longitud-1]
 let Ultimoelemento = 'Ûltimo elemento:'+ultimo

//como obtener la posicion de un elemento 
const indice = consolas.indexOf("Xbox")
        let Indice = 'Îndice obtenido: '+indice
}

const mostrar = () =>{
    //Ejecutando la funcion
    const respuesta = imprimir(Longitud,Ultimoelemento,Indice)

    document.getElementById("h_resultado").textContent = respuesta
}

