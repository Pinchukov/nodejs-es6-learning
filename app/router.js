import home from '#app/controllers/home.js';
import contacts from '#app/controllers/contacts.js';
import login from '#app/controllers/auth/login.js';


//import login from "./controllers/auth/login.js";

export default function registerRoutes(app) {
    app.get('/', home);
    app.get('/contacts', contacts);
    app.get('/auth/login', login);
    //app.post('/auth/login', login);
    
};
