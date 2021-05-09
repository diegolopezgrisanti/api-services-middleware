const axios = require('axios');
const config = require('../config');

class WeatherAPI {

    getWeatherByCity = async (city, units = 'metric') => {
        try {
            const URL = config.WEATHER_BASE_URL  + config.WEATHER_API_KEY + '&q=' + city + '&units=' + units;
            let response = await axios.get(URL);
            return response.data;
        } catch (error) {
            throw new Error('Problem connecting with Weather API');
        }    
    }
}

module.exports = WeatherAPI;