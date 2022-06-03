export default class Batman {

    constructor(){

    }
    async consumir_api(){
      const pelis = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman')
    
      const pelis_definitivas = await pelis.json()
    
      for (const Element of pelis_definitivas.Search){

        console.log(`
        ${Element.imdbID}
        ${Element.Title}
        ${Element.Year}
        ${Element.Poster}
        `)

      }
    }
}