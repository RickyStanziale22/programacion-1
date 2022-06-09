const tareas = [
    {
        nombre:'Testeando soft',
        duracion:25
    },
    {
        nombre:'Implementacion de alta cliente',
        duracion:90
    },
    {
        nombre:'Actualiza cliente',
        duracion:40
    },
    {
        nombre:'Deploy de soft',
        duracion:120
    },
    {
        nombre:'Correcciòn de bug',
        duracion:180
    },

]

//Uso del metodo "clasico"()

let nombres = []
tareas.forEach(Element => {

    nombres.push(Element.nombre)
});

//Uso del metodo map(aplicando map())
let nombres2 = tareas.map( tarea => tarea.nombre)

/** 
 * USO DE FILTER
*/
let tareas_prolongadas = []
tareas.forEach(Element => {

    if(Element.duracion >= 120){
        tareas_prolongadas.push(Element)
    }
});

console.log(tareas_prolongadas)

//Filtrar haciendo uso del metodo filter()

const tareas_prolongadas2 = tareas.filter( tarea => {
     return tarea.duracion >= 120 
})