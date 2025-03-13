import { DataTypes } from 'sequelize';
import sequelize from '#app/global/sequelize.js';

const Roles = sequelize.define('Roles', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,   
	},
});

export default Roles;