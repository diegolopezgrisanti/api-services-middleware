const { WeatherService } = require("../services");

class WeatherController {

    constructor() {
        this._weatherService = new WeatherService();
    }

    /**
     * Get weather 
     * @param {*} req 
     * @param {*} res 
	 * @param {*} next
     */
    getWeather = async (req, res, next) => {
        try {
            const weather = await this._weatherService.getWeather(req.query.city);

            res.send(weather);      
        } catch (err) {
            next(err);
        }
    }
}

module.exports = WeatherController;
