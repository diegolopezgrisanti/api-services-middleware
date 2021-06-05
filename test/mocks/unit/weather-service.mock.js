let windDirectionTests = [
    {
        test: "Wind direction N",
        param: 10,
        result: "N"
    },
    {
        test: "Wind direction S",
        param: 180,
        result: "S"
    },
    {
        test: "Wind direction null",
        param: null,
        result: null
    }
];

let getSpeedTests = [
    {
        test: "Get speed with data",
        param: 5.66,
        result: 20
    },
    {
        test: "Get speed null",
        param: null,
        result: null
    }
];

let buildWeatherResponseTests = [
    {
        test: "all data ok",
        param: {
            "coord": {
                "lon": 2.3488,
                "lat": 48.8534
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 12.19,
                "feels_like": 11.74,
                "temp_min": 11,
                "temp_max": 14.44,
                "pressure": 1004,
                "humidity": 87
            },
            "visibility": 10000,
            "wind": {
                "speed": 5.66,
                "deg": 250
            },
            "clouds": {
                "all": 75
            },
            "dt": 1621096958,
            "sys": {
                "type": 1,
                "id": 6550,
                "country": "FR",
                "sunrise": 1621051732,
                "sunset": 1621106714
            },
            "timezone": 7200,
            "id": 2988507,
            "name": "Paris",
            "cod": 200
        },
        result: {
            city: "Paris",
            temperature: 12.19,
            weather_description: "broken clouds",
            humidity: 87,
            visibility: 10000,
            pressure: 1004,
            wind: {
                speed: 20,
                direction: "OSO"
            }
        }
    }
];


module.exports = {
    windDirectionTests,
    getSpeedTests,
    buildWeatherResponseTests
}