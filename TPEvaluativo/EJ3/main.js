function calcular(A,B)
{
    const parte1 =  Math.pow(A,2) + Math.pow(B,2)
    const parte2 = Math.sqrt (parte1) 
    return parte2
}
function mostrar()
{
    const A = document.getElementById("inp_a").value
    const B = document.getElementById("inp_b").value
    const respuesta = calcular(A,B)
    document.getElementById("resultado").textContent ='LA HIPOTENUSA ES C, POR LO TANTO C= '+ respuesta
}