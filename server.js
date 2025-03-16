import express from 'express';
import { PORT }  from '#app/utils/constants.js';
import registerRoutes from '#app/router.js';
import '#app/global/sequelize.js';

const app = express();

app.listen(PORT, (error) => error ? console.log(error) : console.log(`listening port ${PORT}`));

registerRoutes(app);