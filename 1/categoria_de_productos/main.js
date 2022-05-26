const consumir = async (cat) =>{

    const datos = await fetch('https://fakestoreapi.com/products/categories')
    
    const datos_definidos = await datos.json()
    
    let columnas = []
    
    datos_definidos.forEach(element => {
       
        let columna =
        `<tr>
        <td> <img src="${element.image}" class="img-fluid" style= "width:4rem"></td>
        <td>${element.name}</td>
        <td>${element.symbol}</td>
        <td>${element.current_price}</td>
        <td>${element.total_volume}</td>
        </tr>`
    
        columnas.push(columna)
    });
    document.getElementById("menem").innerHTML = columnas.join('')
    }
    consumir()