//Load database into app
const movies = require('./database/imdb');
//load weather API
const request = require('request');
//import weather, color & rorschack functions
const weatherFunctions = require('./moods/weather.js')
const colorFunctions = require('.//moods/color.js')
const rorschachFunctions = require('./moods/rorschach.js')
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
  res.render('index', {weatherResult: false});
});

/*------------- WEATHER -----------------*/

app.post('/weather', (req, res) => {
  let cityInput = req.body.city
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
    console.log(weatherResult)
    res.send({weatherResult: weatherResult})
})

/*---------------- COLOR -------------------*/


app.post('/color', (req, res) => {
  let color = req.body.color // '0'
  let colorResult = colorFunctions.color(color);
 //console.log(typeof color)

res.send({colorResult: colorResult})
})

/*-------------- RORSCHACH ----------------*/

app.post('/rorschack', (req, res) => {
  let rorschach = req.body.rorschach  //how to take value from ejs?
  let rorschachResult = rorschachFunctions.rorschach(rorschach)
res.send({rorschachResult: rorschachResult})
})

/*------------ RESULT REQUEST ------------*/
app.post('/movie', (req, res) => {
let rorschachResult = rorschachFunctions.rorschach()
let colorResult = colorFunctions.color();
let weatherResult = weatherFunctions.weather()

let result = [weatherResult, colorResult, rorschachResult] 

  function getSum(x, y) { 
        return x + y;
  }
let sum = (result.reduce(getSum)) 

  function average(x){ 
    return Math.floor(sum/x.length) //math.ceil always rounds up 
  }
let Average = average(result)
let total = Average.toString()
console.log(total)
const response = movies.database.randomMovie(total);
console.log(response)
res.send(response);
  //res.redirect(response);
})
/* WOULD BE NICE TO DO A WHEEL - SO WAITING 5 SECONDS.. 'WE ARE NOW GENERATING THE BEST MOVIE BASED ON YOUR CURRENT MOOD'*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
