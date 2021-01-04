
const express = require('express');
const router = express.Router();
const GamesController = require('../controllers/GamesController');

router.get("/lista", (req, res) =>{
    res.send('Socorro')
});

module.exports = router;