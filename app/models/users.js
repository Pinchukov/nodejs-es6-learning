import { DataTypes } from 'sequelize';
import sequelize from '#app/global/sequelize.js';

//import Roles from '#app/models/roles.js';
import Roles from './roles.js';

// 5 video, time: 01.50

const Users = sequelize.define(
	'Users',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		login: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [2, 30]
			}
		},
		// email: {
		// 	type: DataTypes.TEXT,
		// 	allowNull: false,
		// 	validate: {
		// 		isEmail: true,
		// 	}
		// },
		password: {
			//type: DataTypes.VIRTUAL,
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [2, 30]
			}
		},
		fullName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [2, 50]
			}
		},
		avatar: {
			type: DataTypes.BLOB('long'),
			allowNull: true,
		},
	},
	{
		sequelize,
		defaultScope: {
			attributes: { exclude: ['password'] }
		},
		// scopes: {
		// 	auth: {
		// 		attributes: {}
		// 	}
		// }
	}
);

Users.belongsTo(Roles, {
	foreignKey: {
		name: 'roleId',
		allowNull: false,
	}
});

Roles.hasMany(Users, {
	foreignKey: 'roleId'
});

export default Users;