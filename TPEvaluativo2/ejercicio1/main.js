const obtener_dolares = async () => {
    
    const dolarsi = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    
    const dolarsi_definidas = await dolarsi.json()
    
    let filas = []
    // aca es donde recorre los elementos invocado
    dolarsi_definidas.forEach(element => {
       
        let fila =
        `<tr>
        <td>${element.casa.nombre}</td>
        <td>${element.casa.compra}</td>
        <td>${element.casa.venta}</td>
        </tr>`
    
        filas.push(fila)
    });
    document.getElementById("tbl_body").innerHTML = filas.join('')
    }
    // se invoca la funciòn
    obtener_dolares()