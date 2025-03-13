// 01.38 time, video 3 - Подключение хранилища
// В php курсе есть урок по запросам mysql, найти глянуть.

import express from 'express';
import { PORT }  from '#app/utils/constants.js';
import '#app/global/sequelize.js';

import registerRoutes from '#app/router.js';

const app = express();

app.listen(PORT, (error) => error ? console.log(error) : console.log(`listening port ${PORT}`));

registerRoutes(app);