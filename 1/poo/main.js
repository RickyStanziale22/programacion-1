import Vehiculo from "./vehiculo.js";
import Persona from "./persona.js";
function invocar(){

 let kilometros = 50000
let marca = 'Ford'

//crear la instancia de la clase Vehiculo
const vehiculo = new Vehiculo(kilometros,marca)
vehiculo.mostrar_km()

//CREAMOS LA INSTANCIA DE CLASE PERSONA
const persona = new Persona()
persona.apellido = 'Perez'
persona.nombre = 'juan'
persona.mostrar_datos_personales()


}
document.getElementById("botoncito").addEventListener("click",invocar)