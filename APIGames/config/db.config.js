const env = require('dotenv').config().parsed;

module.exports = {
    dialect: 'mysql',
    host: env.HOST,
    username: env.USERNAME,
    password: env.PASSWORD,
    database: 'games4fun',  // Set the name of database
    timezone: '-03:00'
}
