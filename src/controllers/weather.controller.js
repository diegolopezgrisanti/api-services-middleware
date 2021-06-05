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
            if(req.query.city == undefined || req.query.city == "") {
                let error = new Error("City query param is required");
                error.status = 400;
                throw error;
            }
            const weather = await this._weatherService.getWeather(req.query.city);
            res.send(weather);      
        } catch (err) {
            next(err);
        }
    }
}

module.exports = WeatherController;
