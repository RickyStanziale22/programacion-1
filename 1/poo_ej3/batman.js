export default class Batman {

    constructor(){

    }
    async consumir_api(){
      const pelis = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman')
    
      const pelis_definitivas = await pelis.json()
    
        let batipeliculas = []
    
      for (const Element of pelis_definitivas.Search){

        let batipelicula = 
        `
        <div class="col-lg-3">
            <div class="card">
                <img height="300" src=${Element.Poster} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${Element.Title}</h5>
                    <p class="card-text">${Element.Year}</p>
                </div>
            </div>
        </div>`
        batipeliculas.push(batipelicula)

      }
      document.getElementById("si").innerHTML = batipeliculas.join('')
    }

}