const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
require('./Workouts');

class Exercises extends Model {}

Exercises.init(
	{
		workout_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'workouts',
				key: 'id',
			},
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
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		modelName: 'exercises',
	}
);

module.exports = Exercises;
