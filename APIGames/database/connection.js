/*

const Sequellize = require('sequelize');

const configDatabase = require('../config/db.config');


const connection = new Sequellize(configDatabase);
const Games = require("../models/Games");

Games.init(connection);

module.exports = connection;
*/

const configDatabase = require('../config/db.config')
const Sequelize = require('sequelize')
const connection = new Sequelize(configDatabase)

module.exports = connection