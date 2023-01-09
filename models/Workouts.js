const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workouts extends Model {}

Workouts.init(
	{
		id:{
			type:DataTypes.INTEGER,
			autoIncrement:true,
			allowNull:false,
			primaryKey:true,
		},
			name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		sets: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 0,
		},
		reps: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 0,
		},
		weight: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'user',
				key: 'id',
			},
		},


	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		modelName: 'workouts',
	}
);

module.exports = Workouts;
