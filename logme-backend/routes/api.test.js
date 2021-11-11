const request = require('supertest');
const router = require('./api.js');
const express = require('express');

const app = new express();
app.use('/', router)

describe('Test the routing', () => {
    
	test('should route to the main page', async () => {
        const res = await request('app').get('/');
        expect(res.statusCode).toBe('200');
    });
});
