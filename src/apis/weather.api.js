const axios = require('axios');
const config = require('../config');

class WeatherAPI {

    getWeatherByCity = async (city, units = 'metric') => {
        try {
            const URL = config.WEATHER_BASE_URL  + config.WEATHER_API_KEY + '&q=' + city + '&units=' + units;
            let response = await axios.get(URL);
            return response.data;
        } catch (error) {
            if(error.response.status >= 400 && error.response.status < 500){
                let newError =  new Error(error.response.data.message);
                newError.status = error.response.status;
                throw newError;
            }
            throw new Error('Problem connecting with Weather API');
        }    
    }
}

module.exports = WeatherAPI;