const express = require('express');
const routers = require('../routes');
const { ErrorMiddleware } = require("../middlewares");
const config = require("../config");
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger/swagger.json');
class Server {

    constructor(){
        console.log("Initializing server...");

        // init app
        this._app = express();

        // init app level middlewares
        this.initMiddlewares();

        // init routers
        this._routers = routers;
        this.initRouters();

        // Setting error middleware
        this._app.use(ErrorMiddleware);

    }

    start = () => {
        return this._app.listen(config.PORT, () => {
            console.log(`${config.APP_NAME} running on port ${config.PORT}`);
        })
    }

    close = () => {
        this._app.close();
    }
    
    initMiddlewares = () => {
        console.log("Initializing middlewares...");
        this._app.use(express.urlencoded({ extended: false }));
        this._app.use(express.json());

        const corsOptions = {
            origin: function (origin, callback) {
                if (config.CORS_ORIGIN.includes(origin)) {
                  callback(null, true)
                } else {
                  callback(new Error('Not allowed by CORS'))
                }
            }
        }
        //this._app.use(cors(corsOptions));
        this._app.use(cors());
    }

    initRouters = () => {
        console.log("Initializing routes...");
        this._app.use("/weather", this._routers.WeatherRoutes);

        // Swagger UI
        const options = {
            swaggerOptions: {
                validatorUrl: null
            },
            customCss: '.swagger-ui .topbar { display: none }'
        };
        
        this._app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
        this._app.get("/swagger.json", function (req, res) {
            res.setHeader("Content-Type", "application/json");
            res.send(swaggerDocument);
        })        
    }
}

module.exports = Server;