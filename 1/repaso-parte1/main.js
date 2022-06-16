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
 const longitud =consolas.length;
 const ultimo = consolas[longitud-1]
 const xbox = consolas[2]
 document.getElementById("respuesta").textContent = 'La longitud del arreglo es:'+longitud+ 'El ultimo elemento es:'+ultimo +'Xbox esta posicionada en:'+xbox 
}
 // punto F
