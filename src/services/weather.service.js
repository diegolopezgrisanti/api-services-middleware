const { WeatherAPI } = require("../apis");

class WeatherService {

    constructor() {
        this._weatherAPI = new WeatherAPI();
    }

    getWeather = async (city) => {
        try {

            return await this._weatherAPI.getWeatherByCity(city);

        } catch (error) {
            throw error;
        }
    }
    
}
module.exports = WeatherService;