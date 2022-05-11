
    function calcular_area(){
        const B1 = parseInt(prompt('INGRESA LA BASE MENOR:'));
        const B2 = parseInt (prompt('INGRESA LA BASE MAYOR:'));
        const H = parseInt (prompt('INGRESA LA ALTURA:'));
        const resultado = ((B1 + B2) * H) / 2
        return resultado
    }
    
    function mostrar() {
        const respuesta = calcular_area()
        alert (respuesta)
    }