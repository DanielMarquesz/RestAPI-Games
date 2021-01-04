const Joi = require('joi');


const gamesSchema  = Joi.object({

    title: Joi.string()        
        .min(3)
        .max(128)
        .required(),


    description: Joi.string()        
        .min(0)
        .max(128),

        
    price: Joi.number()
        .positive()
        .precision(2)
        .required(),


    quantity: Joi.number()
        .integer()
        .positive()        
        .required(),

    year: Joi.number()
        .integer()
        .positive(),

    avaiable: Joi.boolean()
        .required(),

    cover: Joi.string()        
        .min(0)
        .max(128),
});

module.exports = {gamesSchema};