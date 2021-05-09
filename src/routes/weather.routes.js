const express = require('express');
const router = express.Router();
const { WeatherController } = require('../controllers');
const weatherController = new WeatherController();

router.get('/', weatherController.getWeather);

module.exports = router;