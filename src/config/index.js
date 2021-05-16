const config = {
    PORT: process.env.PORT || 3000,
    APP_NAME: process.env.APP_NAME,
    CORS_ORIGIN: JSON.parse(process.env.CORS_ORIGIN),
    WEATHER_BASE_URL: process.env.WEATHER_BASE_URL,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
};

for (const key in config) {
    if (config[key] == undefined) {
        throw new Error(`You need to set ${key} environment variable`);
    }
}

module.exports = config;