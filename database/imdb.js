/* ------- READING JSON DATA --------- */
const fs = require('fs');

//Read movies JSON
const movieString = fs.readFileSync('./database/movies.json');

//Set movie array
const movies = JSON.parse(movieString);

//Movie Genres 0 = SAD , 1 = HAPPY , 2 = NEUTRAL
let sad = ['----sad-movies----'];
let happy = ['----happy-movies----'];
let neutral = ['----neutral-movies----'];
let matches = [];

/* --------- DATABASE METHODS --------- */
const showAllMovies = (movies) => {
  return movies;
}

const searchMovieByTitle = (title) => {
  matches = [];
  movies.forEach((movie) => {
    if(movie.title.toLowerCase().includes(title.toLowerCase())){
      matches.push(movie);
    }
  })
  return matches;
}

const searchMovieByGenre = (genre) => {
  matches = [];
  movies.forEach((movie) => {
    console.log(typeof movie.genres + ' ' + movie.genres);
    if (movie.genres.toLowerCase().includes(genre.toLowerCase())){
      matches.push(movie);
    }
  })
  return matches;
}

//create a function that loops through movie database and sorts them out by genre and then places them in arrays matching the emotions
//sad = 0 , happy = 1, neutral = 2

const sortMovieDB = (db) => {
  for(let i = 0; i <db.length; i++){
   
    let firstGenre = getGenre(db[i].genres, 0);

    sortGenrePushMovies(firstGenre, db[i]);
  }
}
         
// Extract each genre from the "genre" property string in the movie object
const getGenre = (genres, itemNumber) => {
  const genreList = genres.split(",");

  if(itemNumber === 0 && genreList[0].toLowerCase() !== 'n/a'){
    return genreList[0];
  } else if (itemNumber === 1 && genreList[1].toLowerCase() !== 'n/a'){
    return genreList[1];
  } else if (itemNumber === 2 && genreList[2].toLowerCase() !== 'n/a'){
    return genreList[2];
  } else {
    return `Genre not found`
  }
}

//sort movie genres and push to emotion arrays
const sortGenrePushMovies = function (genre, movie) {
  if (genre === 'Sci-Fi' || genre === 'Comedy' || genre === 'Adventure' || genre === 'Mystery') {
    //SAD
    sad.push(movie);
  } else if (genre === 'Action' || genre === 'Animation' || genre === 'Western' || genre === 'Short' || genre === 'Film-noir') {
    //HAPPY
    happy.push(movie);
  } else if (genre === 'Crime' || genre === 'Drama' || genre === 'Horror' || genre === 'Biography' || genre === 'Film-noir') {
    //NEUTRAL
    neutral.push(movie);
  }
}

sortMovieDB(movies);

//Export movie data to app.js for routing
exports.database = {
  movies,
  sad,
  happy,
  neutral,
  showAllMovies,
  searchMovieByTitle,
  searchMovieByGenre
}












  









