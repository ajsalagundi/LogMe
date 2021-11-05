const express = require('express');
const mongoose = require('mongoose');
const fitnessModel = require('../models/data');
const router = express.Router();

const connection = mongoose.connect(
	'mongodb+srv://admin:admin123@cluster0.i4qlk.mongodb.net/Data?retryWrites=true&w=majority'
);

mongoose.Promise = global.Promise;

router.get('/', (req, res, next) => {
	res.status(200).send('Welcome to the home page');
	next;
});

router.get('/data', (req, res, next) => {
	// retrieve all data
	fitnessModel.find({}).then((data) => {
		res.send(data);
	});

	// if username and type provided => retrieve a set of data based on the type of data to return (fitness, finance, health, custom, etc...)
});

router.post('/data', (req, res, next) => {
	// add a set of data to the username given
	fitnessModel.create(req.body, (err, data) => {
		if (err) {
			res.status(505).send(err);
			next;
		} else {
			res.status(200).send('Data has been successfully added into the database for the user.');
		}
	});
});

router.delete('/data', (req, res, next) => {
	// remove a set of data from a particular user
	if (req.body.type === 'fitness') {
		fitnessModel.deleteOne({ "username": req.body.username }, (err, data) => {
			if (err) {
				res.status(505).send(err);
				next;
			} else {
				res.status(200).send('Data has been successfully deleted from the database for the user.');
			}
		});
	}
});

router.post('/custom', (req, res, next) => {
	// add a set of data to the username given after the ML model has labelled the set of data
});

// ROUTES FOR USER AUTHENTICATION AND AUTHORIZATION

module.exports = router;
