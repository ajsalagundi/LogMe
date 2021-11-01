const express = require('express');
const router = express.Router();
const Fitness = require('../models/data')

router.get('/data', (req, res, next) => {
	// retrieve all data
});

router.get('/data/:username/:id', (req, res, next) => {
	// retrieve a set of data based on the type of data to return (fitness, finance, health, custom, etc...)
    Fitness.find({ 
            username: (req.params.username ? req.params.username : ''),
            id: (req.params.id ? req.params.id : '')
    }).then((data) => res.json(data))
});

router.post('/data/:username', (req, res, next) => {
	// add a set of data to the username given
});

router.delete('/data/:username/:id', (req, res, next) => {
    // remove a set of data from a particular user
})

router.post('/custom/:username', (req, res, next) => {
    // add a set of data to the username given after the ML model has labelled the set of data
})

// ROUTES FOR USER AUTHENTICATION AND AUTHORIZATION 

module.exports = router;
