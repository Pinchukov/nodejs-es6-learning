import { Sequelize } from "sequelize";

const sequelize = new Sequelize('node-crm-dev', 'node-user-crm', 'hF8yM0gL6u', {
	host: "89.108.65.79",
	dialect: 'mysql',
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