// const express = require('express')
// const bodyParser = require('body-parser')
// const port = 3000
// const app = express()
// app.set('view engine', 'ejs') // includes the .ejs file in the 'views' folder. 
// app.use(express.static(__dirname + '/views')); //include css
// app.use(bodyParser.urlencoded({ extended: false }))
const request = require('request');
const weatherFunctions = require('./weather.js')
const colorFunctions = require('./color.js')

// app.get('/', (req, res) => {
//     res.render('index')
// })

// app.get('/result', (req, res) => {

//--- WEATHER ---//
request('https://api.darksky.net/forecast/dd99484e9987befc5af779e47abe4908/47.5615,-52.7126?units=si', { 
    json: true }, (err, respond, body) => {
        const icon = `${body.currently.icon};` 
        const humidity = `${body.currently.humidity}` 
        const temperature = `${body.currently.temperature}`
      
        let weatherResult = weatherFunctions.weather(icon, humidity, temperature);
        console.log(weatherResult);
        console.log(body.timezone)
        console.log(body.currently.icon)
        console.log(body.currently.temperature)
        console.log(body.currently.humidity)
    });

// //--- COLOR ---//
let colorResult = colorFunctions.color()
console.log(colorResult)


// //--- RORSCHACH ---//
// function shapechoice () {
//     let shapeInput = req.body.shape 

//     if(shapeInput == 'img1') {
//         return 0
//     } else if(shapeInput == 'img2') {
//         return 1
//     } else {
//         return 2
//     }
// }

// //--- SHAPE? ---//
// function soundchoice () {
//     let soundInput = req.body.sound 

//     if(soundInput == 'snd1') {
//         return 0
//     } else if(soundInput == 'snd2') {
//         return 1
//     } else {
//         return 2
//     }
// }
// //--- RESULT ---//
// function result () {
//     math.mean(weather, soundchoice, shapechoice, colorchoice)
//    // math.median(weather, soundchoice, shapechoice, colorchoice)
// //    mean: 
// // math.floor() 
// // cons: rounds up to 1 if tis 0.5

// // median
// // cons: in case your result is 2*2 and 2*1 you will get all movies from the two categories.
// }
// res.render('result', {
    
//     movie: result
//     })
// })

// app.listen(port, () => console.log(`moodvie listening on port ${port}!`)) 

// //---FORM---//
// //based on input, will give a number. 

// //--- git ---//
// //when jonathan have pushed his changes into master. first commit in your branch. go to branch master, git pull, to get jons new files. then switch to your branch - git merge master, to merge the changes  

