//crear un array
// creamos un arreglo de string
let series = ['Breaking Bad','Okupas','Narcos','Casados Con Hijos','Peaky Blinders']

//como conocer la longitud de array
const longitud = series.length
console.log('longitud:'+longitud)

//como acceder a un elemento del arreglo haciendo uso del incide

const primero = series[0]
console.log('Primer elemento: '+primero)

//como accedo al ùltimo elemento
const ultimo = series [longitud-1]
console.log('Ûltimo elemento:'+ultimo)

//recorrer un arreglo haciendo uso de foreach
series.forEach( (element,index) => {
    console.log(index+'-'+element)
});

//como agregar un elemento al final de un array
series.push('Dragon Ball')
console.log(series)

//eliminar el ultimo elemento de un arreglo
series.pop()
console.log(series)

//como agregar un elemento al inicio de un arreglo
series.unshift("Grey`s Anatomy")
console.log(series)

//como elimino el primer elemento de un arreglo
series.shift()
console.log(series)

//como obtener la posicion de un elemento 
const indice = series.indexOf("casados con hijos")
console.log('Îndice obtenido: '+indice)

//como eliminar un elemento teniendo su posiciòn 
//1er caso - eliminar un ùnico elemento
series.splice(indice,1)

//2do caso - como eliminar mas de un elemento
const posicion = 1;
const numeroElemento = 2;
const elementosEliminados = series.splice(posicion,numeroElemento)
console.log(elementosEliminados)
console.log(series)

//copisr un array
let copia = series.slice()
copia.push("Dragon Ball")
console.log(copia)
console.log(series)