const request = require('supertest');
const service = require('../../service');
const db = require("../../models/Games");

describe("Route testing", () => {

    // List all the registers
    it("Should return the status 200 - GET", async () =>{
        const gameGet = await request(service).get('/store/list');
        expect(gameGet.status).toBe(200);
    });

    // list one specified register
    it("Should return the status 200 - GET", async () =>{
        const gameGet = await request(service).get('/store/list/2');
        expect(gameGet.status).toBe(200);
    });
    
    // Register a new product
    it("Should return the status 201 - POST", async () =>{
        const gameGet = await request(service).post('/store/register').send({

            "title":"Sea of Piratescle",
            "description":"GOTY 2015",
            "price":200.2,
            "quantity":10,
            "year":1996,
            "avaiable": true,
            "cover": "Bumble"

        });
        expect(gameGet.status).toBe(201);
    });

    // Edit fields
    it("Should return the status 201 - PUT", async () =>{
        const gameGet = await request(service).put('/store/edit/2').send({

            "title":"Sea of Beachs",
            "description":"GOTY 2015",
            "price":200.2,
            "quantity":10,
            "year":1996,
            "avaiable": false,
            "cover": "Umble"

        });
        expect(gameGet.status).toBe(201);
    });

    // Turn the game avaible ou not
    it("Should return the status 200 - PATCH", async () =>{
        const gameGet = await request(service).patch('/store/edit/2').send({

            "avaiable": true 
        });
        expect(gameGet.status).toBe(200);
    });

    // Delete a game from the list
    it("Should return 200 - DELETE", async () => {
        const gameGet = await request(service).delete('/store/remove/2');
        expect(gameGet.status).toBe(200);
    });
});