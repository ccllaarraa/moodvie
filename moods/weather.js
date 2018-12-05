
// const request = require('request');

// let cityInput = 'Amsterdam'

// const weatherMood = (city) => {
//     let result = 0
//     if(city === 'Amsterdam') {
//         request('https://api.darksky.net/forecast/dd99484e9987befc5af779e47abe4908/52.3680,4.9036?units=si', { 
//         json: true }, (err, respond, body) => {
//             const icon = `${body.currently.icon}` 
//             const humidity = `${body.currently.humidity}` 
//             const temperature = `${body.currently.temperature}`
//             result = weatherCalc(icon, humidity, temperature);
//             //console.log(weatherResult);
//           });
//         }
//         return result
// }

exports.weather = function (icon, humidity, temperature) {
    //toooo hot = sad
if((icon ==  'cloudy' || icon == 'partly-cloudy-day' || icon == 'partly-cloudy-night' || icon == 'clear-night' || icon == 'clear-day') && (temperature > 24) && (humidity > 0.6)){ 
    return 0
}
    //nice-ish weather = happy
else if(icon ==  'cloudy' || icon == 'partly-cloudy-day' || icon == 'partly-cloudy-night' || icon == 'clear-night' || icon ==  'clear-day' && temperature <= 24 >= 10 && humidity <=0.6){ 
    return 2.5
}
    //wet = neutral
else if(icon == 'rain' || icon == 'sleet' || icon == 'wind' || icon == 'fog'){ 
    return 1.5
}
    //whats not in there: less than 10 degrees & snow icon -- return sad
else {
    return 0
}
}

//console.log(weatherMood(cityInput));
