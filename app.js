//Load database into app
const movies = require('./database/imdb');
//load weather API
const request = require('request');
//import weather, color & rorschack functions
const weatherFunctions = require('./moods/weather.js')
const colorFunctions = require('./moods/color.js')
const rorschachFunctions = require('./moods/rorschach.js')

//console.log(movies.database.showAllMovies(movies.database.movies)[0].genres);
//console.log(movies.database.searchMovieByTitle('godfather')[0]);
//console.log(movies.database.searchMovieByGenre('Action'));

/* ------- SERVER -------- */

const express = require('express')

const app = express();
const port = 3000;

//load static files
app.use('/public', express.static('public'))


//set up body parser
app.use(express.urlencoded({ extended: false }));

//start template engine
app.set('view engine', 'ejs');

//serve home page
app.get('/', (req, res) => {
  res.render('index', {weatherResult: false});
});

//serve home page
app.get('/main', (req, res) => {
  res.render('main', {weatherResult: false});
});

/*------------ RESULT REQUEST ------------*/
app.post('/results', (req, res) => {
  console.log(req.body)
  let cityInput = req.body.city
  let weatherResult = weatherFunctions.weather();
  if(cityInput === 'Amsterdam') {
request('https://api.darksky.net/forecast/dd99484e9987befc5af779e47abe4908/52.3680,4.9036?units=si', { 
  json: true }, (err, respond, body) => {
      const icon = `${body.currently.icon}` 
      const humidity = `${body.currently.humidity}` 
      const temperature = `${body.currently.temperature}`
      weatherResult = weatherFunctions.weather(icon, humidity, temperature);
      console.log(icon)
    });
  }
      let color = (req.body.color) 
      let colorResult = colorFunctions.color(color);

      let rorschack = (req.body.rorschack)  
      let rorschachResult = rorschachFunctions.rorschach(rorschack)


    //console.log(weatherResult, color, rorschack)
    let result = [weatherResult, colorResult, rorschachResult] 
    console.log(weatherResult, colorResult, rorschachResult)
      function getSum(x, y) { 
            return x + y;
      }
    let sum = (result.reduce(getSum)) 
      function average(x){ 
        return Math.ceil(sum/x.length) //math.ceil always rounds up 
      }
    let Average = average(result)
    let total = Average.toString()
    
    console.log(total)
    let list = []
    let movie1 = movies.database.randomMovie(total);
    let movie2 = movies.database.randomMovie(total);
    list[0] = movie1;
    list[1] = movie2;

    res.render('results', {movies: list});
})

app.get('/results', (req, res) => {
  res.render('results');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
