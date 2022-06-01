export default class Trapecio {

constructor(bma,bme,alt){
this.basemayor = bma
this.basemenor = bme
this.altura = alt
}
 calcular_trapecio()
{
 let area = (bma + bme / 2) * alt
 return area
 
}

}