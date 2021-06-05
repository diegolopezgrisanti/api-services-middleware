const responseOk = {
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
};


const responseError = {
    status: 500,
    message: "Problem connecting with Weather API"
}

const responseErrorNotFound = {
    status: 404,
    message: "city not found"
}

module.exports = {
    responseOk,
    responseError,
    responseErrorNotFound
}