const request = require('supertest');
const express = require('express');
const createApp = require('../MainApp');
const loginRouter = require('../Routers/loginRouter');

describe('login API', ()=> {

    let app;  // out main app instance
    let agent; // supertest agent
    let server; // HTTP server instance

    beforeAll((done) => {
        // app = createApp();
        // server = app.listen(0, done);
        // agent = request.agent(server);

        app = express();
        app.use(express.json());
        app.use("/api/v1",loginRouter);

        server = app.listen(0, done);
        agent = request.agent(server);
    });

    afterAll((done) => {
        server.close(done);
    });


    it('GET /api/login should return a users value', async () => {

        const payload = {
            username : "vignesh",
            password: "vignesh"
        }

        const res = await agent.get('/api/v1/login').send(payload).set('Accept', 'application/json');
        expect(res.statusCode).toEqual(200);
        // expect(res.body).toHaveProperty('message', 'login successfull');
        expect(res.text).toBe('login successfull');
    })

        it('GET /api/login should return 403 status code', async () => {

        const payload = {
            username : "vignesh",
            password: "kumar"
        }

        const res = await agent.get('/api/v1/login').send(payload).set('Accept', 'application/json');
        expect(res.statusCode).toEqual(403);
    });

});