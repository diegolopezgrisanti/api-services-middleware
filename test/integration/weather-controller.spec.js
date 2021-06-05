const { expect } = require("chai");
const { describe } = require('mocha');
const request = require('supertest');
const { apiResponseOk, apiResponseIncomplete, apiNotFoundResponse } = require("../mocks/integration/api-weather-response.mock.js");
const { responseOk, responseError, responseErrorNotFound} = require("../mocks/integration/weather-controller-response.mock");

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const Server = require("../../src/server");

describe('Weather controller integration tests', () => {
    let app = null;

    beforeEach(() => {
        let appServer = new Server();
        app = appServer.start();
    });

    afterEach(() => {
        if(app){
            app.close();
        }
        app = null;
    });

    it('GET /weather response OK', (done) => {

        let mockAxios = new MockAdapter(axios);
        mockAxios
            .onGet(process.env.WEATHER_BASE_URL  + process.env.WEATHER_API_KEY + '&q=paris&units=metric')
            .reply(200, apiResponseOk);

        request(app)
            .get("/weather")
            .set('Origin', "http://localhost:4200")
            .query(
                {
                    city: "paris"
                }
            )
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);

                expect(res).be.not.null;
                expect(res).be.not.undefined;
                expect(res.body).to.deep.equal(responseOk);

                done();
            });
    });

    it('GET /weather response Error', (done) => {
        let mockAxios = new MockAdapter(axios);
        mockAxios
            .onGet(process.env.WEATHER_BASE_URL + process.env.WEATHER_API_KEY + '&q=paris&units=metric')
            .reply(500);

            request(app)
                .get("/weather")
                .set('Origin', "http//localhost:4200")
                .query(
                    {
                        city: "paris"
                    }
                )
                .expect(500)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    if(err) return done(err);

                    expect(res).be.not.null;
                    expect(res).be.not.undefined;
                    expect(res.body).to.deep.equal(responseError);

                    done();
                });
    });

    it('GET /weather response Validation error', (done) => {
        let mockAxios = new MockAdapter(axios);
        mockAxios
            .onGet(process.env.WEATHER_BASE_URL + process.env.WEATHER_API_KEY + '&q=paris&units=metric')
            .reply(404, apiNotFoundResponse);

            request(app)
                .get("/weather")
                .set('Origin', "http//localhost:4200")
                .query(
                    {
                        city: "paris"
                    }
                )
                .expect(404)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    if(err) return done(err);

                    expect(res).be.not.null;
                    expect(res).be.not.undefined;
                    expect(res.body).to.deep.equal(responseErrorNotFound);

                    done();
                });
    });    
});