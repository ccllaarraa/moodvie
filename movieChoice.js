// const express = require('express')
// const bodyParser = require('body-parser')
// const port = 3000
// const app = express()
// app.set('view engine', 'ejs') // includes the .ejs file in the 'views' folder. 
// app.use(express.static(__dirname + '/views')); //include css
// app.use(bodyParser.urlencoded({ extended: false }))
const request = require('request');
const weatherFunctions = require('./moods/weather.js')
const colorFunctions = require('.//moods/color.js')
const rorschachFunctions = require('./moods/rorschach.js')

// app.get('/', (req, res) => {
//     res.render('index')
// })

// app.get('/result', (req, res) => {
let weatherResult = weatherFunctions.weather()
//--- WEATHER ---//
request('https://api.darksky.net/forecast/dd99484e9987befc5af779e47abe4908/52.3680,4.9036?units=si', { 
    json: true }, (err, respond, body) => {
        const icon = `${body.currently.icon}` 
        const humidity = `${body.currently.humidity}` 
        const temperature = `${body.currently.temperature}`
        weatherResult = weatherFunctions.weather(icon, humidity, temperature);
    });
console.log(weatherResult)

// //--- COLOR ---//
let colorResult = colorFunctions.color()
console.log(colorResult)

// //--- RORSCHACH ---//
let rorschachResult = rorschachFunctions.rorschach()
console.log(rorschachResult)

// //--- RESULT ---//

let result = [weatherResult, colorResult, rorschachResult] 

function getSum(x, y) { 
        return x + y;
      }
let sum = (result.reduce(getSum)) 

function average(x){ 
    return Math.ceil(sum/x.length) //math.ceil always rounds up 
}
console.log(average(result)) 

// --- WHATS NEXT? ---//
// assign weather value as * 2 as it has greater impact on your mood. 
// create a function for the result that sums up the result and
// the one value that runs the most will be the result. 
// jut add up the value, 

//idea from flores; combine two for your partners mood as well.  


// math.median(weather, soundchoice, shapechoice, colorchoice)

// math.floor() //rounds up the number
// cons: rounds up to 1 if tis 0.5

// median
// cons: in case your result is 2*2 and 2*1 you will get all movies from the two categories.
// res.render('result', {
    
//     movie: result
//     })
// })

// app.listen(port, () => console.log(`moodvie listening on port ${port}!`)) 

// //---FORM---//
// //based on input, will give a number. 

//--- GIT ---//
//when jonathan have pushed his changes into master. first commit in your branch.
// go to branch master, git pull, to get jons new files. then switch to your branch 
//- git merge master, to merge the changes  

