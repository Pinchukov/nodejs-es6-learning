import contacts from '#app/controllers/contacts.js';
import home from '#app/controllers/home.js';

export default function registerRoutes(app) {
    app.get('/', home);
    app.get('/contacts', contacts);
    
};
