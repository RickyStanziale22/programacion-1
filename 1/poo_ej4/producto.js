export default class Producto{

    constructor(d,pv,c){
        this.descripcion = d
        this.precio_venta = pv
        this.categoria = c
    }

    //metodo
    guardar_producto(){

        let nuevo_producto ={
            descripcion: this.descripcion,
            precio_venta: this.precio_venta,
            categoria: this.categoria
        }

        if("productos" in localStorage){
            /*
             covertimos el JSON obtenido desde el storage en una expresion nativa de JavaScript
             */
            let lista_productos = JSON.parse( localStorage.getItem("productos"))
            lista_productos.push(nuevo_producto)
            localStorage.setItem("productos", JSON.stringify(lista_productos))
        }else{
         let lista_productos = []
         lista_productos.push(nuevo_producto)
        
         //guardar en el storge
         localStorage.setItem("productos", JSON.stringify(lista_productos) )
        }

        //incovo nuevamente el metodo obtener_productos para
        //lograr reconstruir la tabla, y asi reflejar los datos actualizados
        //que provienen del localStorage, especificamente del item "productos"
        this.obtener_productos()
    }

    obtener_productos()
    {
        /*
        recolectamos todos los productos alojado en el item "productos" 
        que estan en notaciòn JSON. Debemos convertilo en una expresion 
        nativa de JavaScript (es decir,hacemos un JSON.parse()) 
        */
        let lista_productos = JSON.parse(localStorage.getItem("productos"))

        let filas = []
        lista_productos.forEach( (element,index) => {
            
            let fila = `
            <tr>
               <td>${index+1}</td>            
               <td>${element.descripcion}</td>
               <td>${element.precio_venta}</td>
               <td>${element.categoria}</td>
               <td>
               <button onclick="almacenar_indice(${index})" data-bs-toggle="modal" data-bs-target="#mymodal" class="btn btn-danger btn-sm">
                  <i class="fa fa-trash"></i>
               </button>
               <button onclick="editar(${index})" class="btn btn-primary btn-sm">
               <i class="fa fa-edit"></i>
               </button>
               </td>
            </tr>
            `
            filas.push(fila)
        });
        document.getElementById("tbody").innerHTML = filas.join('')
    }
    eliminar_productos(indice)
    {
        let lista_productos = JSON.parse(localStorage.getItem("productos"))
        lista_productos.splice(indice,1)
        localStorage.setItem("productos", JSON.stringify(lista_productos))
        this.obtener_productos()
    }
    actualizar_producto()
    {
        let indice = localStorage.getItem("indice")

        let listado_productos = JSON.parse(localStorage.getItem("productos"))

        listado_productos[indice].descripcion = document.getElementById("inp_descripcion").value
        listado_productos[indice].precio_venta = document.getElementById("inp_precio_venta").value
        listado_productos[indice].categoria = document.getElementById("select_productos").value

        localStorage.setItem("productos",JSON.stringify(listado_productos))

        this.obtener_productos()

        document.getElementById("btn_guardar").style.display = "block"
        document.getElementById("btn_actulizar").style.display = "none"
    }
}