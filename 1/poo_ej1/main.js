import Trapecio from "./trapecio.js";

function invocar(){

    const basemayor = document.getElementById("bmayor").value
    const basemenor = document.getElementById("bmenor").value
    const altura = document.getElementById("alto").value

    const trapecio = new Trapecio(basemayor,basemenor,altura)
    const respuesta = trapecio.calcular_trapecio()
    document.getElementById("resultado").textContent ='el trapecio es:'+ respuesta

}
document.getElementById("trapecio").addEventListener("click",invocar)