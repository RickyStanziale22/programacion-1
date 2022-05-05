function descontar( ){
    const precio = document.getElementById("auto").value 
 let resultado = null
    if(precio == 1950000 ){
       resultado = (1950000 *100) /5      
       
    }else{
        if(precio == 2560000){
            resultado =  (2560000 *100) /10
        }else{
            if(precio == 1750000){
                resultado = (1750000 *100) /15
            }
        }
    }
 document.getElementById("respuesta").textContent=resultado
}

    
    
    
    
    