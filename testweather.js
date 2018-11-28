const weatherFunctions = require('./moods/weather.js')
const request = require('request');

let weatherResult = weatherFunctions.weather()
let Amsterdam = 'https://api.darksky.net/forecast/dd99484e9987befc5af779e47abe4908/52.3680,4.9036?units=si'


let search = process.argv[2]
//searchResult = []
//only sending amsterdam 
// 

// //CLIENT SIDE INPUT WILL BE SENT TO THE SERVER SIDE WITH THE BODY PARSER
// // let lastname = req.body.lastname
// function cityfinder (obj) { 

//     // let city = (obj[i].city)
//     // if (city.toLowerCase().indexOf(search.toLowerCase()) > -1){ //
//     //   searchResult.push(obj[i])
//     //   console.log(searchResult)
//     }
//--- WEATHER ---//

function cityfinder (obj) {
    if(search === Amsterdam) {

request(obj, { 
    json: true }, (err, respond, body) => {
        const icon = `${body.currently.icon}` 
        const humidity = `${body.currently.humidity}` 
        const temperature = `${body.currently.temperature}`
        weatherResult = weatherFunctions.weather(icon, humidity, temperature);
        console.log(body.timezone)
    });
  
    }

}
cityfinder(Amsterdam)
