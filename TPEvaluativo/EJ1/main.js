function descontar( ){
    const precio = document.getElementById("auto").value 
    let resultado = null
    if(precio == 1950000 ){
       resultado = 1950000 - (1950000*0.05)
       
    }else{
        if(precio == 2560000){
            resultado = 2560000 - (2560000*0.10)
        }else{
            if(precio == 1750000){
                resultado = 1750000 - (175000*0.15)
            }
        }
    }
 document.getElementById("respuesta").textContent= '$'+resultado 
}

    
    
    
    
    