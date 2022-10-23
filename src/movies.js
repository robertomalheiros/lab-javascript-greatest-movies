// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map( filmes => filmes.director)
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(!moviesArray.length == 0){
        const generos = moviesArray.filter( filmes => filmes.genre.includes("Drama"))
        const diretor = generos.filter( filmes => filmes.director == 'Steven Spielberg')
        return diretor.length
    }
    
    return 0
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let notas = []
    if(!moviesArray.length == 0){

        const mediaUndef = moviesArray.filter(filme => filme.score !== undefined)

        const scoreG = mediaUndef.filter(filme => notas.push(filme.score))
        console.log(notas)
        if(notas.length == 0 || notas.length != 0){

        const somaNotas = notas.reduce((nAnt, nAtua)=> nAnt+nAtua)
        const mediaNotas = (somaNotas / mediaUndef.length)
        return parseFloat(mediaNotas.toFixed(2))
        }

    }
        return 0

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let listaNota = []
    if(moviesArray.length !== 0){
        
        const filmeDrama = moviesArray.filter( filmes => filmes.genre.includes("Drama"))
        const scoreG = filmeDrama.filter(filmes => listaNota.push(filmes.score))
        if(listaNota.length === 0){
            return 0
        }
        
        const somaG = listaNota.reduce((nAnt, nAtua)=> nAnt+nAtua)
        const mediaG = somaG / listaNota.length
        return parseFloat(mediaG.toFixed(2))

        

    }return 0
        
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
        const novoArray = moviesArray.map(a => a)
        novoArray.sort((a, b) => a.year - b.year).sort((a,b) => a.year == b.year? a.title.localeCompare(b.title): a.year - b.year)
        return novoArray
    
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

        let listaA = []
        let listaFilmes = []
        const lista = moviesArray.filter(filme => listaA.includes(filme.title)?
            filme.title: listaA.push(filme.title)) 
        listaA.sort((a,b) => a.localeCompare(b))
       
        if(moviesArray.length < 19){
            for(let i = 0; i < moviesArray.length ; i++){
                listaFilmes.push(listaA[i])}
                return listaFilmes
        }
        else if((moviesArray.length > 19)){
            for(let i = 0; i < 20 ; i++){
                listaFilmes.push(listaA[i])}
                return listaFilmes
        }


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
