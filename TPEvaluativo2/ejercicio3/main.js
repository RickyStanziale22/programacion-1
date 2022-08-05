// aca utilizo una funcion flecha para el siguiente objeto
const mostrar = () => 
{
const lenguaje = { 
    nombre: 'Javascript', 
    librerias: { 
        libreria_1: 'Jquery', 
        libreria_2: 'React', 
        libreria_3: 'Vuejs',
    },
}
const {nombre} = lenguaje
console.log(
    `
    nombre: ${nombre}
    `)
const {libreria_1,libreria_2,libreria_3} = lenguaje.librerias
console.log(`
    Libreria 1: ${libreria_1}
    Libreria 2: ${libreria_2}
    Libreria 3: ${libreria_3}
`)
}
