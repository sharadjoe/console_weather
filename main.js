const request = require("request")

let apiKey = 'cc9c2228269e9bd2e8c5aa1987e68af7'

const argv = require('yargs').argv;

let city = argv.c || 'india';


let url = "http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}"

request(url, function(err, response, body){
    if(err){
        console.log("Error Found:", error)
    }
    else{
        let weather = JSON.parse(body)
        //let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        //console.log(message)
        console.log('body:',body)
    }
})

