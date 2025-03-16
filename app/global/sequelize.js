import { Sequelize } from "sequelize";
import dbConnect from "../../_private-config.js";

const {user, bd, password, ip, dialect, port} = dbConnect;

const sequelize = new Sequelize(bd, user, password, {
	port: port,
	host: ip,
	dialect: dialect,
	//logging: false,
	dialectOptions: {},
	logging: (msg) => {
		console.log('my', msg)
	}
});

try {
	await sequelize.authenticate();
	console.log('Connection has been established successfully.');
} catch (error) {
	console.error('Unable to connect to the database:', error);
}

export default sequelize;