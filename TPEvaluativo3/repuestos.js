export default class Repuestos{
    constructor(d,p,i,de){
        this.descripcion = d
        this.precio = p
        this.imagen = i
        this.detalles =de
    }
    guardar_repuestos(){
        let nuevo_repuestos = {
           descripcion: this.descripcion,
           precio: this.precio,
           imagen: this.imagen,
           detalles: this.detalles
        }
        if ("repuestos" in localStorage){
             let lista_repuestos = JSON.parse( localStorage.getItem("repuestos"))
             lista_repuestos.push(nuevo_repuestos)
             localStorage.setItem("repuestos", JSON.stringify(lista_repuestos))
            }else{
          let lista_repuestos = []
          lista_repuestos.push(nuevo_repuestos)
          localStorage.setItem("repuestos", JSON.stringify(lista_repuestos))
         }
         this.obtener_repuestos()
         this.vaciar_el_formulario()
    }
    obtener_repuestos(){
        if("repuestos" in localStorage){
            let lista_repuestos = JSON.parse(localStorage.getItem("repuestos"))
            let filas = []
            lista_repuestos.forEach( (element,index) => {
                let fila = `
                <tr>
                <td>${index+1}</td>            
                <td>${element.descripcion}</td>
                <td>${element.precio}</td>
                <td>
                    <img style="width:4rem" src="${element.imagen}">
                </td>
                <td>${element.detalles}</td>
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
    }
    eleminar_repuestos(indice){
        let lista_repuestos = JSON.parse(localStorage.getItem("repuestos"))
        lista_repuestos.splice(indice,1)
        localStorage.setItem("repuestos",JSON.stringify(lista_repuestos))
        this.obtener_repuestos()
    }
    actualizacion_repuestos(){
        let indice = localStorage.getItem("indice")
        let listado_repuestos = JSON.parse(localStorage.getItem("repuestos"))
        listado_repuestos[indice].descripcion = document.getElementById("inp_descripcion").value
        listado_repuestos[indice].precio = document.getElementById("inp_precio").value
        listado_repuestos[indice].imagen = document.getElementById("inp_URL").value
        listado_repuestos[indice].detalles = document.getElementById("inp_detalles").value
        localStorage.setItem("repuestos",JSON.stringify(listado_repuestos))
        this.obtener_repuestos()
        document.getElementById("guardar").style.display = "block"
        document.getElementById("actulizar").style.display = "none"
        this.vaciar_el_formulario()
    }
    vaciar_el_formulario(){
        document.getElementById("formulario").reset()
    }
}