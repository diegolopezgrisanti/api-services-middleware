const apiResponseOk = {
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
};

const apiResponseIncomplete = {
    // "coord": {
    //     "lon": 2.3488,
    //     "lat": 48.8534
    // },
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            // "description": "broken clouds",
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
};

const apiNotFoundResponse = {
    "cod": "404",
    "message": "city not found"
};

module.exports = {
    apiResponseOk,
    apiResponseIncomplete,
    apiNotFoundResponse
}