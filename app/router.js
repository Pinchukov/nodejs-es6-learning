//import express from 'express';
//const router = express.Router();

import getContacts from '#app/controllers/contacts.js';

export default function registerRoutes(app) {
    app.get('/', (_, res) => {
        res.send('Hello Index Page');
    });
    app.get('/contacts', (_, res) => {
        res.send('Hello Contacts Page');
        getContacts();
    });
};

