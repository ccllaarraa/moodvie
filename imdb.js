/* ------- READING JSON DATA --------- */

//1.Import JSON Models & DATA
const getJson = require('./json-file-reader');
const filename = './movies.json';

//Bring in IMDB module
const imdb = require('imdb-api');

//API KEY for IMDB;
const key = 'b3dac628';

//Movielist array
let movies = [];
let sad = ['----sad-movies----'];
let happy = ['----happy-movies----'];
let neutral = ['----neutral-movies----'];

//Read movie json data
getJson.passJSON(filename, function(data){
  
  //loop through 150 top films according to IMDB
  for (let i = 0; i <=149; i++) {
    //console.log(data[i].title); title
     imdb.get({ name: data[i].title }, { apiKey: key, timeout: 30000 })
     .then((movieObj) => {
       //Push all movies to db
       movies.push(movieObj);
     })
     .catch(console.log); //error
  }
})

//Show results
const resultsMovie = () => {

  //wait to return result of matches
  setTimeout(() => {
    //Log out movie database
    //console.log(movies.length);

    //search movie titles
    //getMovieByTitle('The Shawshank Redemption')

    //sort movies genres into emotions
    sortMovieDB(movies);
    console.log(happy);
  }, 3000);
}

resultsMovie()

/* --------- CUSTOM IMDB METHODS --------- */
const getMovieByTitle = (title) => {
  let matches = [];
  movies.forEach((movie) => {
    if(movie.title.toLowerCase().includes(title.toLowerCase())){
      matches.push(movie);
      console.log(matches);
    }
  })
}

//create a function that loops through movie database and sorts them out by genre and then places them in arrays matching the emotions
//sad = 0 , happy = 1, neutral = 2

const sortMovieDB = (db) => {
  for(let i = 0; i <db.length; i++){
    //console.log(db[i].genres);
   
    let firstGenre = getGenre(db[i].genres, 0);
    let movie = createMovieObj(db[i])

    sortGenrePushMovies(firstGenre, movie);
  }
}
         
// Extract each genre from the "genre" property string
const getGenre = (genres, itemNumber) => {
  const genreList = genres.split(",");

  if(itemNumber === 0 && genreList[0] !== 'N/A'){
    return genreList[0];
  } else if (itemNumber === 1 && genreList[1] !== 'N/A'){
    return genreList[1];
  } else if (itemNumber === 2 && genreList[2] !== 'N/A'){
    return genreList[2];
  } else {
    return `Genre not found`
  }
}

const createMovieObj = (movie) => {
  return {
    title: movie.title,
    plot: movie.plot,
    year: movie.year,
    genres: movie.genres,
    awards: movie.awards,
    director: movie.director,
    rating: movie.rating, //imdb
    metascore: movie.metascore, //metacritic
    poster: movie.poster
  }
}

//sort movie genres and push to matching array
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











  









