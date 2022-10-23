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
    if(!moviesArray.length == 0){
        let zero = []
        const mediaUndef = moviesArray.map(nota => nota.score !== undefined?
            zero.push(nota.score): zero.push(0))    
        const somaZero = zero.reduce((nAnt, nAtua)=> nAnt+nAtua)
        const mediaZero = (somaZero / moviesArray.length)
        return parseFloat(mediaZero.toFixed(2))

    }
        return 0

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let listaNota = []
    if(moviesArray.length !== 0){
        const filmeDrama = moviesArray.filter( filmes => filmes.genre.includes("Drama"))
        const scoreG = filmeDrama.filter(filmes => listaNota.push(filmes.score))
        const somaG = listaNota.reduce((nAnt, nAtua)=> nAnt+nAtua)
        const mediaG = somaG / listaNota.length
        if(listaNota.length !== 0){
            return parseFloat(mediaG.toFixed(2))
        }else if (listaNota == 0){
            return 0}
        

    }return 0
        
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
