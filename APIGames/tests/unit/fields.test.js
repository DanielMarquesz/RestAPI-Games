
const { gamesSchema } = require('../../validations/models/gamesSchema');

describe("Fields validations", () => {

    it("Shold not return any error", async () => {

        const response = gamesSchema.validate({

            "title": "Damas",
            "description": "Jogo simples de dama",
            "price": 23.9,       
            "quantity": 31,
            "year": 1800,
            "avaiable": true,
            "cover": "Damas"}).error ? true : false;
            
        expect(response).toBe(false);
        
    });


    it("Shold an return error for empty fields", async () => {

        const response = gamesSchema.validate({

            "title": "",
            "description": "",
            "price": 23.9,       
            "quantity": 31,
            "year": 1800,
            "avaiable": true,
            "cover": "1561"}).error ? true : false;
            
        expect(response).toBe(true);
        
    });


    it("Shold an return error for min characters fields", async () => {

        const response = gamesSchema.validate({

            "title": "ee",
            "description": "Jumanji",
            "price": 23.9,       
            "quantity": 31,
            "year": 1800,
            "avaiable": true,
            "cover": "1561"}).error ? true : false;
            
        expect(response).toBe(true);
        
    });

});