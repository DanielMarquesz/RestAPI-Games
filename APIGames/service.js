const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const GamesController = require('../APIGames/controllers/GamesController');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/store', GamesController)

app.listen(3000, () => {
    console.log(`The Server is Running in the Port: 3000` )
});

module.exports = app;