const { WeatherAPI } = require("../apis");

class WeatherService {

    constructor() {
        this._weatherAPI = new WeatherAPI();
    }

    getWeather = async (city) => {
        const response = await this._weatherAPI.getWeatherByCity(city);
        return this.buildWeatherResponse(response);
    }

    buildWeatherResponse = (response) => {
        return {
            city: response.name,
            temperature: response.main.temp,
            weather_description: response.weather[0].description,
            humidity: response.main.humidity,
            visibility: response.visibility,
            pressure: response.main.pressure,
            wind: {
                speed: this.getSpeed(response.wind.speed),
                direction: this.getWindDirection(response.wind.deg)
            }
        }
    }

    getSpeed(speed){
        if(speed == null || speed == undefined){
            return null;
        }
        return Math.round(speed * 60 * 60 / 1000);
    }

    getWindDirection(deg){
        if(deg == null || deg == undefined){
            return null;
        }
        const windDirection  = {
            'NNE': {
                from: 11.26,
                to: 33.75
            },
            'NE': {
                from: 33.76,
                to: 56.25
            },
            'ENE': {
                from: 56.26,
                to: 78.75
            },
            'E': {
                from: 78.76,
                to: 101.25
            },
            'ESE': {
                from: 101.26,
                to: 123.75
            },
            'SE': {
                from: 123.76,
                to: 146.25
            },
            'SSE': {
                from: 146.26,
                to: 168.75
            },
            'S': {
                from: 168.76,
                to: 191.25
            },
            'SSO': {
                from: 191.26,
                to: 213.75
            },
            'SO': {
                from: 213.76,
                to: 236.25
            },
            'OSO': {
                from: 236.26,
                to: 258.75
            },
            'O': {
                from: 258.76,
                to: 281.25
            },
            'ONO': {
                from: 281.26,
                to: 303.75
            },
            'NO': {
                from: 303.76,
                to: 326.25
            },
            'NNO': {
                from: 326.26,
                to: 348.75
            }
            }

            let direction = "N";
            for(let prop in windDirection) {
                let from = windDirection[prop].from;
                let to = windDirection[prop].to;
                if(deg >= from && deg <= to) {
                    direction = prop;
                    break;
                }
            }
            return direction;
    }     
}
module.exports = WeatherService;