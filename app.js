//Load database into app
const movies = require('./database/imdb');

//console.log(movies.database.showAllMovies(movies.database.movies)[0].genres);
//console.log(movies.database.searchMovieByTitle('godfather')[0]);
//console.log(movies.database.searchMovieByGenre('Action'));

/* ------- SERVER -------- */

const express = require('express')

const app = express();
const port = 3000;

//load static files
app.use(express.static('public'))

//set up body parser
app.use(express.urlencoded({ extended: false }));

//start template engine
app.set('view engine', 'ejs');

//serve home page
app.get('/', (req, res) => {
  res.render('index');
});

//
app.post('/', (req, res) => {
  const emotion = req.body.emotion;
  // console.log(emotion);
  const response = movies.database.randomMovie(emotion);
  //res.send({ movies: response});
  res.render('results', {movies: response});
})

app.get('/results', (req, res) => {
  res.render('results');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
