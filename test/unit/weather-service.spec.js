const { expect } = require("chai");
const { describe } = require('mocha');
const { WeatherService } = require("../../src/services");
const { windDirectionTests, getSpeedTests, buildWeatherResponseTests} = require("../mocks/unit/weather-service.mock");

describe('Weather service unit tests', () => {
    let weatherService;
    before(() => {
        weatherService = new WeatherService();
    });

    /**
     * Wind direction tests
     */
    windDirectionTests.forEach(testCase => {
        it(testCase.test, () => {
            let result = weatherService.getWindDirection(testCase.param);
            expect(result).to.equal(testCase.result)
        });
    });

    getSpeedTests.forEach(testCase => {
        it(testCase.test, () => {
            let result = weatherService.getSpeed(testCase.param);
            expect(result).to.equal(testCase.result)
        });
    });

    buildWeatherResponseTests.forEach(testCase => {
        it(testCase.test, () => {
            let result = weatherService.buildWeatherResponse(testCase.param);
            expect(result).to.deep.equal(testCase.result)
        });
    });
    
});