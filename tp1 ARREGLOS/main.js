let lenguajes = ['Python','JavaScript','Csharp', 'C++','Java','PHP', 'Ruby']
function mostrar(){
    const longitud = lenguajes.length
    console.log('longitud:'+longitud)

    const ultimo = lenguajes [longitud-1]
    console.log('Ûltimo elemento:'+ultimo)

    const tercero = lenguajes[0]
    console.log('tercer elemento: '+tercero)
}
 function si(){
    lenguajes.forEach( (element,index) => {
        console.log(index+'-'+element)
    });
 }
  lenguajes.push('Go')
  console.log(lenguajes)

  lenguajes.shift()
  console.log(lenguajes)

  lenguajes.unshift("Kotlin")
  console.log(lenguajes)

  const posicion = 4;
  const numeroElemento = 2;
  const elementosEliminados = lenguajes.splice(posicion,numeroElemento)
  console.log(elementosEliminados)
  console.log(lenguajes)

  