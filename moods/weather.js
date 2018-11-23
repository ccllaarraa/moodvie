
exports.weather = function (icon, humidity, temperature) {
    //toooo hot = sad
if((icon ==  'cloudy' || icon == 'partly-cloudy-day' || icon == 'partly-cloudy-night' || icon == 'clear-night' || icon == 'clear-day') && (temperature > 24) && (humidity > 0.6)){ 
    return 0
}
    //nice-ish weather = happy
else if(icon ==  'cloudy' || icon == 'partly-cloudy-day' || icon == 'partly-cloudy-night' || icon == 'clear-night' || icon ==  'clear-day' && temperature <= 24 >= 10 && humidity <=0.6){ 
    return 1
}
    //wet = neutral
else if(icon == 'rain' || icon == 'sleet' || icon == 'wind' || icon == 'fog'){ 
    return 2
}
    //whats not in there: less than 10 degrees & snow icon -- return sad
else {
    return 0 
}
}