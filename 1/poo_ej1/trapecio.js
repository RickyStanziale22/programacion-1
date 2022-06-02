export default class Trapecio {

constructor(bma,bme,alt){
this.basemayor = bma
this.basemenor = bme
this.altura = alt
}
 calcular_trapecio()
{
 let area = ((Number(this.basemayor) + Number(this.basemenor))/2)*this.altura
 return area
 
}

}