import { DataTypes } from 'sequelize';
import sequelize from '#app/global/sequelize.js';

//import Roles from '#app/models/roles.js';
import Roles from './roles.js';

const Posts = sequelize.define('Posts', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			len: [5, 255]
		}
	},
	shortText: {
		type: DataTypes.TEXT,
		allowNull: false,
		validate: {
			len: [25, 1000]
		}
	},
	longText: {
		type: DataTypes.TEXT,
		allowNull: false,
		validate: {
			len: [25, 1000]
		}
	},
	img: {
		type: DataTypes.BLOB('long'),
		allowNull: true,
	},
});


// Option 'foreignKey' renames 'RoleId' to 'roleId'

Posts.belongsTo(Roles, {
	foreignKey: {
		name:'roleId',
		allowNull: false,
	}
});

Roles.hasMany(Posts, {
	foreignKey: 'roleId'
});

export default Posts;