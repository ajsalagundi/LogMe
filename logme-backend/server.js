const express = require('express');
const router = require('./routes/api');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json())

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.use('/', router);

app.listen(port, () => {
	console.log(`Express listening on port:${port}`);
});
